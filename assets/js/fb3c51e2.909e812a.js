"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[2498],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return a?o.createElement(k,i(i({ref:t},c),{},{components:a})):o.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},327:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=a(7462),n=(a(7294),a(3905));const r={sidebar_position:0},i="Packages",s={unversionedId:"packages/README",id:"packages/README",title:"Packages",description:"The Cosmos SDK is a collection of Go modules. This section provides documentation on various packages that can used when developing a Cosmos SDK chain.",source:"@site/docs/packages/README.md",sourceDirName:"packages",slug:"/packages/",permalink:"/main/packages/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"x/genutil",permalink:"/main/modules/genutil/"},next:{title:"Depinject",permalink:"/main/packages/depinject"}},l={},p=[{value:"Core",id:"core",level:2},{value:"State Management",id:"state-management",level:2},{value:"Automation",id:"automation",level:2},{value:"Utilities",id:"utilities",level:2},{value:"Example",id:"example",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"packages"},"Packages"),(0,n.kt)("p",null,"The Cosmos SDK is a collection of Go modules. This section provides documentation on various packages that can used when developing a Cosmos SDK chain.\nIt lists all standalone Go modules that are part of the Cosmos SDK."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For more information on SDK modules, see the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/modules"},"SDK Modules")," section.\nFor more information on SDK tooling, see the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/tooling"},"Tooling")," section.")),(0,n.kt)("h2",{id:"core"},"Core"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/cosmossdk.io/core"},"Core")," - Core library defining SDK interfaces (",(0,n.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/architecture/adr-063-core-module-api"},"ADR-063"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/cosmossdk.io/api"},"API")," - API library containing generated SDK Pulsar API"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/cosmossdk.io/store"},"Store")," - Implementation of the Cosmos SDK store")),(0,n.kt)("h2",{id:"state-management"},"State Management"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/packages/collections"},"Collections")," - State management library"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/packages/orm"},"ORM")," - State management library")),(0,n.kt)("h2",{id:"automation"},"Automation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/packages/depinject"},"Depinject")," - Dependency injection framework"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/cosmossdk.io/client/v2"},"Client/v2")," - Library powering ",(0,n.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/building-modules/autocli"},"AutoCLI"))),(0,n.kt)("h2",{id:"utilities"},"Utilities"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/cosmossdk.io/log"},"Log")," - Logging library"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/cosmossdk.io/errors"},"Errors")," - Error handling library"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/cosmossdk.io/math"},"Math")," - Math library for SDK arithmetic operations")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/cosmossdk.io/simapp"},"SimApp")," - SimApp is ",(0,n.kt)("strong",{parentName:"li"},"the")," sample Cosmos SDK chain. This package should not be imported in your application.")))}m.isMDXComponent=!0}}]);