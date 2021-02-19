
class slit extends modal{
  constructor(lst,call,opt){
    let dat=new stringlist(lst).css({"transform" :"translateY(100%)",background:"var(--back)", padding:"5px", "border-radius":"10px","box-shadow":"0px 3px 10px 3px var(--shadow)", position:"absolute", bottom:0})
    dat.select(function(e,h,d){if(call)call(e,h.title)})
    super(dat,"show,soft")
    dat.animate({transform:"translateY(0%)"},300)
    return this
  }
}

setup.prototype.slit=function(lst,call,opt){
  let dat=new stringlist(lst).css({"transform" :"translateY(100%)",background:"var(--back)", padding:"5px", "border-radius":"10px","box-shadow":"0px 3px 10px 3px var(--shadow)", position:"absolute", bottom:0})
    dat.select(function(e,h,d){if(call)call(e,h.title)})
    var obj=new modal(dat,"show,soft")
    dat.animate({transform:"translateY(0%)"},300)
    return obj
}