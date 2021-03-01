class page extends flex{
  constructor (title,child,opt){
    opt=opt||""
    super("column", "100%")
    
    this.bar =new tag("bar")
    this.bar.css({ "color": "var(--accent) ", "font-size": "15px", "padding": "2px 0px", "width": "100%", "position": "fixed", "z-index": 2, "box-shadow": "0px 0px 6px 10px var(--shadow)", "background": "var(--back)", "top": 0, "display": "flex", "align-items": "center", "justify-content": "center" })
    this.bar.icon("arrow-left").on("click",this.close.bind(this,this))
    this.bar.search = new edit(title, "80%").css({ "margin": "auto", "font-size": "20px" })
    this.bar.add(this.bar.search) 
    if(opt. includes("menu")) this.bar.icon("more-vert")
    
    this.modal=new modal(child||"", "show,solid"). add(this.bar, this)
    return this
       

  }
  close(e){
   e.modal.close()
  }
}
setup.prototype.page=function(title,child,opt){
  opt=opt||""
    var obj=new flex("column", "100%")
    
    obj.bar =new tag("bar")
    obj.bar.css({ "color": "var(--accent) ", "font-size": "15px", "padding": "2px 0px", "width": "100%", "position": "fixed", "z-index": 2, "box-shadow": "0px 0px 6px 10px var(--shadow)", "background": "var(--back)", "top": 0, "display": "flex", "align-items": "center", "justify-content": "center" })
    obj.bar.icon("arrow-left").on("click",this.pageclose.bind(this,obj))
    obj.bar.search = new edit(title, "80%").css({ "margin": "auto", "font-size": "20px" })
    obj.bar.add(obj.bar.search) 
    if(opt. includes("menu")) obj.bar.icon("more-vert")
    if(opt.includes("nosearch"))obj.bar.search.attr("readonly","true")
    obj.modal=new modal(child||"", "show,solid"). add(obj.bar, obj).css({"padding-top":"65px"})
    return obj
       
}
setup.prototype.pageclose=function(e){
  e.modal.close()
}