/*class slit extends modal{
  constructor (lst, opt, call){
    let br=lst. split(",");lst=[];for(var i=0;i<br.length;i++){lst.push({t:br[i]})}
    let dat=new list(lst, null, null, {temp:new text("hello", "100%").bind("text=t").css({padding:"5px"})}).css({"transform" :"translateY(100%)",background:"var(--back)", padding:"5px", "border-radius":"10px","box-shadow":"0px 3px 10px 3px var(--shadow)", position:"absolute", bottom:0})
    super(dat, "show,soft")
    this. cb=call
    dat.animate({transform:"translateY(0%)"}).select(this.call.bind(this))
    return this
  }
  call(e, h, r, d) {
    cb(e, h, r, d)
  }
}*/

class slit extends modal{
  constructor(lst,call,opt){
    let dat=new stringlist(lst).css({"transform" :"translateY(100%)",background:"var(--back)", padding:"5px", "border-radius":"10px","box-shadow":"0px 3px 10px 3px var(--shadow)", position:"absolute", bottom:0})
    dat.select(function(e,h,d){if(call)call(e,h.title)})
    super(dat,"show,soft")
    dat.animate({transform:"translateY(0%)"},300)
    return this
  }
}