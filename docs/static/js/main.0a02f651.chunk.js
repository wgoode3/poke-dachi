(this["webpackJsonpbulba-dachi"]=this["webpackJsonpbulba-dachi"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(4),c=t.n(l),s=t(2),i=t(1),o=(t(12),t(5)),u=t(6),m=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(Math.random()*(e-a+1))+a},h={grass:0,fire:1,water:2},v=[[1,1,2],[2,1,1],[1,2,1]];var d=function(e,a){return v[h[e]][h[a]]},p=function(){function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"normal",s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,i=arguments.length>7&&void 0!==arguments[7]?arguments[7]:100;Object(o.a)(this,e),this.name=a,this.hp=t,this.currHp=t,this.atk=n,this.def=r,this.lvl=l,this.type=c,this.xp=s,this.cash=i,this.msg="Your very own pokemon journey is about to begin!",this.sprite="nes-".concat(a.toLowerCase())}return Object(u.a)(e,[{key:"recover",value:function(e){return this.name=e.name,this.hp=e.hp,this.currHp=e.currHp,this.atk=e.atk,this.def=e.def,this.lvl=e.lvl,this.type=e.type,this.xp=e.xp,this.cash=e.cash,this.msg=e.msg,this.sprite=e.sprite,this}},{key:"levelUp",value:function(){var e=m(5,1),a=m(3,1),t=m(3,1);this.hp+=e,this.atk+=a,this.def+=t,this.lvl++,this.xp=0,this.msg="".concat(this.name," has levelled up and gained ").concat(e," hp, ").concat(a," atk, and ").concat(t," def!"),this.currHp=this.hp}},{key:"attack",value:function(e){var a=m(20,1),t=0,n=1;this.msg="",20===a&&(n=1.5,this.msg+="Critital hit! "),this.lvl>e.lvl&&(a+=5),2===d(this.type,e.type)&&(this.msg+="It's super effective! ",n*=2),a>7?(t=Math.floor(n*this.atk-.3*e.def),this.msg+="".concat(e.name," takes ").concat(t," damage!")):this.msg="Miss!",e.currHp-=t}},{key:"getHealed",value:function(){}}]),e}();var b=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("Bulbasaur"),o=Object(i.a)(c,2),u=o[0],h=o[1],v=Object(n.useState)({}),d=Object(i.a)(v,2),b=d[0],E=d[1],f=Object(n.useState)({}),g=Object(i.a)(f,2),k=g[0],y=g[1],w=Object(n.useState)(!1),C=Object(i.a)(w,2),N=C[0],j=C[1],O=Object(n.useState)(!1),S=Object(i.a)(O,2),H=S[0],B=S[1];return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"main nes-container is-rounded"},t?r.a.createElement("div",null,r.a.createElement("h3",null,b.msg),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"space-evenly"},r.a.createElement("div",{className:"mon"},r.a.createElement("i",{className:b.sprite+" hero"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Level: ",b.lvl),r.a.createElement("p",null,"HP: ",b.currHp)),r.a.createElement("div",{className:"mon"},N?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:k.sprite}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Level: ",k.lvl),r.a.createElement("p",null,"HP: ",k.currHp)):r.a.createElement("button",{className:"nes-btn",onClick:function(e){j(!0);var a=function(e){var a,t=m(2),n=m(e.lvl+1,e.lvl-3);for(a=2===t?new p("Bulbasaur",20,10,10,1,"grass"):1===t?new p("Charmander",20,10,10,1,"fire"):new p("Squirtle",20,10,10,1,"water");n>1;)a.levelUp(),console.log(a),n--;return a}(b);y(a);var t=Object(s.a)({},b);t.msg="You encountered a Level ".concat(a.lvl," ").concat(a.name,"!"),E(t)}},"Next"))),r.a.createElement("br",null),r.a.createElement("br",null),N&&!H?r.a.createElement("div",{className:"space-evenly"},r.a.createElement("button",{className:"nes-btn is-error",onClick:function(e){var a=(new p).recover(b),t=(new p).recover(k);a.attack(t),t.currHp<1?(a.msg="You have defeated the enemy ".concat(t.name,"!"),E(a),y(t),j(!1)):(E(a),y(t),B(!0))}},"Attack"),r.a.createElement("button",{className:"nes-btn is-primary",onClick:function(e){j(!1);var a=Object(s.a)({},b);a.msg="You bravely ran away!",E(a)}},"Run")):"",N&&H?r.a.createElement("div",{className:"space-evenly"},r.a.createElement("button",{className:"nes-btn",onClick:function(e){var a=(new p).recover(b),t=(new p).recover(k);t.attack(a),a.currHp<1&&(alert("Sorry you have lost"),j(!1),B(!1),l(!1)),a.msg=t.msg,E(a),y(t),B(!1)}},"Next")):""):r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center"}},"Choose your starter!"),r.a.createElement("br",null),r.a.createElement("div",{className:"space-evenly"},r.a.createElement("i",{className:"nes-bulbasaur",onClick:function(e){return h("Bulbasaur")}}),r.a.createElement("i",{className:"nes-charmander",onClick:function(e){return h("Charmander")}}),r.a.createElement("i",{className:"nes-squirtle",onClick:function(e){return h("Squirtle")}})),r.a.createElement("br",null),r.a.createElement("div",{className:"space-evenly"},r.a.createElement("label",{onClick:function(e){return h("Bulbasaur")}},"Bulbasaur"===u?r.a.createElement("input",{type:"radio",class:"nes-radio",name:"answer",checked:!0}):r.a.createElement("input",{type:"radio",class:"nes-radio",name:"answer"}),r.a.createElement("span",null,"Bulbasaur")),r.a.createElement("label",{onClick:function(e){return h("Charmander")}},"Charmander"===u?r.a.createElement("input",{type:"radio",class:"nes-radio",name:"answer",checked:!0}):r.a.createElement("input",{type:"radio",class:"nes-radio",name:"answer"}),r.a.createElement("span",null,"Charmander")),r.a.createElement("label",{onClick:function(e){return h("Squirtle")}},"Squirtle"===u?r.a.createElement("input",{type:"radio",class:"nes-radio",name:"answer",checked:!0}):r.a.createElement("input",{type:"radio",class:"nes-radio",name:"answer"}),r.a.createElement("span",null,"Squirtle"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"btn-center nes-btn",onClick:function(e){l(!0);var a=new p("default");a="Bulbasaur"===u?new p("Bulbasaur",50,20,20,5,"grass",0,100):"Charmander"===u?new p("Charmander",40,25,20,5,"fire",0,100):new p("Squirtle",40,20,25,5,"water",0,100),E(a)}},"Choose"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(13);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.0a02f651.chunk.js.map