"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[13401],{713401:function(h,E,o){var _=o(487462),i=o(297685),T=o(204942),l=o(145987),m=o(667294),r=o(294184),C=o.n(r),P=o(416397),u=o(563017),f=o(858784),a=o(459068),s=o(941755),O=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];(0,a.U)(P.blue.primary);var y=m.forwardRef(function(c,M){var D,g=c.className,n=c.icon,t=c.spin,e=c.rotate,d=c.tabIndex,v=c.onClick,I=c.twoToneColor,A=(0,l.Z)(c,O),R=m.useContext(u.Z),p=R.prefixCls,b=p===void 0?"anticon":p,K=R.rootClassName,W=C()(K,b,(D={},(0,T.Z)(D,"".concat(b,"-").concat(n.name),!!n.name),(0,T.Z)(D,"".concat(b,"-spin"),!!t||n.name==="loading"),D),g),B=d;B===void 0&&v&&(B=-1);var L=e?{msTransform:"rotate(".concat(e,"deg)"),transform:"rotate(".concat(e,"deg)")}:void 0,x=(0,s.H9)(I),U=(0,i.Z)(x,2),Z=U[0],w=U[1];return m.createElement("span",(0,_.Z)({role:"img","aria-label":n.name},A,{ref:M,tabIndex:B,onClick:v,className:W}),m.createElement(f.Z,{icon:n,primaryColor:Z,secondaryColor:w,style:L}))});y.displayName="AntdIcon",y.getTwoToneColor=a.m,y.setTwoToneColor=a.U,E.Z=y},563017:function(h,E,o){var _=o(667294),i=(0,_.createContext)({});E.Z=i},858784:function(h,E,o){var _=o(145987),i=o(601413),T=o(667294),l=o(941755),m=["icon","className","onClick","style","primaryColor","secondaryColor"],r={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function C(f){var a=f.primaryColor,s=f.secondaryColor;r.primaryColor=a,r.secondaryColor=s||(0,l.pw)(a),r.calculated=!!s}function P(){return(0,i.Z)({},r)}var u=function(a){var s=a.icon,O=a.className,y=a.onClick,c=a.style,M=a.primaryColor,D=a.secondaryColor,g=(0,_.Z)(a,m),n=T.useRef(),t=r;if(M&&(t={primaryColor:M,secondaryColor:D||(0,l.pw)(M)}),(0,l.C3)(n),(0,l.Kp)((0,l.r)(s),"icon should be icon definiton, but got ".concat(s)),!(0,l.r)(s))return null;var e=s;return e&&typeof e.icon=="function"&&(e=(0,i.Z)((0,i.Z)({},e),{},{icon:e.icon(t.primaryColor,t.secondaryColor)})),(0,l.R_)(e.icon,"svg-".concat(e.name),(0,i.Z)((0,i.Z)({className:O,onClick:y,style:c,"data-icon":e.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},g),{},{ref:n}))};u.displayName="IconReact",u.getTwoToneColors=P,u.setTwoToneColors=C,E.Z=u},459068:function(h,E,o){o.d(E,{U:function(){return l},m:function(){return m}});var _=o(297685),i=o(858784),T=o(941755);function l(r){var C=(0,T.H9)(r),P=(0,_.Z)(C,2),u=P[0],f=P[1];return i.Z.setTwoToneColors({primaryColor:u,secondaryColor:f})}function m(){var r=i.Z.getTwoToneColors();return r.calculated?[r.primaryColor,r.secondaryColor]:r.primaryColor}},941755:function(h,E,o){o.d(E,{C3:function(){return g},H9:function(){return c},Kp:function(){return f},R_:function(){return O},pw:function(){return y},r:function(){return a},vD:function(){return M}});var _=o(601413),i=o(671002),T=o(416397),l=o(444958),m=o(527571),r=o(580334),C=o(667294),P=o(563017);function u(n){return n.replace(/-(.)/g,function(t,e){return e.toUpperCase()})}function f(n,t){(0,r.ZP)(n,"[@ant-design/icons] ".concat(t))}function a(n){return(0,i.Z)(n)==="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&((0,i.Z)(n.icon)==="object"||typeof n.icon=="function")}function s(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(n).reduce(function(t,e){var d=n[e];switch(e){case"class":t.className=d,delete t.class;break;default:delete t[e],t[u(e)]=d}return t},{})}function O(n,t,e){return e?C.createElement(n.tag,(0,_.Z)((0,_.Z)({key:t},s(n.attrs)),e),(n.children||[]).map(function(d,v){return O(d,"".concat(t,"-").concat(n.tag,"-").concat(v))})):C.createElement(n.tag,(0,_.Z)({key:t},s(n.attrs)),(n.children||[]).map(function(d,v){return O(d,"".concat(t,"-").concat(n.tag,"-").concat(v))}))}function y(n){return(0,T.generate)(n)[0]}function c(n){return n?Array.isArray(n)?n:[n]:[]}var M={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},D=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,g=function(t){var e=(0,C.useContext)(P.Z),d=e.csp,v=e.prefixCls,I=D;v&&(I=I.replace(/anticon/g,v)),(0,C.useEffect)(function(){var A=t.current,R=(0,m.A)(A);(0,l.hq)(I,"@ant-design-icons",{prepend:!0,csp:d,attachTo:R})},[])}}}]);
