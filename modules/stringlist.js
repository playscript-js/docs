class stringlist extends tag{
  constructor(lst,w,h,opt){
    super("stringlist",w||"100%",h)
    /*convert lst string into obj*/
    if(typeof lst=="string"){var mlst=lst.split(",");lst=[];for(var i=0;i<mlst.length;i++){lst.push({title:mlst[i]})}}
    /*defaults*/
    this.opt=opt||""
    this.objectCSS=[{},{},{},{}]
    this.call=function(e,h,r,d){console.log(e,h,r,d)}
    this.on("click", this.hashtrue.bind(this)).css("overflow-x","hidden")
    this.listdata=[];this.list(lst)
    return this
  }
  push(obj,opt){
    var img,title,body,icon,misc=""
    if(typeof obj=="object"){
      this.listdata.push(obj)
    title=obj.title?new text(obj.title).css({"color":obj.body?"var(--accent)":"var(--text)","font-size":obj.body?"22px":"17px","padding":"3px"}):""
    body=obj.body?new text(obj.body).css({padding:"3px"}):""
    img=obj.img?new image(obj.img,"56px","56px").css({"padding":"4px"}):""}
    else{title=obj;this.listdata.push({title:obj})}
    var temp=new flex("row","100%").css({"padding":"4px"}).add(
      img,
      new flex("column","100%").add(title,body)
      
      ).align("center").attr({id:"false"})
      
    this.add(temp)
    temp.attr("onclick","this.id=true")
    return this}
  pop(pos){return this}
  replace(pos,obj,opt){return this}
  insert(pos,obj,opt){return this}
  select(call){this.call=call;return this}
  list(e){if(e){for(var i=0;i<e.length;i++){this.push(e[i])};return this}
  else{return this.listdata}}
  hashtrue(){
    var m=this.raw.querySelector("#true")
    m=new ref(m).attr("id","false")
    this.call(m.index()+1,this.listdata[m.index()+1],m,"∆")
    m={}
  }
}