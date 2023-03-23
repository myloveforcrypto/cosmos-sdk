package testutil

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/address"
	"github.com/cosmos/cosmos-sdk/types/bech32"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

type Bech32Codec struct {
	bech32Prefix string
}

var _ address.Codec = &Bech32Codec{}

func NewBech32Codec() Bech32Codec {
	return Bech32Codec{"cosmos"}
}

// StringToBytes encodes text to bytes
func (bc Bech32Codec) StringToBytes(text string) ([]byte, error) {
	hrp, bz, err := bech32.DecodeAndConvert(text)
	if err != nil {
		return nil, err
	}

	if hrp != bc.bech32Prefix {
		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "hrp does not match bech32Prefix")
	}

	if err := sdk.VerifyAddressFormat(bz); err != nil {
		return nil, err
	}

	return bz, nil
}

// BytesToString decodes bytes to text
func (bc Bech32Codec) BytesToString(bz []byte) (string, error) {
	text, err := bech32.ConvertAndEncode(bc.bech32Prefix, bz)
	if err != nil {
		return "", err
	}

	return text, nil
}