setup.prototype.snack=function(title, call){
      var obj=new flex("row","100%","50px").align("center"). css({"box-shadow":"0px 0px 10px 3px var(--shadow) ", "padding":"0px 6px", "background":"var(--back)", "position":"fixed", bottom:0,left:0,right:0, "transform":"translateY(100px)","z-index":5}). animate({"transform":"translateY(0px)"},250). class("playsnack")
      setTimeout(function(){obj.animate({"transform":"translateY(100px)"},150, null, function(){obj.remove()})}, 2500)
      var t=new text(title,"90%",null,"oneline").css({color:"var(--text)"})
      var b=new text("ok", "10%").css({color:"var(--accent)"}). on("click", function(){if(typeof call=="function") call();else obj. remove()})
      obj.add(t, b) 
      html.add(obj)
      return obj
    }