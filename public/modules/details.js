class details extends tag{
  constructor(sum,det,w,h,opt){
    super("details",w,h)
    this.css({margin:"10px 7px",padding:"10px 7px","border-radius":"8px","box-shadow":"0px 0px 5px 5px var(--shadow)"})
    this.sum=new tag("summary","100%").text(sum||"info").css({outline:"none"})
    this.details=new flex("column","100%").add(det||"")
    this.add(this.sum,this.details)
    return this
  }
}