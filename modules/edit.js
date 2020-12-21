class edit extends tag {
  constructor(text,w,h,opt){
    opt=opt||""
    if(opt.includes("multi"))super("textarea");else super("input")
    this.hint(text||"")
    if(opt.includes("indent"))this.css("text-indent","14px")
    this.css({width:w,height:h,padding:"14px 0px",outline:"none","background":"transparent",border:"0px",margin:"0px"})
    return this
  }
  hint(dat){if(dat){this.attr("placeholder",dat);return this}else return this.attr("placeholder")}
}