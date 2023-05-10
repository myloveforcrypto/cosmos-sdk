(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{607:function(e,t,a){"use strict";a.r(t);var o=a(1),l=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-013-observability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-013-observability"}},[e._v("#")]),e._v(" ADR 013: Observability")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("20-01-2020: Initial Draft")])]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Proposed")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("Telemetry is paramount into debugging and understanding what the application is doing and how it is\nperforming. We aim to expose metrics from modules and other core parts of the Cosmos SDK.")]),e._v(" "),a("p",[e._v("In addition, we should aim to support multiple configurable sinks that an operator may choose from.\nBy default, when telemetry is enabled, the application should track and expose metrics that are\nstored in-memory. The operator may choose to enable additional sinks, where we support only\n"),a("a",{attrs:{href:"https://prometheus.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus"),a("OutboundLink")],1),e._v(" for now, as it's battle-tested, simple to setup, open source,\nand is rich with ecosystem tooling.")]),e._v(" "),a("p",[e._v("We must also aim to integrate metrics into the Cosmos SDK in the most seamless way possible such that\nmetrics may be added or removed at will and without much friction. To do this, we will use the\n"),a("a",{attrs:{href:"https://github.com/armon/go-metrics",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-metrics"),a("OutboundLink")],1),e._v(" library.")]),e._v(" "),a("p",[e._v("Finally, operators may enable telemetry along with specific configuration options. If enabled, metrics\nwill be exposed via "),a("code",[e._v("/metrics?format={text|prometheus}")]),e._v(" via the API server.")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("We will add an additional configuration block to "),a("code",[e._v("app.toml")]),e._v(" that defines telemetry settings:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIwojIyMgICAgICAgICAgICAgICAgICAgICAgICAgVGVsZW1ldHJ5IENvbmZpZ3VyYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgIyMjCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKClt0ZWxlbWV0cnldCgojIFByZWZpeGVkIHdpdGgga2V5cyB0byBzZXBhcmF0ZSBzZXJ2aWNlcwpzZXJ2aWNlLW5hbWUgPSB7eyAuVGVsZW1ldHJ5LlNlcnZpY2VOYW1lIH19CgojIEVuYWJsZWQgZW5hYmxlcyB0aGUgYXBwbGljYXRpb24gdGVsZW1ldHJ5IGZ1bmN0aW9uYWxpdHkuIFdoZW4gZW5hYmxlZCwKIyBhbiBpbi1tZW1vcnkgc2luayBpcyBhbHNvIGVuYWJsZWQgYnkgZGVmYXVsdC4gT3BlcmF0b3JzIG1heSBhbHNvIGVuYWJsZWQKIyBvdGhlciBzaW5rcyBzdWNoIGFzIFByb21ldGhldXMuCmVuYWJsZWQgPSB7eyAuVGVsZW1ldHJ5LkVuYWJsZWQgfX0KCiMgRW5hYmxlIHByZWZpeGluZyBnYXVnZSB2YWx1ZXMgd2l0aCBob3N0bmFtZQplbmFibGUtaG9zdG5hbWUgPSB7eyAuVGVsZW1ldHJ5LkVuYWJsZUhvc3RuYW1lIH19CgojIEVuYWJsZSBhZGRpbmcgaG9zdG5hbWUgdG8gbGFiZWxzCmVuYWJsZS1ob3N0bmFtZS1sYWJlbCA9IHt7IC5UZWxlbWV0cnkuRW5hYmxlSG9zdG5hbWVMYWJlbCB9fQoKIyBFbmFibGUgYWRkaW5nIHNlcnZpY2UgdG8gbGFiZWxzCmVuYWJsZS1zZXJ2aWNlLWxhYmVsID0ge3sgLlRlbGVtZXRyeS5FbmFibGVTZXJ2aWNlTGFiZWwgfX0KCiMgUHJvbWV0aGV1c1JldGVudGlvblRpbWUsIHdoZW4gcG9zaXRpdmUsIGVuYWJsZXMgYSBQcm9tZXRoZXVzIG1ldHJpY3Mgc2luay4KcHJvbWV0aGV1cy1yZXRlbnRpb24tdGltZSA9IHt7IC5UZWxlbWV0cnkuUHJvbWV0aGV1c1JldGVudGlvblRpbWUgfX0K"}}),e._v(" "),a("p",[e._v("The given configuration allows for two sinks -- in-memory and Prometheus. We create a "),a("code",[e._v("Metrics")]),e._v("\ntype that performs all the bootstrapping for the operator, so capturing metrics becomes seamless.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTWV0cmljcyBkZWZpbmVzIGEgd3JhcHBlciBhcm91bmQgYXBwbGljYXRpb24gdGVsZW1ldHJ5IGZ1bmN0aW9uYWxpdHkuIEl0IGFsbG93cwovLyBtZXRyaWNzIHRvIGJlIGdhdGhlcmVkIGF0IGFueSBwb2ludCBpbiB0aW1lLiBXaGVuIGNyZWF0aW5nIGEgTWV0cmljcyBvYmplY3QsCi8vIGludGVybmFsbHksIGEgZ2xvYmFsIG1ldHJpY3MgaXMgcmVnaXN0ZXJlZCB3aXRoIGEgc2V0IG9mIHNpbmtzIGFzIGNvbmZpZ3VyZWQKLy8gYnkgdGhlIG9wZXJhdG9yLiBJbiBhZGRpdGlvbiB0byB0aGUgc2lua3MsIHdoZW4gYSBwcm9jZXNzIGdldHMgYSBTSUdVU1IxLCBhCi8vIGR1bXAgb2YgZm9ybWF0dGVkIHJlY2VudCBtZXRyaWNzIHdpbGwgYmUgc2VudCB0byBTVERFUlIuCnR5cGUgTWV0cmljcyBzdHJ1Y3QgewogIG1lbVNpbmsgICAgICAgICAgICptZXRyaWNzLklubWVtU2luawogIHByb21ldGhldXNFbmFibGVkIGJvb2wKfQoKLy8gR2F0aGVyIGNvbGxlY3RzIGFsbCByZWdpc3RlcmVkIG1ldHJpY3MgYW5kIHJldHVybnMgYSBHYXRoZXJSZXNwb25zZSB3aGVyZSB0aGUKLy8gbWV0cmljcyBhcmUgZW5jb2RlZCBkZXBlbmRpbmcgb24gdGhlIHR5cGUuIE1ldHJpY3MgYXJlIGVpdGhlciBlbmNvZGVkIHZpYQovLyBQcm9tZXRoZXVzIG9yIEpTT04gaWYgaW4tbWVtb3J5LgpmdW5jIChtICpNZXRyaWNzKSBHYXRoZXIoZm9ybWF0IHN0cmluZykgKEdhdGhlclJlc3BvbnNlLCBlcnJvcikgewogIHN3aXRjaCBmb3JtYXQgewogIGNhc2UgRm9ybWF0UHJvbWV0aGV1czoKICAgIHJldHVybiBtLmdhdGhlclByb21ldGhldXMoKQoKICBjYXNlIEZvcm1hdFRleHQ6CiAgICByZXR1cm4gbS5nYXRoZXJHZW5lcmljKCkKCiAgY2FzZSBGb3JtYXREZWZhdWx0OgogICAgcmV0dXJuIG0uZ2F0aGVyR2VuZXJpYygpCgogIGRlZmF1bHQ6CiAgICByZXR1cm4gR2F0aGVyUmVzcG9uc2V7fSwgZm10LkVycm9yZigmcXVvdDt1bnN1cHBvcnRlZCBtZXRyaWNzIGZvcm1hdDogJXMmcXVvdDssIGZvcm1hdCkKICB9Cn0K"}}),e._v(" "),a("p",[e._v("In addition, "),a("code",[e._v("Metrics")]),e._v(" allows us to gather the current set of metrics at any given point in time. An\noperator may also choose to send a signal, SIGUSR1, to dump and print formatted metrics to STDERR.")]),e._v(" "),a("p",[e._v("During an application's bootstrapping and construction phase, if "),a("code",[e._v("Telemetry.Enabled")]),e._v(" is "),a("code",[e._v("true")]),e._v(", the\nAPI server will create an instance of a reference to "),a("code",[e._v("Metrics")]),e._v(" object and will register a metrics\nhandler accordingly.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAocyAqU2VydmVyKSBTdGFydChjZmcgY29uZmlnLkNvbmZpZykgZXJyb3IgewogIC8vIC4uLgoKICBpZiBjZmcuVGVsZW1ldHJ5LkVuYWJsZWQgewogICAgbSwgZXJyIDo9IHRlbGVtZXRyeS5OZXcoY2ZnLlRlbGVtZXRyeSkKICAgIGlmIGVyciAhPSBuaWwgewogICAgICByZXR1cm4gZXJyCiAgICB9CgogICAgcy5tZXRyaWNzID0gbQogICAgcy5yZWdpc3Rlck1ldHJpY3MoKQogIH0KCiAgLy8gLi4uCn0KCmZ1bmMgKHMgKlNlcnZlcikgcmVnaXN0ZXJNZXRyaWNzKCkgewogIG1ldHJpY3NIYW5kbGVyIDo9IGZ1bmModyBodHRwLlJlc3BvbnNlV3JpdGVyLCByICpodHRwLlJlcXVlc3QpIHsKICAgIGZvcm1hdCA6PSBzdHJpbmdzLlRyaW1TcGFjZShyLkZvcm1WYWx1ZSgmcXVvdDtmb3JtYXQmcXVvdDspKQoKICAgIGdyLCBlcnIgOj0gcy5tZXRyaWNzLkdhdGhlcihmb3JtYXQpCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgcmVzdC5Xcml0ZUVycm9yUmVzcG9uc2UodywgaHR0cC5TdGF0dXNCYWRSZXF1ZXN0LCBmbXQuU3ByaW50ZigmcXVvdDtmYWlsZWQgdG8gZ2F0aGVyIG1ldHJpY3M6ICVzJnF1b3Q7LCBlcnIpKQogICAgICByZXR1cm4KICAgIH0KCiAgICB3LkhlYWRlcigpLlNldCgmcXVvdDtDb250ZW50LVR5cGUmcXVvdDssIGdyLkNvbnRlbnRUeXBlKQogICAgXywgXyA9IHcuV3JpdGUoZ3IuTWV0cmljcykKICB9CgogIHMuUm91dGVyLkhhbmRsZUZ1bmMoJnF1b3Q7L21ldHJpY3MmcXVvdDssIG1ldHJpY3NIYW5kbGVyKS5NZXRob2RzKCZxdW90O0dFVCZxdW90OykKfQo="}}),e._v(" "),a("p",[e._v("Application developers may track counters, gauges, summaries, and key/value metrics. There is no\nadditional lifting required by modules to leverage profiling metrics. To do so, it's as simple as:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBCYXNlS2VlcGVyKSBNaW50Q29pbnMoY3R4IHNkay5Db250ZXh0LCBtb2R1bGVOYW1lIHN0cmluZywgYW10IHNkay5Db2lucykgZXJyb3IgewogIGRlZmVyIG1ldHJpY3MuTWVhc3VyZVNpbmNlKHRpbWUuTm93KCksICZxdW90O01pbnRDb2lucyZxdW90OykKICAvLyAuLi4KfQo="}}),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("Exposure into the performance and behavior of an application")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")])],1)}),[],!1,null,null,null);t.default=l.exports}}]);