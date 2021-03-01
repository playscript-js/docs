class image extends tag{
  constructor(src,w,h,opt=""){
    super("img",w,h).css({"object-fit":"cover"})
    if(opt.includes("round"))this.css("border-radius","100%")
    this.src(src)
    return this
  }
  src(e){this.attr("src",e);return this}
}