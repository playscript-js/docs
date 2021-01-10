class text extends tag {
  constructor(text,w,h,opt){
    opt=opt||""
    super("text")
    if(opt.includes("html"))this.html(text||"");else if(opt.includes("mdi")){this.class("zmdi");this.class("zmdi-"+text);}else this.text(text||"")
    if(opt.includes("indent"))this.css("text-indent","14px")
    if(opt.includes("right"))this.css("text-align","right")
    if(opt.includes("center"))this.css("text-align","center")
    if(opt.includes("small"))this.css("font-size","14px")
    if(opt.includes("medium"))this.css("font-size","17px")
    if(opt.includes("large"))this.css("font-size","22px")
    if(opt.includes("xlarge"))this.css("font-size","25px")
    if(opt.includes("jumbo"))this.css("font-size","30px")
    
    this.css({width:w,height:h,padding:"14px 0px"})
    return this
  }
}