class underweigh extends tag{
  constructor(top, bottom, opt){
    super("underweigh", "100%")
    this.css({position:"fixed", bottom:0,"z-index":3})
    this.title=new flex("row", "100%").add(top||"").on("swipeup",this.open.bind(this))
    this.body=new flex("row","100%", "100%").css({ display:"none",opacity:0, height:"0px"}).add(bottom||""). on("swipedown", this.close.bind(this))
    this.add(this.title, this.body)
    html.add(this)
    return this
  }
  open(){
    this.title.animate({opacity:0,display:"none"} ,300)
    this.body.css({display:"flex"}).animate({opacity:1,height:window.innerHeight+"px"},300)
  }
  close(){
   this.title.css({display:"flex"}). animate({opacity:1} ,300)
    this.body.animate({opacity:0,height:"0px",display:"none"},300)
 
  }
}