class text extends tag {
  constructor(text,w,h,opt){
    opt=opt||""
    super("text")
    if(opt.includes("html"))this.html(text||"");else this.text(text||"")
    if(opt.includes("indent"))this.css("text-indent","14px")
    this.css({width:w,height:h,padding:"14px 0px"})
    return this
  }
}