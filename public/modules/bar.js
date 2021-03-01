class bar extends tag{
  constructor(title,opt){
    opt=opt||""
    super("bar")
    this.title=title||"PlayScript"
    this.css({"color":"var(--accent) ","font-size":"15px","padding":"2px 0px","width":"100%","position":"fixed","z-index":2,"box-shadow":"0px 0px 5px 5px var(--shadow)","background":"var(--back)","top":0,"display":"flex","align-items":"center", "justify-content":"center"})
    this.icon("menu")
    this.search=new edit(title,"80%").css({"margin":"auto","font-size":"20px"})
    this.add(this.search)
    this.icon("more-vert")
    //this.drawer=this.icons(0)
    //this.option=this.icons(1)
    //this.icon("more-vertical")
    html.add(this);body.css("margin-top",Number(this.css("height").replace("px",""))+4+"px")
    
    if(opt.includes("noshadow"))this.css("box-shadow", "0px 0px 0px 0px transparent")
    if(opt.includes("transparent"))this.css("background", "transparent")
    return this
  }
  label(e){this.search.hint(e);return this}
  drawer(e,h){this.drawer=new drawer("default",this.title,e,h)
            this.icons(0).on("click",this.dopen.bind(this))
            return this.drawer
  }
  dopen(){this.drawer.open()}
  menu(e,h){this.icons(1).on("click",this.mopen.bind(this,e,h));return this}
  mopen(e,h){this.menu=new menu(e,"top,right",h)}
  
  onsearch(e){this.cb=e;this.on("keydown",this.res.bind(this))}
  res(e){if(e.key=="Enter"){this.cb(this.search.attr("inputmode","none").text());this.search.text("");setTimeout(this.resetkey.bind(this),10)};return this}
  resetkey(){this.search.raw.removeAttribute("inputmode")}
}