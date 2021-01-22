class dialog extends modal{
  constructor(title,body,call,opt,okb){
    super(" ","show")
    var obj,objTitle,objBody,objButtonlay, objButton,ob2, objBase;
    if(title)objTitle=new text(title,"100%",null,"indent").css({color:"var(--accent)","font-size":"22px","box-shadow":"0px 0px 5px 3px var(--shadow)"})
    objBody=new flex("column","100%").css({"max-height":window.innerHeight-250+"px",overflow:"scroll"}).add(body||"")
    objButton=new button("cancel",null, null, "silent").css("margin-left","auto")
    ob2=new button(okb||"ok", null, null, "silent")
    objButtonlay=new flex("row","100%").add(objButton, ob2)
    objBase=new flex("column","80%").css({"background":"var(--back)","border-radius":"8px","box-shadow":"0px 3px 10px 3px var(--shadow)"}).add(objTitle||"",objBody,objButtonlay)
    
   // super(objBase,"show")
    this.call=call||false
    objButton.on("click",this.fclose.bind(this))
    ob2.on("click",this.tclose.bind(this))
    this.add(objBase)
    return this
  }
  tclose(){this.close();if(this.call)this.call(true)}
  fclose(){this.close();if(this.call)this.call(false)}

}



/*
confirm(body,title,call){
    var obj,objTitle,objBody,objButtonlay, objButton,ob2, objBase;
    if(title)objTitle=new text(title,"100%",null,"indent").css({color:"var(--accent)","font-size":"22px","box-shadow":"0px 0px 5px 3px var(--shadow)"})
    objBody=new text(body,"90%").css({"padding-left":"5%","max-height":window.innerHeight-200+"px"})
    objButton=new button("cancel",null, null, "silent").css("margin-left","auto").on("click",function(){obj.close();if(typeof call=="function")call(false)})
    ob2=new button("ok", null, null, "silent").on("click",function(){obj.close();if(typeof call=="function")call(true)})
    objButtonlay=new flex("row","100%").add(objButton, ob2)
    objBase=new flex("column","80%").css({"background":"var(--back)","border-radius":"8px","box-shadow":"0px 3px 10px 3px var(--shadow)"}).add(objTitle||"",objBody,objButtonlay)
    obj = new modal(objBase,"show");return obj}

*/