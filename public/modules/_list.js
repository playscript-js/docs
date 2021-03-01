function _list(data,w,h,opt){
  data=data||[];opt=opt||{};optn=opt
var chao = new flex
chao.add(opt.temp)
opt.temp=chao
var lay="column"
option=opt.opt||""
if(option.includes("row"))lay="row";else lay="column"
  var obj = new flex(lay,w,h).css({"overflow":"scroll"}).justify("start")
  obj.css(opt.css||{})
 obj.callback = function(e,d,h){console.log("list item "+e+" pressed")}
 obj.item={}
 obj.item.add=function(data){
   var temp=opt.temp
   var li = new tag("div")
   li.text(temp.getText(true),true)
   obj.add(li)
   var list = $(li.nd).find("*")
   for (var i =0;i<list.length;i++){
     var t =$(list[i]).attr("text")
     var a =$(list[i]).attr("touch")
     var im =$(list[i]).attr("source")
     var b =$(list[i]).attr("background")
     $(list[i]).attr("int","false")
     if(t!=undefined){$(list[i]).text(data[t])}
     if(im!=undefined){$(list[i]).attr("src",data[im])}
     if(b!=undefined){$(list[i]).css("background",data[b])}
     t="";a=""
     $(list[i]).attr("onclick","$(this).attr('int','true')")
     
   }
   
   li.on("click",function(){
     var m="heyy"
     var list=$(li.nd).find("*")
     for(var i=0;i<list.length;i++){
     	
       if($(list[i]).attr("int")=="true"){
        m=$(list[i]).attr("hold")
         $(list[i]).attr("int","false")
       }
     }
     obj.callback(li.getAttr("id"),m,obj.getList[li.getAttr("id")-0])})
   obj.refreshTouch();obj.getList.push(data);return obj

 }
 
  
  obj.item.remove=function(pos){obj.getList.splice(pos,1);var hold=obj.getList;obj.getList=[];obj.empty();var pos = 0;repeat(function(){obj.item.add(hold[pos]);pos++},hold.length);return obj}
  obj.item.empty=function(pos){$("#"+pos).text("");obj.getList[pos]="";return obj}
  obj.item.insert=function(pos,item){obj.getList.splice(pos,0,item);var hold=obj.getList;obj.getList=[];obj.empty();var pos = 0;repeat(function(){obj.item.add(hold[pos]);pos++},hold.length);return obj}
  obj.item.set=function(item,pos){if(optn.html)$(obj.nd).children("#"+pos).html(item);else $(obj.nd).children("#"+pos).text(item);obj.getList[pos]=item;return obj}
  obj.item.get=function(pos){return obj.getList[pos]}
  obj.item.bind=function(pos){var i = $(obj.nd).children("#"+pos);return new bind(i)}
  obj.item.children=function(pos){}
    
  
  obj.getList=[]
  obj.list={}
  obj.list.set=function(list){obj.getList=[];obj.empty();var pos = 0;repeat(function(){obj.item.add(list[pos],opt.temp);pos++},list.length);return obj}
  obj.list.add=function(list){var pos = 0;repeat(function(){obj.item.add(list[pos]);pos++},list.length);return obj}
  obj.list.remove=function(list){obj.getList=[];obj.empty();var pos = 0;repeat(function(){obj.item.remove(list[pos]);pos++},list.length);return obj}


  obj.refreshTouch = function(){var items = $(obj.nd).children();for(var n =0;n<items.length;n++){items[n].id=n}}
  obj.select =function(call){obj.callback=call}
  obj.list.set(data)
  
  return obj
}