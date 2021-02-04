class loader extends tag{
  constructor (w,col,opt){
    super("loader")
    this.css({width:w||"200px",height:"3px",background:"#00000022"})
    this.add(this.bob=new tag("loadinit").css({background:col||"blue",height:"3px"}))
    this.anml()
    return this
  }
  anml(){
    
    this.bob.css({"margin-right":"auto","margin-left":"0px"})
    this.bob.animate({width:"100px"},1000)
  }
  anmr(){
    
  }
}