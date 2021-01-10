function list(list, w, h, opt) {
    obj = new flex("column", "100%")
    opt = opt || {};obj.return="none"
  obj.push=function(dat,temp){
    obj.getList.push(dat);
    var item=new clone(temp||obj.temp)
    if(item.attr("binded")){var list=item.attr("binded").split("&&");for(let i=1;i<list.length;i++){ var l2=list[i].split("=");item.attr(l2[0],dat[l2[1]]) }
    item.attr({"binded":"cleared","return":"none","interact":"false"}).text(item.attr("text")||"")}
    

    /*divide binds*/var kids=item.children(true);var kid=null;for(var i=0;i<kids.length;i++){kid=kids[i];kid.attr({"interact":"false","onclick":"this.setAttribute('interact','true')"});if(kid.attr("binded")){list=kid.attr("binded").split("&&");for(let i=1;i<list.length;i++){ var l2=list[i].split("=");kid.attr(l2[0],dat[l2[1]]) };kid.attr("binded","cleared").text(kid.attr("text")||"")}}
    obj.add(item)
    item.on("click",function(){if(item.raw.querySelector("*[interact='true']")==null)var hold=item.raw;else var hold= item.raw.querySelector("*[interact='true']");var m=new ref(hold);m.attr("interact","false");obj.callback(item.index()+1,m.attr("return"),obj.getList[item.index()+1],item)})
    return obj
  }
  obj.pop=function(pos){obj.remove(pos);obj.getList.splice(pos,1);return obj}
 
 
 

 obj.insert=function(dat,pos,temp){
    obj.getList.splice(pos,0,dat);
    var item=new clone(temp||obj.temp)
    if(item.attr("binded")){var list=item.attr("binded").split("&&");for(let i=1;i<list.length;i++){ var l2=list[i].split("=");item.attr(l2[0],dat[l2[1]]) }
    item.attr({"binded":"cleared","return":"none","interact":"false"}).text(item.attr("text")||"")}
    

    /*divide binds*/var kids=item.children(true);var kid=null;for(var i=0;i<kids.length;i++){kid=kids[i];kid.attr({"interact":"false","onclick":"this.setAttribute('interact','true')"});if(kid.attr("binded")){list=kid.attr("binded").split("&&");for(let i=1;i<list.length;i++){ var l2=list[i].split("=");kid.attr(l2[0],dat[l2[1]]) };kid.attr("binded","cleared").text(kid.attr("text")||"")}}
    obj.ins(item,pos)
    item.on("click",function(){if(item.raw.querySelector("*[interact='true']")==null)var hold=item.raw;else var hold= item.raw.querySelector("*[interact='true']");var m=new ref(hold);m.attr("interact","false");obj.callback(item.index()+1,m.attr("return"),obj.getList[item.index()+1],item)})
    return obj
    
  }
  
  obj.replace=function(dat,pos,temp){
    obj.pop(pos)
    obj.insert(dat,pos,temp)
    return obj
  }
  obj.list=function(dat,temp){
    obj.getList=[];obj.empty();
    for(let i=0;i<dat.length;i++){
      obj.push(dat[i],temp)
    }return obj}
  obj.select=function(call){ obj.callback=call;return obj}
    obj.temp=opt.temp||new text("listItem")
    obj.css({display:"flex","flex-direction":"column","align-items":"start"})
    obj.getList=list||[];obj.list(obj.getList,opt.temp);obj.callback=function(e,h,d){console.log(e+" item clicked");return obj};
    return obj
  
}
