$wnd.jsme.runAsyncCallback10('var dta="400px",eta="Accept",fta="Close (ESC)",gta="Paste",hta="Paste the text to import into the text area below.",ita="accept",jta="close",m$="data-selenium-id",kta="dragend",lta="dragenter",mta="dragover",nta="drop",ota="file",pta="gwt-FileUpload",qta="gwt-HTML",rta="jsa_clipboard/button/",sta="jsa_clipboard/text_area",tta="jsa_clipboard/window";x(254,242,{});function n$(){n$=z;o$=new BD(kta,new p$)}function q$(a){a.a.cancelBubble=!0;MB(a.a)}function p$(){}x(255,254,{},p$);_.fe=function(){q$(this)};\n_.ie=function(){return o$};var o$;function r$(){r$=z;s$=new BD(lta,new t$)}function t$(){}x(256,254,{},t$);_.fe=function(){q$(this)};_.ie=function(){return s$};var s$;function u$(){u$=z;v$=new BD(mta,new w$)}function w$(){}x(257,254,{},w$);_.fe=function(){q$(this)};_.ie=function(){return v$};var v$;function x$(){x$=z;y$=new BD(nta,new z$)}function z$(){}x(258,254,{},z$);\n_.fe=function(a){var b,c,d,e;this.a.cancelBubble=!0;MB(this.a);d=(this.a.dataTransfer||null).files;e=0;a:for(;e<d.length;++e){if(0<a.a.d&&e>=a.a.d)break a;b=d[e];c=new FileReader;uta(c,a.a.b);1==a.a.c&&c.readAsText(b)}0==d.length&&(b=(this.a.dataTransfer||null).getData(yq),a.a.b.a.a.d.ob[Uq]=null!=b?b:n)};_.ie=function(){return y$};var y$;function A$(a,b,c){XE(!a.lb?a.lb=new jF(a):a.lb,c,b)}function B$(){this.ob=IB(ota);this.ob[jn]=pta}x(384,365,Ir,B$);_.Be=function(a){MH(this,a)};\nfunction C$(a){var b=LB(En);$v(nq,I1(b));this.ob=b;this.b=new Z2(this.ob);this.ob[jn]=qta;Y2(this.b,a,!0);g3(this)}x(388,389,Ir,C$);function D$(a,b){var c,d;c=LB(Lq);d=LB(xq);d[Km]=a.a.a;d.style[Vq]=a.b.a;var e=(KG(),LG(d));c.appendChild(e);JG(a.d,c);YH(a,b,d)}function E$(){SI.call(this);this.a=(VI(),bJ);this.b=(cJ(),fJ);this.e[dn]=$f;this.e[cn]=$f}x(437,381,Sr,E$);_.$e=function(a){var b;b=KB(a.ob);(a=bI(this,a))&&this.d.removeChild(KB(b));return a};\nfunction F$(a){try{a.s=!1;var b,c,d;d=a.gb;c=a._;d||(a.ob.style[Wq]=eo,BJ(a.ob,!1),a._=!1,a.mf());b=a.ob;b.style[po]=0+(FC(),Bp);b.style[Gq]=bg;Z4(a,M0(aC($doc)+($B()-FB(a.ob,gp)>>1),0),M0(bC($doc)+(ZB()-FB(a.ob,fp)>>1),0));d||((a._=c)?(a.ob.style[nn]=Pp,a.ob.style[Wq]=Xq,BJ(a.ob,!0),Fx(a.fb,200)):(a.ob.style[Wq]=Xq,BJ(a.ob,!0)))}finally{a.s=!0}}function G$(a,b){var c;c=(new Q3(a)).wd.mg();c.ob.setAttribute(m$,rta+b);return c}\nfunction H$(a){var b;b=G$(fta,jta);IH(b,new I$(a),(HD(),HD(),ID));return b}\nfunction J$(){M4();var a,b,c,d,e;k5.call(this,(D5(),E5),null,!0);this.xj();this.cb=!0;this.ob.setAttribute(m$,tta);this.U=!0;a=new C$(this.e);this.d=new oK;this.d.ob.setAttribute(m$,sta);CH(this.d,dg);zH(this.d,dg);D4(this,dta);e=new E$;e.ob.style[co]=dg;e.e[dn]=10;c=(VI(),WI);e.a=c;D$(e,a);D$(e,this.d);this.c=new jJ;this.c.e[dn]=20;for(b=this.vj(),c=0,d=b.length;c<d;++c)a=b[c],gJ(this.c,a);D$(e,this.c);R4(this,e);a5(this,!1);IH(this.d,new K$(this),(bE(),bE(),cE));this.wj()}x(795,796,Q0,J$);\n_.vj=function(){return A(zK,o,50,[H$(this)])};_.wj=function(){var a=this.d;a.ob.readOnly=!0;var b=DH(a.ob)+"-readonly";yH(a.Ne(),b,!0)};_.xj=function(){C5(this.H.b,"Copy")};_.mf=function(){j5(this);this.ob.style[br]=hg};_.c=null;_.d=null;_.e="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function K$(a){this.a=a}x(798,1,{},K$);_.qe=function(a){27==(a.a.keyCode||0)&&T4(this.a,!1)};_.a=null;\nfunction I$(a){this.a=a}x(799,1,{},I$);_.le=function(){T4(this.a,!1)};_.a=null;function L$(a){this.a=a}x(800,1,{},L$);\n_.Td=function(){EH(this.a.d.ob,!0);QI(this.a.d,!0);var a=this.a.d,b;b=GB(a.ob,Uq).length;if(0<b&&a.jb){if(0>b)throw new tW("Length must be a positive integer. Length: "+b);if(b>GB(a.ob,Uq).length)throw new tW("From Index: 0  To Index: "+b+"  Text Length: "+GB(a.ob,Uq).length);var a=a.ob,c=0;try{var d=a.createTextRange(),e=a.value.substr(c,b).match(/(\\r\\n)/gi);null!=e&&(b-=e.length);var f=a.value.substring(0,c).match(/(\\r\\n)/gi);null!=f&&(c-=f.length);d.collapse(!0);d.moveStart("character",c);d.moveEnd("character",\nb);d.select()}catch(g){}}};_.a=null;function M$(a){var b;b=G$(a.a,ita);IH(b,new N$(a),(HD(),HD(),ID));return b}function O$(a){a.e=hta;a.a=eta;C5(a.H.b,gta)}function P$(a){M4();J$.call(this);this.b=a}x(802,795,Q0,P$);_.vj=function(){return A(zK,o,50,[M$(this),H$(this)])};_.wj=function(){zH(this.d,"150px")};_.xj=function(){O$(this)};_.mf=function(){j5(this);this.ob.style[br]=hg;sB((pB(),qB),new Q$(this))};_.a=null;_.b=null;function R$(a){M4();P$.call(this,a)}x(801,802,Q0,R$);\n_.vj=function(){var a;return A(zK,o,50,[M$(this),(a=new B$,a.ob.setAttribute(m$,"jsa_clipboard/button/browse_upload"),IH(a,new S$(this),(U1(),U1(),V1)),a),H$(this)])};_.wj=function(){zH(this.d,"150px");var a=new T$(this),b=this.d;A$(b,new U$,(r$(),r$(),s$));A$(b,new V$,(n$(),n$(),o$));A$(b,new W$,(u$(),u$(),v$));A$(b,new X$(a),(x$(),x$(),y$))};_.xj=function(){O$(this);this.e+=" Or drag and drop a file on it."};function S$(a){this.a=a}x(803,1,{},S$);\n_.ke=function(a){var b,c;b=new FileReader;a=(c=a.a.srcElement,c.files[0]);vta(b,new Y$(this));b.readAsText(a)};_.a=null;function Y$(a){this.a=a}x(804,1,{},Y$);_.yj=function(a){lK(this.a.a.d,a)};_.a=null;x(807,1,{});x(806,807,{});_.b=null;_.c=1;_.d=-1;function T$(a){this.a=a;this.b=new Z$(this);this.c=this.d=1}x(805,806,{},T$);_.a=null;function Z$(a){this.a=a}x(808,1,{},Z$);_.yj=function(a){this.a.a.d.ob[Uq]=null!=a?a:n};_.a=null;function N$(a){this.a=a}x(812,1,{},N$);\n_.le=function(){if(this.a.b){var a=this.a.b,b;b=new BN(a.a,0,GB(this.a.d.ob,Uq));bU(a.a.a,b.a)}T4(this.a,!1)};_.a=null;function Q$(a){this.a=a}x(813,1,{},Q$);_.Td=function(){EH(this.a.d.ob,!0);QI(this.a.d,!0)};_.a=null;x(814,1,hs);_.ce=function(){var a,b;a=new $$(this.a);void 0!=$wnd.FileReader?b=new R$(a):b=new P$(a);F4(b);F$(b)};function $$(a){this.a=a}x(815,1,{},$$);_.a=null;x(816,1,hs);\n_.ce=function(){var a;a=new J$;var b=this.a,c,d;lK(a.d,b);c=(d=QW(b,"\\r\\n|\\r|\\n|\\n\\r"),d.length);1>=c&&(c=~~(b.length/16));zH(a.d,20*(10>c+1?c+1:10)+Bp);sB((pB(),qB),new L$(a));F4(a);F$(a)};function vta(a,b){a.onload=function(a){b.yj(a.target.result)}}function uta(a,b){a.onloadend=function(a){b.yj(a.target.result)}}function X$(a){this.a=a}x(823,1,{},X$);_.a=null;function U$(){}x(824,1,{},U$);function V$(){}x(825,1,{},V$);function W$(){}x(826,1,{},W$);Z(807);Z(806);Z(823);Z(824);Z(825);Z(826);Z(254);\nZ(256);Z(255);Z(257);Z(258);Z(795);Z(802);Z(801);Z(815);Z(798);Z(799);Z(800);Z(812);Z(813);Z(803);Z(804);Z(805);Z(808);Z(388);Z(437);Z(384);U(O0)(10);\n//@ sourceURL=10.js\n')