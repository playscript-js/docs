class radio extends flex{
  constructor(lst,w,h,opt){
    super("row",w||"100%",h,null,"stringlist")
    .justify("flex-start")
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
      if(typeof pos=="undefined")this.listdata.push(obj);else this.listdata.splice(pos,rep?1:0,obj)
    title=obj.title?new text(obj.title).css({"color":"var(--text)","font-size":obj.body?"17px":"17px","padding":"3px"}):""
    body=obj.body?new text(obj.body).css({padding:"3px",opacity:.5}):""
    img=obj.img?new image(obj.img,obj.body?"48px":"25px",obj.body?"48px":"25px").css({"margin":"4px","border-radius":"100px"}):""
    var temp=new flex("row","80px",null,null,"listitem").css({"padding":"4px"}).add(
      img,
      new flex("column","100%").add(title,body)
      
      ).align("center").attr({id:"false"})
      
    if(rep)this.remove(pos)
    this.ins(temp,pos)
    temp.attr("onclick","this.id=true")
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
    this.call(m.index()+1,this.listdata[m.index()+1],m,"∆")
    m={}
  }
  highlight(e,h){if(typeof this.highlighted=="number")this.child(this.highlighted).child(this.listdata[this.highlighted].img?1:0).child(0).css("color","var(--text)");this.child(e).child(this.listdata[e].img?1:0).child(0).css("color",h||"var(--accent)");this.highlighted=e}//.child(1).child(0).css({color:"var(--accent)"})}
}