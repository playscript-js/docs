class fam extends flex{
  constructor(lst, opt, call){
    super("column")
    this. css({position:"fixed"})
    this.toggle=new button("+", null, null, "fab")
    
    this. add(this.toggle)
    html.add(this)
    return this
  }
}