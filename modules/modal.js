class modal extends tag {
  constructor(child,opt) {
    opt = opt || ""
    super("modal")
    this.class("play_modal").css({opacity:0,display:"flex","align-items":"center","justify-content":"center",width:"100%",height:"100%",top:"0px",position:"fixed","z-index":5,"background":"var(--shade)"})
    if(opt.includes("show"))this.open()
    if(opt.includes("fixed"))this.cancel(false);else this.cancel(true)
    if(opt.includes("soft"))this.on("click", this. close. bind(this))
    if(opt.includes("solid"))this.css("background","var(--back) ")
    if(child)this.add(child)
    body.css({"overflow":"hidden"})
    return this
  }
  open(anm){window.history.pushState(null,null,null);html.add(this);this.animate({opacity:1},400);return this}
  close(anm){this.cancel(true);history.back();return this}
  cancel(e){this.attr("cancel",e);return this}
}




