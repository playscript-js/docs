class tab extends list{
  constructor(list,opt){
    opt=opt||"";list=list.split(",");var hold=list;list=[];for(var i=0;i<hold.length;i++){list.push({title:hold[i]})};var temp=new flex("row", "100%").align("center").justify("center").css({"padding":"14px 0px", "border-bottom":"2px solid transparent"}).bind("text=title")
    super(list, "100%",null, {temp:temp})
    this.activate=function(e){if(e!=undefined){this.children()[e].raw.click();this.active=e;return this} else return this.active}
    this.bind=function(child,e){this.child(e).attr({"child":child.id,"childview":child.attr("display")||"block"});this.activate(0);return this} 
    this.align("center").direction("row")
    this.css({"box-shadow":"0px 0px 6px 10px var(--shadow)","background":"var(--back)","height":"50px"})

    this.select(function(e,h,m,d){var l=this.children();for(var i=0;i<l.length;i++){l[i].css({"color":"var(--text)", "border-bottom":"2px solid transparent"});var c=document.querySelector("#"+l[i].attr("child"));if(c){c.style.display="none";}};d.css({"color":"var(--accent) ", "border-bottom":"2px solid var(--accent)" });var c=document.querySelector("#"+d.attr("child"));if(c){c.style.display="block"} }) 
    if(!opt.includes("inline")){this.css({"position":"fixed","margin-top":"55px","top":"0px"});html.add(this);body.css("margin-top",106+"px")}
    return this
    }}
