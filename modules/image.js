class image extends tag{
  constructor(src,w,h,opt){
    super("img",w,h)
    this.src(src)
    return this
  }
  src(e){this.attr("src",e);return this}
}