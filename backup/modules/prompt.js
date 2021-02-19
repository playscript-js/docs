setup.prototype.prompt=function(body,title,call,opt){
      opt=opt||""
    var obj,objTitle,objBody,objButtonlay, objButton,ob2, objBase;
    if(title)objTitle=new text(title,"100%",null,"indent").css({color:"var(--accent)","font-size":"22px","box-shadow":"0px 0px 5px 3px var(--shadow)"})
    objBody=new edit(body,"90%").css({"padding-left":"5%","max-height":window.innerHeight-200+"px"})
    objBody.raw.autofocus=true
    if(opt.includes("number"))objBody.attr("type","number")
    objButton=new button("cancel",null, null, "silent").css("margin-left","auto").on("click",function(){obj.close();if(typeof call=="function")call()})
    ob2=new button("submit", null, null, "silent").on("click",function(){obj.close();if(typeof call=="function")call(objBody.text())})
    objButtonlay=new flex("row","100%").add(objButton, ob2)
    objBase=new flex("column","80%").css({"background":"var(--back)","border-radius":"8px","box-shadow":"0px 3px 10px 3px var(--shadow)"}).add(objTitle||"",objBody,objButtonlay)
    obj = new modal(objBase,"show");return obj}
