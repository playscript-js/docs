class note extends text{
  constructor(txt,w,h,opt){
    super(txt,w||window.innerWidth-28+"px",h,"html,color")
    .css({"font-size":"14px",background:"#00000030","border-left":"2px solid var(--accent)",margin:"5px"})
    return this
  }
}