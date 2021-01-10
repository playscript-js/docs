class drawer extends tag{
  constructor(child,side,size, opt){
    super("drawer","100%","100%")
    this.css({"display":"none", "opacity" :0,"position":"fixed", "z-index":4,top:0,left:0,right:0,bottom:0, background:"var(--shadow) "})
    this.body=new flex("column",size|| "80%","100%").css({background:"var(--back)", transform:"translateX(-100%)"}).add(child||"")
    this.add(this.body)
    this.add=this.body.add
    html.add(this)
    this.on("swipeleft", this. close. bind(this)) 
    this.on("click", this. close. bind(this)) 
    html.on("swiperight", this.open.bind(this)) 
    return this
  }
  close(){this.body.animate({"transform":"translateX(-100%)"},200,null, this.closefade.bind(this))}closefade(){this.animate({opacity:0},200, null, this. closedone. bind(this))}closedone(){this.css("display", "none")}open(e){try{let m=e.distance.x;m=e.x-m ;if(m<30){this.css("display", "block").animate({opacity :1},150);this.body.animate({transform:"translateX(0%)"},250)}} catch(e){this.css("display", "block").animate({opacity :1},150);this.body.animate({transform:"translateX(0%)"},250)}}
}