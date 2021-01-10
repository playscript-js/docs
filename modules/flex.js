class flex extends tag {
  constructor(dir,w,h,opt,retag){
    opt=opt||"";
    super(retag||"flex")
    this.css({width:w,height:h,display:"flex","flex-direction":dir||"column","align-items":"start","justify-content":"start"})
    if(opt.includes("scroll"))this.css("overflow","auto");else this.css("overflow","hidden")
    if(opt.includes("right"))this.align("flex-end")
    if(opt.includes("center"))this.align("center")
    
    return this
  }
  direction(data){this.css("flex-direction",data);return this}
  wrap(data){this.css("flex-wrap",data);return this}
  align(data){this.css("align-items",data);return this}
  justify(data){this.css("justify-content",data);return this}
  content(data){this.css("align-content",data);return this}
  scroll(bool){if(bool)this.css("overflow","auto");else this.css("overflow","hidden");return this}

}