class tab extends flex{
  constructor(lst,w,opt){
    super("row",w||"100%","45px",null,"stringlist")
    .css({"position":"fixed",bottom:0,background:"var(--back)","box-shadow":"0px 0px 5px 5px var(--shadow)"})
    /*defaults*/
    this.opt=opt||""
    this.call=function(e,h,r,d){console.log(e,h,r,d)}
    this.on("click", this.hashtrue.bind(this)).css("overflow-x","hidden")
    this.listdata=[];this.list(lst)
    html.add(this)
    return this
  }
  push(obj,pos,rep){
    var img,title,body,icon,misc=""
    if(typeof obj!="object")obj={title:obj};
      if(typeof pos=="undefined")this.listdata.push(obj);else this.listdata.splice(pos,rep?1:0,obj)
    body=obj.body?new text(obj.body).css({padding:"3px",opacity:.5}):""
    var temp=new flex("row","100%","36px",null,"tabitem").css({"padding":"4px"}).add(
    obj.title||obj
    ).align("center").justify("center").attr({id:"false"}).css({"border-top":"2px solid transparent"})
      
    if(rep)this.remove(pos)
    this.ins(temp,pos)
    temp.attr("onclick","this.id=true")
    this.highlight(0)
    return this}
    
  pop(pos){this.listdata.splice(pos,1);this.list(this.listdata);return this}
  
  
  select(call){this.call=call;return this}
  list(e){if(e){
    this.listdata=[];this.empty()
        /*convert lst string into obj*/
    if(typeof e=="string"){var mlst=e.split(",");e=[];for(var i=0;i<mlst.length;i++){e.push({title:mlst[i]})}}
    for(var i=0;i<e.length;i++){this.push(e[i])};return this}
  else{return this.listdata}}
  hashtrue(){
    var m=this.raw.querySelector("#true")
    m=new ref(m).attr("id","false")
    this.highlight(m.index()+1)
    this.call(m.index()+1,this.listdata[m.index()+1],m,"∆")
    m={}
  }
  highlight(e,h){if(this.highlighted!=undefined){this.child(this.highlighted).css({"border-top":"2px solid transparent","color":"var(--text)"});};this.child(e).css({"border-top":"2px solid var(--accent)","color":"var(--accent)"});this.highlighted=e}//.child(1).child(0).css({color:"var(--accent)"})}
}