class menu extends modal{
  constructor(lst, pos, opt){
    let br=lst. split(",");lst=[];for(var i=0;i<br.length;i++){lst.push({t:br[i]})}
    let dat=new list(lst, null, null, {temp:new text("hello", "94%").bind("text=t").css({padding:"5px"})}).css({background:"var(--back)", padding:"5px", "max-width":"200px", "border-radius":"8px","box-shadow":"0px 3px 10px 3px var(--shadow)", position:"absolute"})
    pos=pos||"";pos=pos.replaceAll(" ", "").split(",");for(var i=0;i<pos.length;i++){dat.css(pos[i],"12px")}
    super(dat,"show, soft")
    return this
  }
}