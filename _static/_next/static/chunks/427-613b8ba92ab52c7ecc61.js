(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[427,179],{7545:function(e,t,n){"use strict";n.d(t,{Z:function(){return F}});var a=n(6610),r=n(5991),l=n(5255),i=n(6089),c=n(7608),o=n(7294),s=n(1216),u=n(5152),f=n(3349),h=n(6156),m=n(5675),d=o.createElement;function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,i.Z)(this,n)}}var p=function(e){(0,l.Z)(n,e);var t=v(n);function n(e){var r;return(0,a.Z)(this,n),r=t.call(this,e),(0,h.Z)((0,f.Z)(r),"jsMenu",(function(){var e=r.state.is_open;r.setState({is_open:!e})})),(0,h.Z)((0,f.Z)(r),"jsMenuChild",(function(){var e=r.state.is_openChild;r.setState({is_openChild:!e})})),r.jsMenu=r.jsMenu.bind((0,f.Z)(r)),r.jsMenuChild=r.jsMenuChild.bind((0,f.Z)(r)),r.state={is_open:!1,is_openChild:!1},r}return(0,r.Z)(n,[{key:"render",value:function(){var e=this;return d(s.ZP,{className:"sticky-header fixed d-lg-none d-md-block"},d("div",{className:"text-right"},d("div",{className:"container mobile-menu-fixed pr-5"},d("h1",{className:"logo-small navbar-brand"},d("a",{href:"index.html",className:"logo"},"Merinda")),d("a",{className:"author-avatar",href:"#"},d(m.default,{src:"/static/images/author-avata-1.jpg",width:32,height:32,alt:"true"})),d("ul",{className:"social-network heading navbar-nav d-lg-flex align-items-center"},d("li",null,d("a",{href:"#"},d("i",{className:"icon-facebook"})))),d("a",{onClick:function(){return e.jsMenu()},className:this.state.is_open?"menu-toggle-icon act":"menu-toggle-icon"},d("span",{className:"lines"})))),d("div",{className:this.state.is_open?"mobi-menu act":"mobi-menu"},d("div",{className:"mobi-menu__logo"},d("h1",{className:"logo navbar-brand"},d("a",{href:"index.html",className:"logo"},"Merinda"))),d("form",{action:"#",method:"get",className:"menu-search-form d-lg-flex"},d("input",{type:"text",className:"search_field",placeholder:"Search...",name:"s"})),d("nav",null,d("ul",null,d("li",{className:"current-menu-item"},d("a",{href:"index.html"},"Home")),d("li",{className:this.state.is_openChild?"menu-item-has-children":"menu-item-has-children open-submenu"},d("a",{href:"categories.html"},"Categories"),d("ul",{className:"sub-menu"},d("li",null,d("a",{href:"categories.html"},"Politics")),d("li",null,d("a",{href:"categories.html"},"Health")),d("li",null,d("a",{href:"categories.html"},"Design"))),d("span",{className:"sub-menu-toggle",onClick:function(){return e.jsMenuChild()}})),d("li",null,d("a",{href:"typography.html"},"Typography")),d("li",null,d("a",{href:"categories.html"},"Politics")),d("li",{className:this.state.is_openChild?"menu-item-has-children":"menu-item-has-children open-submenu"},d("a",{href:"categories.html"},"Health"),d("ul",{className:"sub-menu"},d("li",null,d("a",{href:"categories.html"},"Politics")),d("li",null,d("a",{href:"categories.html"},"Health")),d("li",null,d("a",{href:"categories.html"},"Design"))),d("span",{className:"sub-menu-toggle"})),d("li",null,d("a",{href:"contact.html"},"Contact"))))))}}]),n}(o.Component),g=n(1664),y=n(6046),Z=o.createElement;function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,i.Z)(this,n)}}var b=function(e){(0,l.Z)(n,e);var t=N(n);function n(e){var r;return(0,a.Z)(this,n),r=t.call(this,e),(0,h.Z)((0,f.Z)(r),"listener",null),(0,h.Z)((0,f.Z)(r),"handleScroll",(function(){window.pageYOffset>140?r.state.nav||r.setState({nav:!0}):r.state.nav&&r.setState({nav:!1})})),r.state={nav:!1,menus:[]},r}return(0,r.Z)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",this.handleScroll),y.Z.get("/menu").then((function(t){e.setState({menus:t.data})})).catch((function(e){return console.log(e)}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll")}},{key:"render",value:function(){var e=this.state.menus;return Z("nav",{id:"main-menu",className:this.state.nav?"stick d-lg-block d-none scroll-to-fixed-fixed":"stick d-lg-block d-none"},Z("div",{className:"container"},Z("div",{className:"menu-primary"},Z("ul",{className:"d-flex justify-content-between"},e.map((function(e){return Z("li",{className:"current-menu-item",key:e.ID},Z(g.default,{href:e.url},e.title))})),Z("li",{className:"menu-item-has-children"},Z("a",{href:"#"},"More..."),Z("ul",{className:"sub-menu"},Z("li",null,Z("a",{href:"search.html"},"Search")),Z("li",null,Z("a",{href:"author.html"},"Author")),Z("li",null,Z("a",{href:"404.html"},"404"))))),Z("span",null))))}}]),n}(o.Component),k=n(425),R=o.createElement;function S(){var e=(0,o.useState)(!1),t=e[0],n=e[1],a=(0,k.F)(),r=a.theme,l=a.setTheme;(0,o.useEffect)((function(){n(!0)}),[]);return R("a",{className:"author-avatar",onClick:function(){t&&l("light"===r?"dark":"light")}},R("i",{className:"gg-sun"}))}var w=o.createElement;function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,i.Z)(this,n)}}var C=function(e){(0,l.Z)(n,e);var t=x(n);function n(e){var r;return(0,a.Z)(this,n),r=t.call(this,e),(0,h.Z)((0,f.Z)(r),"toggleSearch",(function(){var e=r.state.active;r.setState({active:!e})})),r.toggleSearch=r.toggleSearch.bind((0,f.Z)(r)),r.state={active:!1,isMounted:!1,setIsMounted:!1},r}return(0,r.Z)(n,[{key:"render",value:function(){return w("header",{id:"header",className:"d-lg-block d-none"},w("div",{className:"container"},w("div",{className:"align-items-center w-100"},w("h1",{className:"logo float-start navbar-brand"},w("a",{href:"/",className:"logo"},"Mediumvn")),w("div",{className:"header-right float-end w-50"},w("div",{className:"d-inline-flex float-end text-right align-items-center"},w("ul",{className:"social-network heading navbar-nav d-lg-flex align-items-center"},w("li",null,w("a",{href:"#"},w("i",{className:"icon-facebook"})))),w("ul",{className:"top-menu heading navbar-nav w-100 d-lg-flex align-items-center"},w("li",null,w("a",{href:"#",className:"btn"},"Contact"))),w(S,null)),w("form",{action:"#",method:"get",className:this.state.active?"search-form d-lg-flex float-end open-search":"search-form d-lg-flex float-end"},w("a",{href:"#",onClick:this.toggleSearch,className:"searh-toggle"},w("i",{className:"icon-search"})),w("input",{type:"text",className:"search_field",placeholder:"Search...",name:"s"})))),w("div",{className:"clearfix"})),w(b,null))}}]),n}(o.Component),D=o.createElement;function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,i.Z)(this,n)}}var E=function(e){(0,l.Z)(n,e);var t=_(n);function n(e){var r;return(0,a.Z)(this,n),(r=t.call(this,e)).state={is_visible:!1},r}return(0,r.Z)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",(function(t){e.toggleVisibility()}))}},{key:"toggleVisibility",value:function(){window.pageYOffset>100?this.setState({is_visible:!0}):this.setState({is_visible:!1})}},{key:"scrollToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.state.is_visible;return D(o.Fragment,null,t&&D("a",{onClick:function(){return e.scrollToTop()},className:"back-to-top heading"},D("i",{className:"icon-left-open-big"}),D("span",{className:"d-lg-inline d-md-none"},"Top")))}}]),n}(o.Component),M=o.createElement;function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,i.Z)(this,n)}}var H=function(e){(0,l.Z)(n,e);var t=P(n);function n(){var e;(0,a.Z)(this,n);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return e=t.call.apply(t,[this].concat(l)),(0,h.Z)((0,f.Z)(e),"state",{scrollPostion:0}),(0,h.Z)((0,f.Z)(e),"listenToScrollEvent",(function(){document.addEventListener("scroll",(function(){requestAnimationFrame((function(){e.calculateScrollDistance()}))}))})),(0,h.Z)((0,f.Z)(e),"calculateScrollDistance",(function(){var t=window.pageYOffset,n=window.innerHeight,a=e.getDocHeight()-n,r=Math.floor(t/a*100);e.setState({scrollPostion:r})})),(0,h.Z)((0,f.Z)(e),"getDocHeight",(function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)})),e}return(0,r.Z)(n,[{key:"componentDidMount",value:function(){this.listenToScrollEvent()}},{key:"render",value:function(){return M(s.ZP,{className:"top-scroll-bar",style:{width:this.state.scrollPostion+"%"}})}}]),n}(o.Component),j=o.createElement;function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,i.Z)(this,n)}}var L=(0,u.default)((function(){return n.e(714).then(n.bind(n,2714))}),{loading:function(){return j("p",null,"Loading...")},loadableGenerated:{webpack:function(){return[2714]},modules:["..\\components\\layout\\layout.js -> ./footer"]}}),F=function(e){(0,l.Z)(n,e);var t=T(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,r.Z)(n,[{key:"render",value:function(){return j(o.Fragment,null,j(H,null),j(p,null),j(C,null),j(s.ZP,null,j("main",{id:"content"},this.props.children)),j(L,null),j(E,null))}}]),n}(o.Component)},6046:function(e,t,n){"use strict";var a=n(9669),r=n.n(a);t.Z=r().create({baseURL:"https://api-fast.ml/wp-json/wp/v2"})},4453:function(){}}]);