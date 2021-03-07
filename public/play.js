class setup {
  constructor(opt = {}, dev = false) {
    document.write(`<doc_log>
<style type="text/css">
  .lds-spinner {
  color: official;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-spinner div {
  transform-origin: 40px 40px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3px;
  left: 37px;
  width: 6px;
  height: 18px;
  border-radius: 20%;
  background: black;
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}</style><div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></doc_log>`)
    console.log("Playscript 1.0 a0.35 final build 27.11.2020")
    /* setup obj
    {title:"Play App",
     subtitle:null,
     icon:null,
     import:"global",
     ready:start}
     events","button","edit","flex","image","modal","dialog","stringlist,customlist","text"
    */
    //presets
    this.opt = opt

    //handle app types
    this.opt.type = this.opt.type || "default"
    this.opt.theme = this.opt.theme || "light"
    if (this.opt.type == "core") this.opt.import = this.opt.import ? "global,events," + this.opt.import : "global,events"
    if (this.opt.type == "default") this.opt.import = this.opt.import ? "global,events,flex,text,edit,image,button,modal,dialog,stringlist,customlist,alert,confirm,prompt,toast," + this.opt.import : "global,events,flex,text,edit,image,button,modal,dialog,stringlist,customlist,alert,confirm,prompt,toast"
    if (this.opt.type == "matte") this.opt.import = this.opt.import ? "global,events,flex,text,edit,image,button,modal,dialog,stringlist,customlist,bar,drawer,hero,menu,page,alert,confirm,prompt,snack,slit,toast," + this.opt.import : "global,events,flex,text,edit,image,button,modal,dialog,stringlist,customlist,bar,drawer,hero,menu,page,alert,confirm,prompt,snack,slit,toast"

    //app title
    this.titleInt = document.createElement("title");
    this.titleInt.innerText = this.opt.title || this.opt.nosplash
    document.head.appendChild(this.titleInt)
    this.splash;

    /* auto root finder */
    let list = document.querySelectorAll("script");
    for (let i = 0; i < list.length; i++) { let dat = list[i].src; if (dat.endsWith("play.js")) { this.root = dat.split("/");
        this.root.pop();
        this.root = this.root.join("/") + "/" };
      list[i].remove() };
    window.root = this.root


    //import dependency scripts
    this.opt.import = this.opt.import.split(",")
    this.stackport(this.opt.import)

    //on ready
    window.addEventListener("load", this.start.bind(this))
    
    
    //search for url paramsvar search = location.search.substring(1);
    var search = location.search.substring(1);
    if(search)this.params=JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')

  }




  start() {
    var th = {}
    document.querySelector("doc_log").remove()
    if (window.localStorage.play_back) {
      th.back = window.localStorage.play_back
      th.text = window.localStorage.play_text
      th.shad = window.localStorage.play_shadow

    } else if (this.opt.theme) {
      th.back = this.opt.theme == "dark" ? "#161616" : "#fcfcfc"
      th.text = this.opt.theme == "dark" ? "#ececec" : "#545454"
      th.shad = this.opt.theme == "dark" ? "#00000040" : "#00000010"
    } else {
      th = { back: "#fcfcfc", text: "#545454", shad: "#00000010" }
    }
    html = new ref(document.body.parentElement)
      .cssvar({ "accent": window.localStorage.play_accent || this.opt.hue ? this.opt.hue : "#e91e63", text: th.text, back: th.back, shadow: th.shad })
      .css({ background: "var(--back)", opacity: 0, width: "100%", height: "100%" })
      .animate({ opacity: 1 }, 350)
    head = new ref(document.head).css({});
    body = new ref(document.body).css({ border: 0, padding: 0, margin: 0, width: "100%", height: "100%", "display": "flex", "flex-direction": "column", "align-items": "flex-start" })

    //splash screen

    if (this.opt.title && this.opt.type != "core") this.splash = new flex("column", "100%", "100%").css({ position: "fixed", background: "var(--back)", padding: "0px", top: 0, bottom: 0, left: 0, right: 0, "z-index": 7 }).align("center").add(new text(this.opt.title).css({ padding: 0, "font-size": "24px", "margin-top": "auto", color: "var(--text)" }), new text("Powered by PlayScript").css({ padding: 0, "font-size": "10px", color: "var(--accent)", "margin-bottom": "50px" }))
    if (this.opt.title && this.opt.type != "core") html.add(this.splash)
    setTimeout(this.unsplash.bind(this), this.opt.title ? 3000 : 1)

  }

  unsplash() {
    if (this.opt.ready) this.opt.ready();
    else start()
    if (this.opt.title && this.opt.type != "core") this.splash.animate({ opacity: 0, transform: "scale(1.2)" }, 1000, null, this.unsplash_ended.bind(this))
    this.style(this.root + "mdi/css/mdi.css")

  }
  unsplash_ended(e) {
    this.splash.remove()
  }



  //set theme
  theme(type) {
    var e = window.localStorage.play_back || "#fcfcfc"
    if (type == "toggle") {
      if (e == "#fcfcfc") type = "dark"
      if (e == "#161616") type = "light"
    }
    if (type == "light") {
      window.localStorage.play_back = "#fcfcfc";
      window.localStorage.play_text = "#545454";
      window.localStorage.play_shadow = "#00000010";
      html.cssvar({ text: window.localStorage.play_text, back: window.localStorage.play_back, shadow: window.localStorage.play_shadow })

    } else {
      window.localStorage.play_back = "#161616";
      window.localStorage.play_text = "#ececec";
      window.localStorage.play_shadow = "#00000040";
      html.cssvar({ text: window.localStorage.play_text, back: window.localStorage.play_back, shadow: window.localStorage.play_shadow })

    }
  }


  //import external scripts
  script(path, call) {
    let script = document.createElement("script");
    script.setAttribute("src", path);
    document.head.appendChild(script);
    script.addEventListener("load", function(e) { script.remove(); if (call) call();
      else console.log(path, " loaded") });
  }
  //sync external scripts
  syncscript(path, call) {
    let script = document.createElement("script");
    script.setAttribute("src", path);
    script.setAttribute("async", "false")
    document.head.appendChild(script);
    script.addEventListener("load", function(e) { if (call) call();
      else console.log(path, " loaded") });
  }
  //import external styles
  style(path, call) {
    let script = document.createElement("style");
    script.innerText = "@import url(" + path + ")"
    document.head.appendChild(script);
    script.addEventListener("load", function(e) { if (call) call();
      else console.log(path, " loaded") });
  }
  stackport(e) {
    if (e.length != 0) {

      this.script(this.root + "modules/" + e[0] + ".js", this.stackport.bind(this, e));
      e.shift()

    }
  }
  read(e, h) { var f = new XMLHttpRequest(); var m = null;
    f.open("GET", e, h ? true : false);
    f.onreadystatechange = function() { if (f.readyState === 4) { if (f.status === 200 || f.status == 0) { var res = f.responseText; if (h) h(res);
          else m = res } } };
    f.send(null); if (!h) return m }
  download(e, h) {
    var link = document.createElement("a");
    link.download = e
    link.href = h
    link.click();
  }
  back(e) { history.back() }
  code(e, h) {
    var f = new XMLHttpRequest();
    var m = null;
    f.open("GET", e, h ? true : false);
    f.onreadystatechange = function() { if (f.readyState === 4) var res = f.status; if (h) h(res); else m = res };
    f.send(null); if (!h) return m
  }
  h(){return window.innerHeight}
  w(){return window.innerWidth}
  title(e){this.titleInt.innerText=e}
  url(e){var e=e;setTimeout(()=>{location.href=e;},50)}
  get(e, h){var f = new XMLHttpRequest();var m = null;f.open("GET", e, h ? true : false);f.onreadystatechange = function() { if (f.readyState === 4) var res = f; if (h) h(res); else m = res };f.send(null); if (!h) return m}
  host(e){if(e){if(window.location.hostname==e)return true; else return false}else return window.location.hostname}
  
  
}
