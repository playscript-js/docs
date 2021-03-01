class customlist extends tag{
  constructor(lst,w="100%",h,opt={temp:new text().bind({text:"text"})}){
    //super(opt.layout||"column",w,h,"scroll","customlist")
    super("customlist",w,h)
    /*defaults*/
    this.temp=new clone(opt.temp)
    this.call=function(e,h,r,d){console.log(e,h,r,d)}
    this.on("click", this.hashtrue.bind(this))
    this.listdata=[];this.list(lst)
    return this
  }
  push(obj,pos,rep){
    var img,title,body,icon,misc=""
    if(typeof obj!="object")obj={text:obj};
      if(typeof pos=="undefined")this.listdata.push(obj);else this.listdata.splice(pos,rep?1:0,obj)
    var temp=new clone(this.temp).attr({id:"false"})
    
    

     //enhance parent attributes
    if(temp.attr("bind")){
      var tjson=JSON.parse(temp.attr("bind"))
    var tkeys=Object.keys(tjson)
    temp.css(obj[tjson.css]||{})
    temp.text(obj[tjson.text]||"")
    for(var i=0;i<tkeys.length;i++){
      if(tkeys[i]!="text"&&tkeys[i]!="css")temp.attr(tkeys[i],obj[tjson[tkeys[i]]])
    }}
    //enhance children attributes
    var lst=temp.children("deep")
    for(var i=0;i<lst.length;i++){
      lst[i].attr({"id":"false","onclick":"this.id=true"})
      if(lst[i].attr("bind")){
      var tjson=JSON.parse(lst[i].attr("bind"))
      var tkeys=Object.keys(tjson)
      lst[i].css(obj[tjson.css]||{})
      lst[i].text(obj[tjson.text]||undefined)
      for (var i2 = 0; i2 < tkeys.length; i2++) {
        if(tkeys[i2]!="text"&&tkeys[i2]!="css")lst[i].attr(tkeys[i2], obj[tjson[tkeys[i2]]])
      }
    }}
    
    if(rep)this.remove(pos)
    this.ins(temp,pos)
    temp.attr("onclick","this.id=true")
    return this}
    
  pop(pos){this.listdata.splice(pos,1);this.list(this.listdata);return this}
  
  
  select(call){this.call=call;return this}
  list(e){if(e){
    this.listdata=[];this.empty()
        /*convert lst string into obj*/
    if(typeof e=="string"){var mlst=e.split(",");e=[];for(var i=0;i<mlst.length;i++){e.push({text:mlst[i]})}}
    for(var i=0;i<e.length;i++){this.push(e[i])};return this}
  else{return this.listdata}}
  hashtrue(){
    var x=this.raw.querySelectorAll("#true")
    var m=new ref(x[0]).attr("id","false")
    var y=new ref(x[x.length-1]).attr("id","false").attr("return")
    
    this.call(m.index()+1,this.listdata[m.index()+1],y||null,m,"∆")
    m={}
  }
  
}