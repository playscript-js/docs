class radiolist extends flex{
  constructor(lst,w,h,opt){
    super("column",w||"100%",h,null,"radiolist")
    /*convert lst string into obj*/
    if(typeof lst=="string"){var mlst=lst.split(",");lst=[];for(var i=0;i<mlst.length;i++){lst.push({title:mlst[i]})}}
    /*defaults*/
    this.opt=opt||""
    this.call=function(e,h,r,d){console.log(e,h,r,d)}
    this.on("click", this.hashtrue.bind(this)).css("overflow-x","hidden")
    this.listdata=[];this.list(lst)
    return this
  }
  push(obj,pos,rep){
    var img,title,body,icon,misc=""
    if(typeof obj!="object")obj={title:obj};
      if(!pos)this.listdata.push(obj);else this.listdata.splice(pos,rep?1:0,obj)
    title=obj.title?new text(obj.title).css({"color":"var(--text)","font-size":obj.body?"17px":"17px","padding":"3px"}):""
    body=obj.body?new text(obj.body).css({padding:"3px",opacity:.5}):""
    img=obj.img?new image(obj.img,"56px","56px").css({"padding":"4px","border-radius":"100px","box-shadow":"0px 0px 3px 2px var(--shadow)"}):""
    var temp=new flex("row","100%",null,null,"listitem").css({"padding":"4px"}).add(
      img,
      new flex("column","100%").add(title,body)
      
      ).align("center").attr({id:"false"})
      
    if(rep)this.remove(pos)
    this.ins(temp,pos)
    temp.attr("onclick","this.id=true")
    return this}
    
  pop(pos){return this}
  
  
  select(call){this.call=call;return this}
  list(e){if(e){for(var i=0;i<e.length;i++){this.push(e[i])};return this}
  else{return this.listdata}}
  hashtrue(){
    var m=this.raw.querySelector("#true")
    m=new ref(m).attr("id","false")
    this.call(m.index()+1,this.listdata[m.index()+1],m,"∆")
    m={}
  }
  highlight(e,h){if(typeof this.highlighted=="number")this.child(this.highlighted).child(this.listdata[this.highlighted].img?1:0).child(0).css("color","var(--text)");this.child(e).child(this.listdata[e].img?1:0).child(0).css("color",h||"var(--accent)");this.highlighted=e}//.child(1).child(0).css({color:"var(--accent)"})}
}