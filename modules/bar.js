class bar extends tag{
  constructor(title,opt){
    opt=opt||""
    super("bar")
    this.css({"color":"var(--accent) ","font-size":"15px","padding":"2px 0px","width":"100%","position":"fixed","z-index":2,"box-shadow":"0px 0px 6px 10px var(--shadow)","background":"var(--back)","top":0,"display":"flex","align-items":"center", "justify-content":"center"})
    this.icon("menu")
    this.search=new edit(title,"80%").css({"margin":"auto","font-size":"20px"})
    this.add(this.search)
    this.icon("more-vert")
    //this.drawer=this.icons(0)
    //this.option=this.icons(1)
    //this.icon("more-vertical")
    if(!opt.includes("inline")){html.add(this);body.css("margin-top",Number(this.css("height").replace("px",""))+4+"px")}
    if(opt.includes("noshadow"))this.css("box-shadow", "0px 0px 0px 0px transparent")
    return this
  }
}