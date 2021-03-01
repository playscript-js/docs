/*class edit extends tag {
  constructor(text,w,h,opt){
    opt=opt||""
    if(opt.includes("multi"))super("textarea");else super("input")
    this.hint(text||"")
    if(opt.includes("indent"))this.css("text-indent","14px")
    this.css({width:w,height:h,padding:"14px 0px",outline:"none","background":"transparent",border:"0px",margin:"0px"})
    return this
  }
  hint(dat){if(dat){this.attr("placeholder",dat);return this}else return this.attr("placeholder")}
}*/

function edit(hint,w,h,opt){
  opt=opt||""
  var obj=new tag("input",w,h).attr("type","text")
  if(opt.includes("multi"))obj=new tag("textarea",w,h)
  obj.css({width:w,height:h,padding:"14px 0px",outline:"none","background":"transparent",border:"0px",margin:"0px"})
  obj.hint=function(e){obj.attr("placeholder",e);return obj}
  obj.type=function(e){obj.attr("type",e);return obj}
  obj.getText=function(e){return obj.attr("name")}
  obj.text=function(e){if(e){document.getElementById(obj.attr("id")).value=e;document.getElementById(obj.attr("id")).name=e;return obj}else{return obj.attr("name")}}
 obj.hint(hint).attr("onkeyup","this.name=this.value").attr("type","text").attr("name","")
 if(opt.includes("hover")){obj.on("mouseenter",function(){obj.css("border-bottom","2px solid var(--accent)")});obj.on("mouseleave",function(){obj.css("border-bottom","2px solid transparent")})}
  return obj
}