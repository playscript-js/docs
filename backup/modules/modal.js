class modal extends flex {
  constructor(child,opt) {
    opt = opt || ""
    super("column","100%","100%",null,"modal")
    this.class("play_modal").css({opacity:0,display:"flex","align-items":"center","justify-content":"center",width:"100%",height:"100%",top:"0px",position:"fixed","z-index":5,"background":"var(--shadow)"})
    if(opt.includes("show"))setTimeout(this.open.bind(this),50)
    if(opt.includes("fixed"))this.cancel(false);else this.cancel(true)
    if(opt.includes("soft"))this.on("click", this. close. bind(this))
    if(opt.includes("solid"))this.css("background","var(--back) ")
    if(child.raw)this.add(child);else this.add(new text(child).css({"color":"white","text-shadow":"var(--accent) 0px 0 1px"}))
    
    return this
  }
  open(anm){body.css({"overflow":"hidden"});window.history.pushState(null,null,null);html.add(this);this.animate({opacity:1},400);return this}
  close(anm){this.cancel(true);history.back();return this}
  cancel(e){this.attr("cancel",e);return this}
}




