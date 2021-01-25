/*
PLAYSCRIPT 1.0
by : Dealdrey Garoeb
27.11.2020
https://playscript.io

*/
var html,head,body;
console.log("Playscript 1.0 a0.35 final build 27.11.2020")
/* global object = default element setup */
class global {
  constructor(id,opt){if(opt.type=="new")this.raw=document.createElement(id); else if(opt.type=="bind")this.raw=document.querySelector(id);else if(opt.type=="clone")this.raw=id.raw.cloneNode(true)||id.cloneNode(true);else this.raw=id;this.animated=false;this.hold=[];this.keep={};if(opt.type!="ref"){this.raw.id=util.id();this.id=this.raw.id};return this}
  add(/**/){var args=arguments;for(let i=0;i<args.length;i++){this.raw.append(args[i].raw||args[i])};return this}
  ins(child,pos){this.raw.insertBefore(child.raw||child,this.raw.children[pos]);return this}
  remove(/**/){var args=arguments;if(args.length==0)this.raw.remove();else for(let i=0;i<args.length;i++){if(typeof args[i]!="number")this.raw.removeChild(args[i].raw||args[i]);else this.raw.children[args[i]].remove()};return this}
  child(pos,deep){return this.children(deep)[pos]}
  empty(){this.raw.textContent = '';return this}
  children(deep){if(deep)var list=this.raw.querySelectorAll("*");else var list=this.raw.children;var hold=[];for(var i=0;i<list.length;i++){ hold[i]=new ref(list[i]) }return hold}
  on(type,call){this.raw.addEventListener(type,function(e){call(e)});return this}
  text(dat){if(dat){this.raw.innerText=dat;return this}else return this.raw.innerText}
  html(dat){if(dat){this.raw.innerHTML=dat;return this}else return this.raw.innerHTML}
  attr(type,dat){if(dat!=undefined&&typeof type=="string"){this.raw.setAttribute(type,dat);return this}else if(typeof type=="object"){let o=Object.keys(type);for(let i=0;i<o.length;i++){this.raw.setAttribute([o[i]],type[o[i]])}return this}else if(typeof type=="string"&&dat==undefined){return this.raw.getAttribute(type)}else return this}
  css(type,dat){if(dat!=undefined&&typeof type=="string"){this.raw.style[type]=dat;return this}else if(typeof type=="object"){let o=Object.keys(type);for(let i=0;i<o.length;i++){this.raw.style[o[i]]=type[o[i]]}return this}else if(typeof type=="string"&&dat==undefined){this.style=window.getComputedStyle(this.raw,null);return this.style[type]}else return this}
  class(type,dat){if(!dat&&!type)return this.raw.classList;else if(!dat&&type||type=="add"){this.raw.classList.add(dat||type);return this}else if(type=="remove"){this.raw.classList.remove(dat);return this}else if(type=="toggle"){this.raw.classList.toggle(dat);return this}else return this.raw.classList.contains(dat)}
  cssvar(type,dat){if(dat==undefined&&type=="string")return getComputedStyle(this.raw).getPropertyValue(type);else if(dat==undefined&&typeof type=="object"){ let o=Object.keys(type);for(let i=0;i<o.length;i++){this.raw.style.setProperty("--"+o[i],type[o[i]])}return this }else {this.raw.style.setProperty("--"+type,dat);return this}}
  bind(/**/){var args=arguments;this.attr("binded","");for(let i=0;i<args.length;i++){this.attr("binded",this.attr("binded")+"&&"+args[i])}; return this}
  index(e){ var m=this.raw;var i = -1;while ((m = m.previousSibling) != null)i++;return i}
  parent(e){ return new ref(this.raw.parentElement) }
  icon(e){var i="";if(e){this.add(i=new tag("icon").html('<i class="zmdi zmdi-' +e+'" ></i>').css({"margin":"auto", "color":"inherit"})) ;this.currentIcon=e;return i} else return this.currentIcon}
  icons(e){return new bind("#"+this.raw.querySelectorAll("icon")[e].getAttribute("id"))}

  /* experimental */
  
  
  
  
  
  
  
