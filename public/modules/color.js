class color extends modal{
  constructor(title="Pick a color",call){
    super("")
    var col= [{c:{background:"#f44663"}},
    {c:{background:"pink"}},
    {c:{background:"purple"}},
    {c:{background:"deeppurple"}},
    {c:{background:"indigo"}},
    {c:{background:"pink"}},
    {c:{background:"pink"}},
      
      
    ]
    var temp=new tag("colorbox","70px","70px").bind({css:"c"}).css({margin:"auto",boxShadow:"0px 0px 5px 5px var(--shadow)",borderRadius:"100px"})
    var body=new flex("column","80%","80%","card,scroll")
    .add(
      new text(title,"100%",null,"indent,accent,large").css({padding:"20px",position:"fixed",left:"10%"}),
      new customlist(col,"100%","200px",{temp:temp,}).css({overflow:"scroll",paddingTop:"70px"})
      
      )
    this.add(body)
    this.open();
    return this
  }
  
}