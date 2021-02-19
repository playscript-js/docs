class fab extends flex{
  constructor(icon="plus",w="50px",pos="",opt=""){
    super("column",w,w,null,"fab")
    .css({background:"var(--accent)",color:"white",position:"fixed","border-radius":"100px",margin:"15px",opacity:.9})
    .icon(icon)
    if(pos.includes("right"))this.css("right",0)
    if(pos.includes("bottom"))this.css("bottom",0)
    body.add(this)
    return this
  }
}