  animate(key,time,opt,call){
    if(!this.animated){
    opt=opt||{};this.keep=key;this.animated=true;
    this.style=window.getComputedStyle(this.raw,null)
    this.hold=Object.keys(key);this.start={};this.end={};this.keys=[]
    for(var i=0;i<this.hold.length;i++){
      this.start[this.hold[i]]=this.style[this.hold[i]]
      this.end[this.hold[i]]=key[this.hold[i]]
    }
    this.keys.push(this.start)
    this.keys.push(this.end)
    this.raw.animate(this.keys,{duration:time||350,easing:opt.ease||"ease-in"})
    var raw=this.raw
    setTimeout(this.anmEnd.bind(this),time)
    if(call) this.anmcall=call;else this.anmcall=function(){}
    }
    
    return this}
    anmEnd(){for(var i=0;i<this.hold.length;i++){this.raw.style[this.hold[i]]=this.keep[this.hold[i]]};this.animated=false;this.anmcall()}
  
}
/* creates an element */
class tag extends global {constructor(id,w,h,opt){super(id,{type:"new"});this.css({ "-webkit-text-size-adjust": "100%","-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)","font-family": '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size": "17px","font-weight": '400',"color":"var(--text)","display":"inline", width:w, height:h});return this}}
/* binds an existing element as a playElement */
class bind extends global {constructor(id,w,h,opt){super(id,{type:"bind"});return this}}
/* clones an existing element as a playElement */
class clone extends global {constructor(id,w,h,opt){super(id,{type:"clone"});return this}}
/* refers to an html element as a playElement */
class ref extends global {constructor(id,w,h,opt){super(id,{type:"ref"});return this}}
/* basic app setup */
class setup {
  constructor(opt){
    opt=opt||{};this.debug=opt.debug||"none"
    //debbugg
    html=new bind("html").cssvar({accent:store.psaccent,back:store.psback,shadow:store.psshadow,text:store.pstext,shade:store.psshade})
    html.cssvar({w:window.innerWidth+"px",h:window.innerHeight+"px"})
    /* auto root finder */let list = document.querySelectorAll("script");for(let i=0;i<list.length;i++){let dat=list[i].src;if(dat.endsWith("play.js")){this.root=dat.split("/");this.root.pop();this.root=this.root.join("/")+"/";continue}};window.root=this.root
    /* set sites title */if(opt.title){let title= document.querySelector("title");if(title){title.innerText=opt.title}else{title=new tag("title").text(opt.title).css("display","none");html.add(title)}}
    this.import(this.root+"mdi/css/mdi.css")
    this.module("events","button","edit","flex","image","modal","dialog","stringlist","text")
    if(this.debug=="eruda")html.add(`<script src="https//cdn.jsdelivr.net/npm/eruda"></script>`)
    return this
    
    
  }
  ready(start){window.addEventListener("load",function(e){
  /*try{new modal}catch(e){location.reload();}
  try{new dialog().remove()}catch(e){alert(e)}
  try{new stringlist}catch(e){alert(e)}*/
  head=new bind("head");body=new bind("body").css({"display":"flex","flex-direction":"column","align-items":"start","background":"var(--back)", "-webkit-text-size-adjust": "100%","-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)","font-family": '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size": "17px","font-weight": '400',"color":"var(--text)","margin":"0px","padding":"0px","border":"300px blue"});start(e)
    
  });return this}
  import(/**/){var args=arguments;for(let i=0;i<args.length;i++){ if(args[i].endsWith(".js")){ let dat=new tag("script").attr("src",args[i]).attr("id",args[i]. replaceAll(".js","").split("/")[args[i]. split("/"). length-1]);html.add(dat) }else if(args[i].endsWith(".css")){let dat=new tag("style").html(`@import url(${args[i]})`).css("display","none");html.add(dat)} }return this}
  module(/**/){var args=arguments;for(let i=0;i<args.length;i++){ this.import(`${this.root}modules/${args[i]}.js`)};return this}
  hue(e){if(e){store.psaccent=e;html.cssvar("accent",e);return this}else return store.psaccent}
  theme(back,text,shadow){
    if(back&&text){store.pstheme="custom";store.psback=back;store.pstext=text;store.psshadow=shadow||store.psshadow;html.cssvar({back:store.psback,shadow:store.psshadow,text:store.pstext})
    }else if(back=="light"){
      store.pstheme="light";store.psback="#fcfcfced";store.pstext="#454545";store.psshadow="#00000055";html.cssvar({back:store.psback,shadow:store.psshadow,text:store.pstext})
    }else if(back=="dark"){
      store.pstheme="dark";store.psback="#232323ed";store.pstext="#efefef";store.psshadow="#00000055";html.cssvar({back:store.psback,shadow:store.psshadow,text:store.pstext})
    }else if(back=="black"){
      store.pstheme="black";store.psback="#000000ed";store.pstext="#fcfcfc";store.psshadow="#00000099";html.cssvar({back:store.psback,shadow:store.psshadow,text:store.pstext})
    }else return store.pstheme
  }
  /* alerts */
  alert(body,title,call){
    var obj,objTitle,objBody,objButtonlay, objButton,objBase;
    if(title)objTitle=new text(title,"100%",null,"indent").css({color:"var(--accent)","font-size":"22px","box-shadow":"0px 0px 5px 3px var(--shadow)"})
    objBody=new text(body,"90%").css({"padding-left":"5%","max-height":window.innerHeight-200+"px"})
    objButton=new button("OK",null, null, "silent").css("margin-left","auto").on("click",function(){obj.close();if(typeof call=="function")call()})
    objButtonlay=new flex("row","100%").add(objButton)
    objBase=new flex("column","80%").css({"max-width":"320px", "background":"var(--back)","border-radius":"8px","box-shadow":"0px 3px 10px 3px var(--shadow)"}).add(objTitle||"",objBody,objButtonlay)
    obj = new modal(objBase,"show");return obj}

  confirm(body,title,call){
    var obj,objTitle,objBody,objButtonlay, objButton,ob2, objBase;
    if(title)objTitle=new text(title,"100%",null,"indent").css({color:"var(--accent)","font-size":"22px","box-shadow":"0px 0px 5px 3px var(--shadow)"})
    objBody=new text(body,"90%").css({"padding-left":"5%","max-height":window.innerHeight-200+"px"})
    objButton=new button("cancel",null, null, "silent").css("margin-left","auto").on("click",function(){obj.close();if(typeof call=="function")call(false)})
    ob2=new button("ok", null, null, "silent").on("click",function(){obj.close();if(typeof call=="function")call(true)})
    objButtonlay=new flex("row","100%").add(objButton, ob2)
    objBase=new flex("column","80%").css({"background":"var(--back)","border-radius":"8px","box-shadow":"0px 3px 10px 3px var(--shadow)"}).add(objTitle||"",objBody,objButtonlay)
    obj = new modal(objBase,"show");return obj}

    prompt(body,title,call,opt){
      opt=opt||""
    var obj,objTitle,objBody,objButtonlay, objButton,ob2, objBase;
    if(title)objTitle=new text(title,"100%",null,"indent").css({color:"var(--accent)","font-size":"22px","box-shadow":"0px 0px 5px 3px var(--shadow)"})
    objBody=new edit(body,"90%").css({"padding-left":"5%","max-height":window.innerHeight-200+"px"})
    objBody.raw.autofocus=true
    if(opt.includes("number"))objBody.attr("type","number")
    objButton=new button("cancel",null, null, "silent").css("margin-left","auto").on("click",function(){obj.close();if(typeof call=="function")call()})
    ob2=new button("submit", null, null, "silent").on("click",function(){obj.close();if(typeof call=="function")call(objBody.text())})
    objButtonlay=new flex("row","100%").add(objButton, ob2)
    objBase=new flex("column","80%").css({"background":"var(--back)","border-radius":"8px","box-shadow":"0px 3px 10px 3px var(--shadow)"}).add(objTitle||"",objBody,objButtonlay)
    obj = new modal(objBase,"show");return obj}


    snack(title, call){
      var obj=new flex("row"). css({"box-shadow":"0px 0px 10px 3px var(--shadow) ", "padding":"0px 6px", "background":"#232323", "position":"fixed", bottom:0,left:0,right:0, "transform":"translateY(100px)","z-index":5}). animate({"transform":"translateY(0px)"},250). class("playsnack")
      setTimeout(function(){obj.animate({"transform":"translateY(100px)"},150, null, function(){obj.remove()})}, 2500)
      var t=new text(title,"90%").css({color:"#cfcfcf"})
      var b=new text("ok", "10%").css({color:"var(--accent)"}). on("click", function(){if(typeof call=="function") call();else obj. remove()})
      obj.add(t, b) 
      html.add(obj)
      return obj
    }
}


/* Misc */
/* storage base setup */ store=window.localStorage;if(!store.pstheme)store.pstheme="light";if(!store.psaccent)store.psaccent="#e91e63";if(!store.psback)store.psback="#fcfcfc";if(!store.pstext)store.pstext="#454545";if(!store.psshadow)store.psshadow="#00000055";if(!store.psshade)store.psshade="#55454545";
/* request external text */function request(e){var f = new XMLHttpRequest();var m= null;f.open("GET", e, false);f.onreadystatechange = function (){if(f.readyState === 4){if(f.status === 200 || f.status == 0){var res= f.responseText;m= res}}};f.send(null);return m}
/* cancel current dialog */window.addEventListener("popstate",function(){var mod=document.querySelectorAll(".play_modal");var mod2=new ref(mod[mod.length-1]);if(mod2.attr("cancel")=="true"){if(mod.length==1)body.css({"overflow":"auto"});mod2.animate({opacity:0},300,null,function(){mod2.remove()});}else history.pushState(null,null,null);})


/*utilities*/
class play_utility{
  rand(min, max) { if (max) return min + Math.floor((max - min) * Math.random());
    else return Math.floor((min) * Math.random()); }
  id(){ return "id" +this.rand(9999989) }
  repeat(call, time) { for (var i = 0; i < time; i++) { call(i) } }
  type(str) { return typeof str }
  tidy(str, dat, opt) { var hold = str; while (hold.includes(dat)) { hold = hold.replace(dat, "") } return hold };
  search(string, lst, at, clean) { ret = []; for (var i = 0; i < lst.length; i++) { var con = lst[i];
      con = con[at];con=con.toLowerCase(); var call = string.toLowerCase(); for (var n = 0; n < clean.length; n++) { con = this.tidy(con, clean[n]);
        call = this.tidy(call, clean[n]); } if (con.includes(call)) ret.push(lst[i]);
      else {} } return ret }
  scan(string, lst, clean) { ret = []; for (var i = 0; i < lst.length; i++) { var con = lst[i];
      con = JSON.stringify(con);con=con.toLowerCase(); var call = string.toLowerCase(); for (var n = 0; n < clean.length; n++) { con = this.tidy(con, clean[n]);
        call = this.tidy(call, clean[n]); } if (con.includes(call)) ret.push(lst[i]);
      else {} } return ret }
  a() { alert("hi") }
}
util = new play_utility()