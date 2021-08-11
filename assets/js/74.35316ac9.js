(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{493:function(t,a,s){"use strict";s.r(a);var n=s(49),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"테스트-코드가-필요한-이유"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#테스트-코드가-필요한-이유","aria-hidden":"true"}},[t._v("#")]),t._v(" 테스트 코드가 필요한 이유")]),t._v(" "),s("p",[t._v("개발자에게 테스트 코드가 필요한 이유는 아래 2가지에 소모되는 시간을 줄이기 위해서입니다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("1. 방금 구현한 기능이 잘 돌아가는지 확인하는 시간\n2. 특정 기능을 변경했을 때 기존에 있던 다른 기능을 깨트리는지 확인하는 시간\n")])])]),s("p",[t._v("애플리케이션이 커지면 커질수록 위 시나리오를 점검하는데 많은 시간이 소요됩니다. 특히 진행되고 있는 프로젝트에 투입되어서 남이 짠 코드를 변경한다고 했을 때, 코드를 변경하는 시간보다 그 코드가 다른 코드에 악영향을 주는지 분석하고 확인하는데 시간이 더 많이 들어가죠.")]),t._v(" "),s("p",[t._v("테스트 코드는 이러한 시간을 줄여주고 개발자의 자신감을 높여줍니다. 테스트 코드가 많으면 많을수록 더 애플리케이션의 안정성이 높아지죠.")]),t._v(" "),s("h2",{attrs:{id:"무엇을-어떻게-테스트-할-것인가"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#무엇을-어떻게-테스트-할-것인가","aria-hidden":"true"}},[t._v("#")]),t._v(" 무엇을 어떻게 테스트 할 것인가?")]),t._v(" "),s("p",[t._v("테스트 코드를 작성할 때 가장 중요한 것은 무엇을 어떻게 테스트 할 것인가 정하는 것입니다.")]),t._v(" "),s("p",[t._v("테스트 코드의 목적은 "),s("strong",[t._v("구현된 코드의 흐름이나 로직을 확인하는 것이 아니라 사용자의 관점에서 버튼 클릭과 키 입력 등의 이벤트에 따라 UI가 올바르게 전개되는지 확인하는 것")]),t._v("입니다. 예를 들어 아래와 같은 코드가 있다고 해봅시다.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("addCounter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("add"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ counter }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      counter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addCounter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("counter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("counter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("위 코드는 add 버튼을 클릭했을 때 "),s("code",[t._v("counter")]),t._v(" 값을 1씩 증가시키는 코드입니다. 이 코드가 잘 동작하는지 어떻게 확인할 수 있을까요? 아마 테스트 코드가 따로 없다고 가정한다면 대부분 버튼을 클릭해보고 "),s("code",[t._v("counter")]),t._v(" 값이 증가하는지 확인할 겁니다.")]),t._v(" "),s("p",[t._v("여기서 테스트 코드를 적용한다고 했을 때 다음 2가지 시나리오를 점검할 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("1. add 버튼을 클릭했을 때 'counter' 값이 증가했는지 확인\n2. add 버튼을 클릭했을 때 증가된 'counter' 값이 화면에 출력되는지 확인\n")])])]),s("p",[t._v("위 2개 시나리오 중 사용자 관점에서 작성된 테스트 시나리오는 2번입니다. 1번은 단순히 코드 관점에서 메서드가 올바르게 동작하는지 확인하는 수준이죠.")]),t._v(" "),s("p",[t._v("이처럼 테스트 코드는 개발자가 구현한 로직이나 코드 결과를 검증하는 것이 아니라 특정 이벤트에 의해 변경될 UI를 검증할 수 있어야 합니다.")]),t._v(" "),s("h2",{attrs:{id:"테스팅-도구"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#테스팅-도구","aria-hidden":"true"}},[t._v("#")]),t._v(" 테스팅 도구")]),t._v(" "),s("p",[t._v("테스팅 도구는 요구 사항 변경에 따른 기능 추가 및 리팩토링을 할 때 소프트웨어의 안정성을 높여주는 도구입니다. 복잡한 웹 애플리케이션일수록, 그리고 같이 협업하는 팀원이 많을수록 테스트 케이스를 바탕으로 각자 기능을 구현하면 기능 변경에서 오는 에러를 미연에 방지할 수 있습니다.")]),t._v(" "),s("p",[t._v("시중에서 가장 많이 사용되는 테스팅 도구는 다음과 같습니다.")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jest"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://mochajs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mocha"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://jasmine.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jasmine"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/airbnb/enzyme",target:"_blank",rel:"noopener noreferrer"}},[t._v("Enzyme"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("다음 챕터에서는 Jest에 대해 알아보겠습니다.")])])},[],!1,null,null,null);a.default=e.exports}}]);