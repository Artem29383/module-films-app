(this["webpackJsonpmodule-list-app"]=this["webpackJsonpmodule-list-app"]||[]).push([[0],{18:function(e,t,n){e.exports={filmsContainer:"FilmsList_filmsContainer__IOP_m",search:"FilmsList_search__1ChN-",content:"FilmsList_content__18K1J",item:"FilmsList_item__2TCu7",filmsItem:"FilmsList_filmsItem__3VCEm",removeBtn:"FilmsList_removeBtn__sXhy9",active:"FilmsList_active__3Zu4O",title:"FilmsList_title__3joA8",titleText:"FilmsList_titleText__2TVv7"}},49:function(e,t,n){e.exports={content:"App_content__qVCWk"}},51:function(e,t,n){e.exports={home:"HomePage_home__3u3Mn"}},6:function(e,t,n){e.exports={reactCollapse:"AddFilm_reactCollapse__2hoK8",createdFilmFrame:"AddFilm_createdFilmFrame__Z_SZa",show:"AddFilm_show__5f82m",title:"AddFilm_title__2F5qy",titleText:"AddFilm_titleText__3dEmm",close:"AddFilm_close__22hZp",active:"AddFilm_active__-kmr4",frameFields:"AddFilm_frameFields__3mDyp",field:"AddFilm_field__1J9bo",error:"AddFilm_error__2b_N5",green:"AddFilm_green__3Zx0Z",btn:"AddFilm_btn___JAIF"}},62:function(e,t,n){e.exports=n(92)},67:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(29),i=n.n(c),l=(n(67),n(23)),o=n(49),s=n.n(o),u=n(25),m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(u.c)((function(n){return e(n,t)}))},d=function(e){var t=Object(u.b)();return Object(a.useCallback)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t({type:e,payload:n})}),[t,e])},f=n(51),p=n.n(f),b=n(13),v=n(52),_=n(31),E=n.n(_),O=n(6),j=n.n(O),h=n(8),x=n(9);function F(){var e=Object(h.a)(["\n  position: absolute;\n  font-family: Helvetica_Medium;\n  font-size: 16px;\n  color: red;\n  bottom: -45%;\n  left: 50%;\n  transform: translateX(-50%);\n"]);return F=function(){return e},e}function y(){var e=Object(h.a)(["\n  border: none;\n  background-color: transparent;\n  width: 100%;\n  font-size: 22px;\n  padding-left: 15px;\n  padding-bottom: 7px;\n  border-bottom: 2px solid #999;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  &:focus ~ ",", &:not(:placeholder-shown) ~ "," {\n  top: -5px;\n  color: #ea5a5a;\n  }\n  &:focus ~ ",", &:not(:placeholder-shown) ~ "," {\n  transform: rotateY(0deg);\n  }\n"]);return y=function(){return e},e}function g(){var e=Object(h.a)(["\n  position: absolute;\n  height: 3px;\n  content: '';\n  transform: rotateY(90deg);\n  transition: transform .2s linear;\n  background-color: #ea5a5a;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n"]);return g=function(){return e},e}function L(){var e=Object(h.a)(["\n  font-size: 14px;\n  color: #999;\n  position: absolute;\n  left: 30px;\n  top: 25px;\n  transition: 0.2s ease all;\n"]);return L=function(){return e},e}function k(){var e=Object(h.a)(["\n  position: relative;\n"]);return k=function(){return e},e}var w=x.a.div(k()),C=x.a.label(L()),T=x.a.div(g()),S=x.a.input(y(),C,C,T,T),I=x.a.div(F()),D=function(e){var t=e.value,n=e.handler,a=e.blur,c=e.keyDown,i=e.desc,l=e.isError,o=e.focus,s=void 0!==o&&o;return r.a.createElement(w,null,r.a.createElement(S,{value:t,onChange:n,onBlur:a,onKeyDown:c,placeholder:" ",type:"text",autoFocus:s}),r.a.createElement(T,null),r.a.createElement(C,null,i),l&&!t&&r.a.createElement(I,null,"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435."))};function N(){var e=Object(h.a)(["\n  background: #ea5a5a;\n  text-transform: uppercase;\n  max-width: 160px;\n  width: 100%;\n  font-size: 14px;\n  line-height: 2.5;\n  border: none;\n  cursor: pointer;\n  color: #fff;\n  font-family: Helvetica_Bold;\n  border-radius: 20px;\n  margin-left: 50%;\n  transform: translateX(-50%);\n"]);return N=function(){return e},e}var M=x.a.button(N()),A=function(e){var t=e.children,n=e.clickHandler;return r.a.createElement(M,{onClick:n},t)},P=n(27),U=n(34),B=n.n(U),R=function(e){return e.films.isPost},J=function(e){return e.films.filmsList.entities},Z=function(e){return e.films.filmsList.ids},z=Object(P.a)([function(e){return e.films.init}],(function(e){return e})),H=Object(P.a)([J],(function(e){return e})),K=Object(P.a)([J,Z],(function(e){return B()((function(t){return Object.keys(e[t]||[]).filter((function(e){return"id"!==e&&"fields"!==e}))}))})),V=Object(P.a)([J,Z],(function(e,t){return B()((function(n){return t.filter((function(t){return e[t].name.toLowerCase().includes(n.toLowerCase())}))}))})),X=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),l=Object(b.a)(i,2),o=l[0],s=l[1],u=Object(a.useState)(""),f=Object(b.a)(u,2),p=f[0],_=f[1],O=Object(a.useState)(""),h=Object(b.a)(O,2),x=h[0],F=h[1],y=Object(a.useState)(""),g=Object(b.a)(y,2),L=g[0],k=g[1],w=Object(a.useState)(!1),C=Object(b.a)(w,2),T=C[0],S=C[1],I=m(R),N=d("POST_FILM"),M=d("POST_FILM_SUCCESS"),P=Object(a.useCallback)((function(e){s(e.currentTarget.value)}),[s]),U=Object(a.useCallback)((function(e){_(e.currentTarget.value)}),[_]),B=Object(a.useCallback)((function(e){F(e.currentTarget.value)}),[F]),J=Object(a.useCallback)((function(e){k(e.currentTarget.value)}),[k]);Object(a.useEffect)((function(){T&&setTimeout((function(){return S(!1)}),2e3),I&&setTimeout((function(){return M(!1)}),2e3)}),[T,I,M]);var Z={collapse:"".concat(j.a.reactCollapse),content:"".concat(E()(j.a.createdFilmFrame,n&&j.a.show))};return r.a.createElement(v.Collapse,{isOpened:n||!n,theme:Z},r.a.createElement("div",{className:j.a.title},r.a.createElement("div",{className:j.a.titleText},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u043c")),r.a.createElement("div",{className:j.a.frameFields},r.a.createElement("div",{className:j.a.field},r.a.createElement(D,{isError:T,value:o,handler:P,desc:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"})),r.a.createElement("div",{className:j.a.field},r.a.createElement(D,{isError:T,value:p,handler:U,desc:"\u0416\u0430\u043d\u0440"})),r.a.createElement("div",{className:j.a.field},r.a.createElement(D,{isError:T,value:x,handler:B,desc:"\u0414\u0430\u0442\u0430 \u0432\u044b\u0445\u043e\u0434\u0430"})),r.a.createElement("div",{className:j.a.field},r.a.createElement(D,{isError:T,value:L,handler:J,desc:"\u0421\u0442\u0440\u0430\u043d\u0430 \u0432\u044b\u043f\u0443\u0441\u043a\u0430"})),I&&r.a.createElement("div",{className:E()(j.a.error,j.a.green)},"\u0424\u0438\u043b\u044c\u043c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d.")),r.a.createElement("div",{className:j.a.btn},r.a.createElement(A,{clickHandler:function(){if(o.trim()&&p.trim()&&x.trim()&&L.trim()){var e=Date.now();N({payload:{id:e,name:o,genre:p,date:x,country:L,fields:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435","\u0416\u0430\u043d\u0440","\u0414\u0430\u0442\u0430 \u0432\u044b\u0445\u043e\u0434\u0430","\u0421\u0442\u0440\u0430\u043d\u0430"]}}),s(""),_(""),F(""),k("")}else S(!0)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u043c")),r.a.createElement("div",{className:E()(j.a.close,n&&j.a.active),onClick:function(){c(!n),n&&(s(""),_(""),F(""),k(""))}}))},q=n(21),G=n(18),W=n.n(G),Y=function(){var e=Object(l.f)(),t=Object(a.useState)(""),n=Object(b.a)(t,2),c=n[0],i=n[1],o=m(H),s=m(V)(c),u=/\?search=([(a-zA-Z)|(\u0430-\u044f\u0410-\u042f)|\w]+)/.test(e.location.search),f=d("DELETE_FILM"),p=Object(a.useCallback)((function(t){t.currentTarget.value.trim()?(i(t.currentTarget.value),e.push("/?search=".concat(t.currentTarget.value.toLowerCase()))):(i(""),e.push("/"))}),[i,e]);Object(a.useEffect)((function(){if(u){var t=e.location.search.match(/=(.+)$/m)[1].replace(/%20/g," ");i(t)}}),[]),Object(a.useEffect)((function(){!u&&c&&i("")}),[u,c]);var v=s.map((function(e){return r.a.createElement("li",{key:e,className:W.a.item},r.a.createElement(q.b,{to:"/films/".concat(e),activeClassName:W.a.active,className:W.a.filmsItem},r.a.createElement("div",{className:W.a.title},r.a.createElement("span",{className:W.a.titleText},o[e].name))),r.a.createElement(q.b,{to:"/",className:W.a.removeBtn,onClick:function(){return function(e){f(e)}(e)}},"\u2716"))}));return r.a.createElement("div",{className:W.a.filmsContainer},r.a.createElement("div",{className:W.a.search},r.a.createElement(D,{value:c,handler:p,desc:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430"})),r.a.createElement("div",{className:W.a.content},r.a.createElement("ul",null,v)))},$=function(){return r.a.createElement("div",{className:p.a.home},r.a.createElement(X,null),r.a.createElement(Y,null))},Q=n(26),ee=n(12);function te(){var e=Object(h.a)(["\n  padding: 0 55px;\n"]);return te=function(){return e},e}function ne(){var e=Object(h.a)(["\n  font-size: 22px;\n  color: #444;\n  word-break: break-word;\n  border-bottom: 2px solid #444;\n  width: 100%;\n  padding: 30px 0 7px 15px;\n  margin-left: 50%;\n  transform: translateX(-50%);\n"]);return ne=function(){return e},e}var ae=x.a.div(ne()),re=x.a.div(te()),ce=function(e){var t=e.value,n=e.handler,a=e.handlerKeyDown,c=e.handlerBlur,i=e.name,l=e.field,o=e.fnDBClick,s=e.target,u=e.valueDefault;return r.a.createElement(w,null,r.a.createElement(re,null,s!==i?r.a.createElement(ae,{onDoubleClick:o,"data-name":i},l,": ",u):r.a.createElement(D,{value:t,handler:n,type:"text",blur:c,keyDown:a,focus:!0})),r.a.createElement(T,null))},ie=function(e){var t=e.id,n=e.field,c=e.valueDefault,i=e.name,l=e.films,o=Object(a.useState)(""),s=Object(b.a)(o,2),u=s[0],m=s[1],f=Object(a.useState)(""),p=Object(b.a)(f,2),v=p[0],_=p[1],E=Object(a.useState)(""),O=Object(b.a)(E,2),j=O[0],h=O[1],x=d("UPDATE_FILM_FIELD"),F=Object(a.useCallback)((function(e){_(e.currentTarget.value)}),[_]);return r.a.createElement(ce,{value:v,fnDBClick:function(e){_(c),h(c),m(e.currentTarget.getAttribute("data-name"))},handlerBlur:function(){v.trim()&&v!==j?(x({id:t,payload:Object(ee.a)({},l[t],Object(Q.a)({},u,v))}),m("")):(m(""),_(j))},handlerKeyDown:function(e){"Enter"===e.key&&(v!==j&&v.trim()?(x({id:t,payload:Object(ee.a)({},l[t],Object(Q.a)({},u,v))}),m("")):(_(j),m(""))),"Escape"===e.key&&(m(""),_(j))},handler:F,field:n,name:i,valueDefault:c,target:u})};function le(){var e=Object(h.a)(["\n  text-decoration:none;\n  display: block;\n  color: #fff;\n"]);return le=function(){return e},e}function oe(){var e=Object(h.a)(["\n  width: 500px;\n  height: auto;\n  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.75);\n  border-radius: 20px;\n  margin-right: 50px;\n  margin-top: 100px;\n  padding-bottom: 30px;\n"]);return oe=function(){return e},e}var se=x.a.div(oe()),ue=Object(x.a)(q.b)(le()),me=[{exact:!0,path:["/","/films/:id"],component:$},{exact:!0,path:"/films/:id",component:function(){var e=Object(l.g)().id,t=m(H),n=m(K)(e).map((function(n,a){return r.a.createElement(ie,{key:a,id:e,field:t[e].fields[a],name:n,valueDefault:t[e][n],films:t})}));return r.a.createElement(a.Fragment,null,Object.keys(t).includes(e)?r.a.createElement("div",null,r.a.createElement(se,null,n,r.a.createElement(A,null,r.a.createElement(ue,{to:"/"},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e")))):r.a.createElement(l.a,{to:"/"}))}}],de=function(){var e=m(z),t=d("GET_FILMS");Object(a.useEffect)((function(){t()}),[t]);var n=me.map((function(e){var t=e.exact,n=e.path,a=e.component;return r.a.createElement(l.b,{exact:t,key:n,path:n,render:function(e){return r.a.createElement(a,e)}})}));return r.a.createElement(a.Fragment,null,e&&r.a.createElement("div",{className:s.a.content},n))},fe=n(19),pe=n(60),be=n(57),ve=function(e){return JSON.parse(JSON.stringify(e))},_e=function(e,t){var n=Object(ee.a)({},e);return delete n[t],n},Ee=function(e,t){var n=e.indexOf(t);return e.splice(n,1),e},Oe={filmsList:[],init:!1,isPost:!1},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PUT_FILMS":var n=t.payload,a=n.entities,r=n.ids;return Object(ee.a)({},e,{filmsList:{entities:a,ids:r}});case"ADD_FILM":var c=t.payload,i=c.id,l=c.payload,o=ve(e.filmsList),s=o.entities,u=o.ids;return s[i]=l,u.push(i),Object(ee.a)({},e,{filmsList:{entities:s,ids:u}});case"REMOVE_FILM":var m=ve(e.filmsList),d=m.entities,f=m.ids;return Object(ee.a)({},e,{filmsList:Object(ee.a)({},e.filmsList,{entities:_e(d,t.payload),ids:Ee(f,t.payload)})});case"UPDATE_FILM_FIELD_REDUCER":var p=t.payload,b=p.id,v=p.obj,_=ve(e.filmsList),E=_.entities,O=_.ids;return E[b]=v,Object(ee.a)({},e,{filmsList:{entities:E,ids:O}});case"POST_FILM_SUCCESS":return Object(ee.a)({},e,{isPost:t.payload});case"SET_INIT":return Object(ee.a)({},e,{init:!0});default:return e}},he=n(16),xe=n.n(he),Fe=n(7),ye=n(37),ge=n(58),Le=n(59),ke=n.n(Le),we=new function e(){var t=this;Object(ge.a)(this,e),this.getFilms=function(){return t.instance.get("filmsList")},this.postCreateFilms=function(e){return t.instance.post("filmsList",e)},this.deleteFilm=function(e){return t.instance.delete("filmsList/".concat(e))},this.updateFilm=function(e,n){return t.instance.put("filmsList/".concat(e),n)},this.instance=ke.a.create({baseURL:"http://localhost:5000/"})},Ce=xe.a.mark(Ne),Te=xe.a.mark(Me),Se=xe.a.mark(Ae),Ie=xe.a.mark(Pe),De=xe.a.mark(Ue);function Ne(e){return xe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Fe.a)(we.postCreateFilms,e.payload.payload);case 3:return t.next=5,Object(Fe.b)({type:"ADD_FILM",payload:{id:e.payload.payload.id,payload:e.payload.payload}});case 5:return t.next=7,Object(Fe.b)({type:"POST_FILM_SUCCESS",payload:!0});case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),Ce,null,[[0,9]])}function Me(){var e,t,n,a;return xe.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(Fe.a)(we.getFilms);case 3:return e=r.sent,t=new ye.b.Entity("filmsList"),n=[t],a=Object(ye.a)(e.data,n),r.next=9,Object(Fe.b)({type:"PUT_FILMS",payload:{entities:a.entities.filmsList||{},ids:a.result}});case 9:return r.next=11,Object(Fe.b)({type:"SET_INIT"});case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),console.log(r.t0);case 16:case"end":return r.stop()}}),Te,null,[[0,13]])}function Ae(e){return xe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Fe.a)(we.deleteFilm,e.payload);case 3:return t.next=5,Object(Fe.b)({type:"REMOVE_FILM",payload:e.payload});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),Se,null,[[0,7]])}function Pe(e){return xe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Fe.a)(we.updateFilm,e.payload.id,e.payload.payload);case 3:return t.next=5,Object(Fe.b)({type:"UPDATE_FILM_FIELD_REDUCER",payload:{id:e.payload.id,obj:e.payload.payload}});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),Ie,null,[[0,7]])}function Ue(){return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Fe.c)("POST_FILM",Ne);case 2:return e.next=4,Object(Fe.c)("GET_FILMS",Me);case 4:return e.next=6,Object(Fe.c)("DELETE_FILM",Ae);case 6:return e.next=8,Object(Fe.c)("UPDATE_FILM_FIELD",Pe);case 8:case"end":return e.stop()}}),De)}var Be=Object(pe.a)(),Re=Object(fe.combineReducers)({films:je}),Je=Object(fe.createStore)(Re,Object(be.composeWithDevTools)(Object(fe.applyMiddleware)(Be)));Be.run(Ue);var Ze=Je;i.a.render(r.a.createElement(u.a,{store:Ze},r.a.createElement(q.a,null,r.a.createElement(de,null))),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.8cfe1703.chunk.js.map