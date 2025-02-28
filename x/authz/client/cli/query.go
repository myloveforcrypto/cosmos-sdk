package cli

import (
	"fmt"
	"strings"

	"cosmossdk.io/core/address"
	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/version"
	"github.com/cosmos/cosmos-sdk/x/authz"
	bank "github.com/cosmos/cosmos-sdk/x/bank/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(ac address.Codec) *cobra.Command {
	authorizationQueryCmd := &cobra.Command{
		Use:                        authz.ModuleName,
		Short:                      "Querying commands for the authz module",
		Long:                       "",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	authorizationQueryCmd.AddCommand(
		GetCmdQueryGrants(ac),
		GetQueryGranterGrants(ac),
		GetQueryGranteeGrants(ac),
	)

	return authorizationQueryCmd
}

// GetCmdQueryGrants implements the query authorization command.
func GetCmdQueryGrants(ac address.Codec) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "grants [granter-addr] [grantee-addr] [msg-type-url]?",
		Args:  cobra.RangeArgs(2, 3),
		Short: "query grants for a granter-grantee pair and optionally a msg-type-url",
		Long: strings.TrimSpace(
			fmt.Sprintf(`Query authorization grants for a granter-grantee pair. If msg-type-url
is set, it will select grants only for that msg type.
Examples:
$ %s query %s grants cosmos1skj.. cosmos1skjwj..
$ %s query %s grants cosmos1skjw.. cosmos1skjwj.. %s
`,
				version.AppName, authz.ModuleName,
				version.AppName, authz.ModuleName, bank.SendAuthorization{}.MsgTypeURL()),
		),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := authz.NewQueryClient(clientCtx)

			_, err = ac.StringToBytes(args[0])
			if err != nil {
				return err
			}
			_, err = ac.StringToBytes(args[1])
			if err != nil {
				return err
			}
			msgAuthorized := ""
			if len(args) >= 3 {
				msgAuthorized = args[2]
			}
			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			res, err := queryClient.Grants(
				cmd.Context(),
				&authz.QueryGrantsRequest{
					Granter:    args[0],
					Grantee:    args[1],
					MsgTypeUrl: msgAuthorized,
					Pagination: pageReq,
				},
			)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}
	flags.AddQueryFlagsToCmd(cmd)
	flags.AddPaginationFlagsToCmd(cmd, "grants")
	return cmd
}

// GetQueryGranterGrants returns cmd to query for all grants for a granter.
func GetQueryGranterGrants(ac address.Codec) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "grants-by-granter [granter-addr]",
		Args:  cobra.ExactArgs(1),
		Short: "query authorization grants granted by granter",
		Long: strings.TrimSpace(
			fmt.Sprintf(`Query authorization grants granted by granter.
Examples:
$ %s q %s grants-by-granter cosmos1skj..
`,
				version.AppName, authz.ModuleName),
		),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			_, err = ac.StringToBytes(args[0])
			if err != nil {
				return err
			}

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := authz.NewQueryClient(clientCtx)
			res, err := queryClient.GranterGrants(
				cmd.Context(),
				&authz.QueryGranterGrantsRequest{
					Granter:    args[0],
					Pagination: pageReq,
				},
			)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}
	flags.AddQueryFlagsToCmd(cmd)
	flags.AddPaginationFlagsToCmd(cmd, "granter-grants")
	return cmd
}

// GetQueryGranteeGrants returns cmd to query for all grants for a grantee.
func GetQueryGranteeGrants(ac address.Codec) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "grants-by-grantee [grantee-addr]",
		Args:  cobra.ExactArgs(1),
		Short: "query authorization grants granted to a grantee",
		Long: strings.TrimSpace(
			fmt.Sprintf(`Query authorization grants granted to a grantee.
Examples:
$ %s q %s grants-by-grantee cosmos1skj..
`,
				version.AppName, authz.ModuleName),
		),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			_, err = ac.StringToBytes(args[0])
			if err != nil {
				return err
			}

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := authz.NewQueryClient(clientCtx)
			res, err := queryClient.GranteeGrants(
				cmd.Context(),
				&authz.QueryGranteeGrantsRequest{
					Grantee:    args[0],
					Pagination: pageReq,
				},
			)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}
	flags.AddQueryFlagsToCmd(cmd)
	flags.AddPaginationFlagsToCmd(cmd, "grantee-grants")
	return cmd
}
