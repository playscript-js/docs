setup.prototype.toast=(title="toast",opt="",call=()=>{console.log(title)},cust={})=>{
  var lst=document.querySelectorAll("toast");for(var i=0;i<lst.length;i++){let i2=i+1;new ref(lst[lst.length-i2]).css({marginBottom:65*i2+"px",opacity:1/i/.8})}
  var obj=new tag("toast").text(title).on("tap",()=>{call()}).css({opacity:0,position:"fixed",margin:"14px",padding:"10px",bottom:0,left:0,zIndex:6,background:"var(--back)",color:"var(--accent)",borderRadius:"8px",boxShadow:"0px 0px 5px 5px var(--shadow)"}).animate({opacity:1},300).die(3000)
  html.add(obj)
  return obj
}