(function(e){function t(t){for(var s,i,r=t[0],l=t[1],c=t[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],s=!0,r=1;r<o.length;r++){var l=o[r];0!==n[l]&&(s=!1)}s&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var s={},n={app:0},a=[];function i(t){if(s[t])return s[t].exports;var o=s[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=s,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(o,s,function(t){return e[t]}.bind(null,s));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var p=l;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0710":function(e,t,o){"use strict";var s=o("f9ee"),n=o.n(s);n.a},"56d7":function(e,t,o){"use strict";o.r(t);var s=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("router-view")],1)},a=[],i=o("2877"),r={},l=Object(i["a"])(r,n,a,!1,null,null,null),c=l.exports,p=o("8c4f"),u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("hero"),o("chatform")],1)},d=[],m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.smallDevice?e._e():o("div",[o("div",{staticClass:"hero",style:{background:"url("+e.images[0]+") no-repeat center"}},[o("div",{staticStyle:{"text-align":"center"}},[o("div",{staticStyle:{"font-size":"30px","padding-top":"5%"}},[o("div",{staticStyle:{"padding-left":"60%","padding-right":"10%"}},[o("p",{staticClass:"header-text"},[o("span",{},[e._v(e._s(e.text)+" ")])])])])])])]),e.smallDevice?o("div",[o("div",{staticClass:"hero",style:{background:"url("+e.images[1]+") no-repeat center"}},[o("div",{staticStyle:{"text-align":"center"}},[o("div",{staticStyle:{"font-size":"20px","padding-top":"30%"}},[o("p",{staticClass:"header-text"},[e._v(" "+e._s(e.text)+" ")])])])])]):e._e()])},f=[],h=o("bc3a"),g=o.n(h);async function b(e,t){for(var o="563492ad6f9170000100000180942959d8884968956c81ed519c1081",s={headers:{Authorization:o}},n=0;n<e.length;n++){var a=e[n],i=await g.a.get("https://api.pexels.com/v1/photos/"+a,s);t.push(i.data.src.large2x)}}var y={data(){return{smallDevice:!1,imgID:[257923,2066896],images:[],text:"NLP bot testing demo. Scroll down"}},computed:{},created(){try{b(this.imgID,this.images)}catch(e){console.error(e)}},mounted(){"mobile"!==this.$mq&&"tablet"!==this.$mq||(this.smallDevice=!0)}},v=y,x=(o("0710"),Object(i["a"])(v,m,f,!1,null,"8a8aab9e",null)),S=x.exports,k=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.visible?o("Chat",{attrs:{participants:e.participants,myself:e.myself,messages:e.messages,"chat-title":e.chatTitle,placeholder:e.placeholder,colors:e.colors,"border-style":e.borderStyle,"hide-close-button":e.hideCloseButton,"close-button-icon-size":e.closeButtonIconSize,"submit-icon-size":e.submitIconSize,"submit-image-icon-size":e.submitImageIconSize,"load-more-messages":e.toLoad.length>0?e.loadMoreMessages:null,"async-mode":e.asyncMode,"scroll-bottom":e.scrollBottom,"display-header":!0,"send-images":!0,"profile-picture-config":e.profilePictureConfig,"timestamp-config":e.timestampConfig,"link-options":e.linkOptions,"accept-image-types":".png, .jpeg"},on:{onImageClicked:e.onImageClicked,onImageSelected:e.onImageSelected,onMessageSubmit:e.onMessageSubmit,onType:e.onType,onClose:e.onClose}}):e._e()],1)},I=[],_=o("3ce5"),w=(o("c561"),{components:{Chat:_["Chat"]},data(){return{visible:!0,participants:[{name:"Person",id:1,profilePicture:"https://i.ibb.co/fXkS9xb/pers.webp"}],myself:{name:"Chatbot",id:2,profilePicture:"https://i.ibb.co/StbWmWZ/chatbots.jpg"},messages:[{content:"received messages",myself:!1,participantId:1,timestamp:{year:2019,month:3,day:5,hour:20,minute:10,second:3,millisecond:123},type:"text"},{content:"sent messages",myself:!0,participantId:2,timestamp:{year:2019,month:4,day:5,hour:19,minute:10,second:3,millisecond:123},type:"text"}],chatTitle:"Demo chat app",placeholder:"Send your message",colors:{header:{bg:"#d30303",text:"#fff"},message:{myself:{bg:"#fff",text:"#bdb8b8"},others:{bg:"#fb4141",text:"#fff"},messagesDisplay:{bg:"#f7f3f3"}},submitIcon:"#b91010"},borderStyle:{topLeft:"10px",topRight:"10px",bottomLeft:"10px",bottomRight:"10px"},hideCloseButton:!1,submitIconSize:25,closeButtonIconSize:"20px",asyncMode:!1,toLoad:[{content:"Hey, John Doe! How are you today?",myself:!1,participantId:1,timestamp:{year:2011,month:3,day:5,hour:10,minute:10,second:3,millisecond:123},uploaded:!0,viewed:!0,type:"text"},{content:"Hey, Adam! I'm feeling really fine this evening.",myself:!0,participantId:2,timestamp:{year:2010,month:0,day:5,hour:19,minute:10,second:3,millisecond:123},uploaded:!0,viewed:!0,type:"text"}],scrollBottom:{messageSent:!0,messageReceived:!1},displayHeader:!0,profilePictureConfig:{others:!0,myself:!0,styles:{width:"30px",height:"30px",borderRadius:"50%"}},timestampConfig:{format:"HH:mm",relative:!1},linkOptions:{myself:{className:"myLinkClass",events:{click:function(e){alert("Link clicked!")},mouseover:function(e){alert("Link hovered!")}},format:function(e,t){return"url"===t&&e.length>50&&(e=e.slice(0,50)+"…"),e}},others:{className:"othersLinkClass",events:{click:function(e){alert("Link clicked!")},mouseover:function(e){alert("Link hovered!")}},format:function(e,t){return"url"===t&&e.length>50&&(e=e.slice(0,50)+"…"),e}}}}},methods:{onType:function(e){},loadMoreMessages(e){setTimeout(()=>{e(this.toLoad),this.messages.unshift(...this.toLoad),this.toLoad=[]},1e3)},onMessageSubmit:function(e){this.messages.push(e),setTimeout(()=>{e.uploaded=!0},2e3)},onClose(){this.visible=!1},onImageSelected(e,t){let o="https://149364066.v2.pressablecdn.com/wp-content/uploads/2017/03/vue.jpg";this.messages.push(t),setTimeout(e=>{t.uploaded=!0,t.src=e.src},3e3,{src:o})},onImageClicked(e){console.log("Image clicked",e.src)}}}),C=w,T=Object(i["a"])(C,k,I,!1,null,"dc8a6392",null),z=T.exports,M={components:{hero:S,chatform:z}},O=M,j=Object(i["a"])(O,u,d,!1,null,"5c2e6f1c",null),L=j.exports;s["default"].use(p["a"]);const E=[{path:"/",name:"Home",component:L},{path:"/Md",beforeEnter(){location.href="https://mlmodels.netlify.app/"}},{path:"/Pizzeria",beforeEnter(){location.href="https://vuepizzeria.netlify.app"}},{path:"/Telegram",beforeEnter(){location.href="https://t.me/BarberAppointmentBot"}},{path:"/Facebook",beforeEnter(){location.href="https://m.me/109569947618288"}}],P=new p["a"]({mode:"history",base:"/",routes:E});var B=P,D=o("2f62");s["default"].use(D["a"]);var $=new D["a"].Store({state:{items:[]},getters:{GET_ITEMS:e=>()=>e.items},mutations:{SET_ITEMS(e,t){e.items=t}},actions:{loadItems({commit:e}){s["default"].axios.get("https://nlp-app.club/file/list/:5",{headers:{Authorization:"Bearer "+s["default"].$cookies.get("zimad_token")}}).then(e=>e.data).then(t=>{t.success&&e("SET_ITEMS",t.data)}).catch(e=>{console.error(e)})}},modules:{}}),H=o("5f5b"),R=(o("ab8b"),o("2dd8"),o("2b27")),A=o.n(R),J=o("a7fe"),N=o.n(J),q=o("660e");s["default"].use(H["a"]),s["default"].config.productionTip=!0,s["default"].use(A.a),s["default"].use(N.a,g.a);const W={baseURL:"https://nlp-app.club",timeout:3e4};s["default"].prototype.$axios=g.a.create(W),s["default"].use(q["a"],{breakpoints:{mobile:450,tablet:900,laptop:1250,desktop:1/0}}),new s["default"]({axios:g.a,router:B,store:$,render:function(e){return e(c)}}).$mount("#app")},f9ee:function(e,t,o){}});
//# sourceMappingURL=app.44eac8b9.js.map