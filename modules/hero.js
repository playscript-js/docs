class hero extends flex{
  constructor(title,w,h,opt){
    opt=opt||""
    super("column",w,h,null,"hero").css({"box-shadow":"0px 0px 5px 5px var(--shadow)"}).add(new text(title).css({"font-size":"22px",color:"var(--accent)","padding":"8px"}))
    if(opt.includes("right"))this.align("flex-end")
    if(opt.includes("bottom"))this.justify("flex-end")
    
    return this
  }
}