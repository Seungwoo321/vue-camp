(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{377:function(t,e,r){t.exports=r.p+"assets/img/app-mode.ba899c73.png"},463:function(t,e,r){"use strict";r.r(e);var s=r(49),a=Object(s.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nuxt-서비스-배포-방법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-서비스-배포-방법","aria-hidden":"true"}},[t._v("#")]),t._v(" Nuxt 서비스 배포 방법")]),t._v(" "),s("p",[t._v("Nuxt.js 서비스를 배포하는 방법은 프로젝트를 생성할 때 선택한 Universal 모드의 배포 방식에 따라 다릅니다. 아래 2가지 유형에 따른 배포 방법을 살펴보겠습니다.")]),t._v(" "),s("p",[s("img",{attrs:{src:r(377),alt:"nuxt-app-mode"}})]),t._v(" "),s("h2",{attrs:{id:"ssr-server-side-rendering"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssr-server-side-rendering","aria-hidden":"true"}},[t._v("#")]),t._v(" SSR(Server Side Rendering)")]),t._v(" "),s("p",[t._v("SSR 모드는 위 그림에서 Deployment Target을 "),s("code",[t._v("Server(Node.js hosting)")]),t._v("으로 선택한 경우입니다. 넉스트 설정 파일의 "),s("code",[t._v("target")]),t._v(" 속성 값이 아래와 같이 "),s("code",[t._v("server")]),t._v("로 지정됩니다.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nuxt.config.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'server'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("target")]),t._v(" 속성의 기본 값은 "),s("code",[t._v("server")]),t._v("이기 때문에 설정 파일에 보이지 않더라도 괜찮습니다 😃")])]),t._v(" "),s("p",[t._v("SSR 모드로 생성한 웹 서비스는 배포하려는 서버에 Node.js 서버를 실행할 수 있는 형태로 배포해야 합니다. 각 클라우드 플랫폼별 자세한 가이드는 아래 링크를 참고하세요.")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://nuxtjs.org/docs/2.x/deployment/deployment-azure-portal",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://nuxtjs.org/docs/2.x/deployment/appengine-deployment",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google App Engine"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://nuxtjs.org/docs/2.x/deployment/heroku-deployment",target:"_blank",rel:"noopener noreferrer"}},[t._v("Heroku"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"ssg-static-site-generator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssg-static-site-generator","aria-hidden":"true"}},[t._v("#")]),t._v(" SSG(Static Site Generator)")]),t._v(" "),s("p",[t._v("SSG 모드는 Deployment Target을 "),s("code",[t._v("Static(Static/Jamstack hosting)")]),t._v("을 선택한 경우입니다. 넉스트 설정 파일의 "),s("code",[t._v("target")]),t._v(" 속성 값은 "),s("code",[t._v("static")]),t._v("으로 지정됩니다.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nuxt.config.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'static'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("SSG 모드는 사용자의 페이지 URL 요청이 들어올 때마다 서버에서 그려서 브라우저에 보내주는 SSR 모드와 다르게 웹 서비스를 구성하는 모든 페이지를 미리 그려야 하기 때문에 스태틱 서버에 배포하는 형태로 진행해야 합니다. Netlify 등의 CD(Continuous Delivery) 플랫폼을 이용하여 손쉽게 배포할 수 있습니다.")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://nuxtjs.org/docs/2.x/deployment/netlify-deployment",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netlify"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://nuxtjs.org/docs/2.x/deployment/deployment-amazon-web-services",target:"_blank",rel:"noopener noreferrer"}},[t._v("AWS"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://nuxtjs.org/docs/2.x/deployment/deployment-azure-static-web-apps",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Static Web Apps"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://nuxtjs.org/docs/2.x/deployment/github-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("JAMStack이란 JavaScript & API & Markup을 의미하며 API 서버 없이 사이트를 제작하는 방식을 의미합니다.")])])])},[],!1,null,null,null);e.default=a.exports}}]);