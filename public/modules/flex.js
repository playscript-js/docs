class flex extends tag {
  constructor(dir,w,h,opt,retag="flex"){
    super(retag)
    opt=opt||""
    this.css({width:w,height:h,display:"flex","flex-direction":dir||"column","align-items":"flex-start","justify-content":"start","flex-shrink":0,flex:"basis","flex-grow":0})
    if(opt.includes("scroll"))this.css("overflow","auto");else this.css("overflow","hidden")
    if(opt.includes("right"))this.align("flex-end")
    if(opt.includes("center"))this.align("center")
    if(opt.includes("card"))this.css({background:"var(--back)",borderRadius:"8px",boxShadow:"0px 0px 5px 5px var(--shadow)"}).align("center")
    if(opt.includes("pill"))this.css({background:"var(--back)",borderRadius:h, padding:"5px",boxShadow:"0px 0px 5px 5px var(--shadow)"}).align("center")
    if(opt.includes("vague"))this.css("opacity",.5)
    if(opt.includes("margin"))this.css("margin","auto")
    return this
  }
  direction(data){this.css("flex-direction",data);return this}
  wrap(data){this.css("flex-wrap",data);return this}
  align(data){this.css("align-items",data);return this}
  justify(data){this.css("justify-content",data);return this}
  content(data){this.css("align-content",data);return this}
  scroll(bool){if(bool)this.css("overflow","auto");else this.css("overflow","hidden");return this}

}