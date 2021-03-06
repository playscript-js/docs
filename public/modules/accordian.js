class accordian extends flex{
  constructor(lst,w,h,opt){
    super("column",w||"100%",h,null,"accordian").align("center")
    /*defaults*/
    this.opt=opt||""
    this.call=function(e,h,r,d){console.log(e,h,r,d)}
    this.on("click", this.hashtrue.bind(this)).css("overflow-x","hidden")
    this.listdata=[];this.list(lst)
    return this
  }
  push(obj,pos,rep){
    var img,title,body,icon,misc=""
   
   /*
   super("details",w,h)
    this.css({margin:"10px 7px",padding:"10px 7px","border-radius":"8px","box-shadow":"0px 0px 5px 5px var(--shadow)"})
    this.sum=new tag("summary","100%").text(sum||"info").css({outline:"none"})
    this.details=new flex("column","100%").add(det||"")
    this.add(this.sum,this.details)

   */
   
    if(typeof obj!="object")obj={body:obj};
      if(typeof pos=="undefined")this.listdata.push(obj);else this.listdata.splice(pos,rep?1:0,obj)
    title=new tag("summary","100%").text(obj.title?obj.title:obj.body.length>10?obj.body.slice(0,11)+"...":obj.body).css({outline:"none"})
    body =new flex("column","100%").add(obj.body)
    var temp=new tag("details","90%").css({margin:"10px 7px",padding:"10px 7px","border-radius":"8px","box-shadow":"0px 0px 5px 5px var(--shadow)"}).add(title,body).attr({id:"false"})
      
    if(rep)this.remove(pos)
    this.ins(temp,pos)
    temp.attr("onclick","this.id=true")
    return this}
    
  pop(pos){this.listdata.splice(pos,1);this.list(this.listdata);return this}
  
  
  select(call){this.call=call;return this}
  list(e){if(e){
    this.listdata=[];this.empty()
        /*convert lst string into obj*/
    if(typeof e=="string"){var mlst=e.split(",");e=[];for(var i=0;i<mlst.length;i++){e.push({body:mlst[i]})}}
    for(var i=0;i<e.length;i++){this.push(e[i])};return this}
  else{return this.listdata}}
  hashtrue(){
    var m=this.raw.querySelector("#true")
    m=new ref(m).attr("id","false")
    this.call(m.index()+1,this.listdata[m.index()+1],m,"∆")
    m={}
  }
  highlight(e,h){if(typeof this.highlighted=="number")this.child(this.highlighted).child(this.listdata[this.highlighted].img?1:0).child(0).css("color","var(--text)");this.child(e).child(this.listdata[e].img?1:0).child(0).css("color",h||"var(--accent)");this.highlighted=e}//.child(1).child(0).css({color:"var(--accent)"})}
}