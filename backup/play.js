class setup{
  constructor(opt,dev){
    console.log("Playscript 1.0 a0.35 final build 27.11.2020")
    /* setup obj
    {title:"Play App",
     subtitle:null,
     icon:null,
     import:"global",
     ready:start}
     events","button","edit","flex","image","modal","dialog","stringlist","text"
    */
    //presets
    this.opt=opt||{}
    
    //handle app types
    this.opt.type=this.opt.type||"default"
    this.opt.theme=this.opt.theme||"light"
    if(this.opt.type=="core")this.opt.import=this.opt.import?"global,events,"+this.opt.import:"global,events"
    if(this.opt.type=="default")this.opt.import=this.opt.import?"global,events,flex,text,edit,image,button,modal,dialog,stringlist,"+this.opt.import:"global,events,flex,text,edit,image,button,modal,dialog,stringlist"
    if(this.opt.type=="matte")this.opt.import=this.opt.import?"global,events,flex,text,edit,image,button,modal,dialog,stringlist,bar,drawer,hero,menu,"+this.opt.import:"global,events,flex,text,edit,image,button,modal,dialog,stringlist,bar,drawer,hero,menu"
    
    //app title
    let title=document.createElement("title");title.innerText=this.opt.title||"Play App";document.head.appendChild(title)
    this.splash;

    /* auto root finder */let list = document.querySelectorAll("script");for(let i=0;i<list.length;i++){let dat=list[i].src;if(dat.endsWith("play.js")){this.root=dat.split("/");this.root.pop();this.root=this.root.join("/")+"/";continue}};window.root=this.root

    
    //import dependency scripts
    this.opt.import=this.opt.import.split(",")
    this.stackport(this.opt.import)
    
    //on ready
    window.addEventListener("load",this.start.bind(this))
        
  }
  start(){
    html=new ref(document.body.parentElement)
    .cssvar({"accent":store.play_accent||this.opt.hue?this.opt.hue:"#e91e63",text:store.play_text||this.opt.theme=="black"?"#ececec":this.opt.theme=="dark"?"#ececec":"#545454",back:store.play_back||this.opt.theme=="black"?"#000000":this.opt.theme=="dark"?"#232323":"#fefefe",shadow:store.play_shadow||this.opt.theme=="black"?"#15151555":this.opt.theme=="dark"?"#00000040":"#00000010"})
    .css({background:"var(--back)"})
    head=new ref(document.head).css({});
    body=new ref(document.body).css({border:0,padding:0,margin:0})
  
    //splash screen
          
          if(this.opt.title&&this.opt.type!="core")this.splash=new flex("column","100%","100%").css({position:"fixed",background:store.play_back?store.play_back:this.opt.theme=="black"?"#000000":this.opt.theme=="dark"?"#232323":"#fefefe",padding:"0px",top:0,bottom:0,left:0,right:0,"z-index":7}).align("center").add(new text(this.opt.title).css({padding:0,"font-size":"24px","margin-top":"auto"}),new text("Powered by PlayScript").css({padding:0,"font-size":"10px",color:"var(--accent)","margin-bottom":"50px"}))
          if(this.opt.title&&this.opt.type!="core")html.add(this.splash)
          setTimeout(this.unsplash.bind(this),this.opt.title?3000:1)
      }
  
  unsplash(){
    if(this.opt.ready)this.opt.ready();else start()
    if(this.opt.title&&this.opt.type!="core")this.splash.animate({opacity:0,transform:"scale(1.2)"},1000,null,this.unsplash_ended.bind(this))
    this.style(this.root+"mdi/css/mdi.css")
    
  }
  unsplash_ended(e){
    this.splash.remove()
  }
  


//set theme
theme(type){
  var e=store.play_back||"#fefefe"
  if(type=="toggle"){
       if(e=="#fefefe")type="dark"
       if(e=="#232323")type="black"
       if(e=="#000000  ")type="light"
  }
  console.log(e)
  if(type=="light"){
    store.play_back="#fefefe";store.play_text="#545454";store.play_shadow="#00000010";
    html.cssvar({text:store.play_text,back:store.play_back,shadow:store.play_shadow})

  }else if (type == "dark") {
  store.play_back="#232323";store.play_text="#ececec";store.play_shadow="#00000040";
  html.cssvar({text:store.play_text,back:store.play_back,shadow:store.play_shadow})

  }else if (type == "black") {
  store.play_back="#000000  ";store.play_text="#ececec";store.play_shadow="#15151555";
  html.cssvar({text:store.play_text,back:store.play_back,shadow:store.play_shadow})

  }else{
    
  }
}


  //import external scripts
  script(path,call){
    let script = document.createElement("script");
    script.setAttribute("src", path);
    document.head.appendChild(script);
    script.addEventListener("load", function(e){if(call)call();else console.log(path," loaded")});
  }
  //sync external scripts
  syncscript(path,call){
    let script = document.createElement("script");
    script.setAttribute("src", path);
    script.setAttribute("async","false")
    document.head.appendChild(script);
    script.addEventListener("load", function(e){if(call)call();else console.log(path," loaded")});
  }
  //import external styles
  style(path,call){
    let script = document.createElement("style");
    script.innerText="@import url("+path+")"
    document.head.appendChild(script);
    script.addEventListener("load", function(e){if(call)call();else console.log(path," loaded")});
  }
  stackport(e){
        if(e.length!=0){
          console.log("importing ",e[0]," module")
        let script = document.createElement("script");
    script.setAttribute("src",this.root+ "modules/"+e[0]+".js");
    e.shift()
    document.head.appendChild(script);
    script.addEventListener("load",this.stackport.bind(this,e))
        }
        else console.log("imported dependency modules successfully.")
    
  }
  }
