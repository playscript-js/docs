class menu extends modal{
  constructor(lst, pos,call,opt){
    let dat=new stringlist(lst).css({background:"var(--back)", padding:"5px", "max-width":"200px", "border-radius":"8px","box-shadow":"0px 3px 10px 3px var(--shadow)", position:"absolute"})
    dat.select(function(e,h,d){if(call)call(e,h.title)})
    pos=pos||"";pos=pos.replaceAll(" ", "").split(",");for(var i=0;i<pos.length;i++){dat.css(pos[i],"12px")}
    super(dat,"show,soft")
    
    return this
  }
}