class page extends flex{
  constructor (title,opt){
    opt=opt||""
    super("column", "100%")
    
    this.bar =new tag("bar")
    this.bar.css({ "color": "var(--accent) ", "font-size": "15px", "padding": "2px 0px", "width": "100%", "position": "fixed", "z-index": 2, "box-shadow": "0px 0px 6px 10px var(--shadow)", "background": "var(--back)", "top": 0, "display": "flex", "align-items": "center", "justify-content": "center" })
    this.bar.icon("arrow-left")
    this.bar.search = new edit(title, "80%").css({ "margin": "auto", "font-size": "20px" })
    this.bar.add(this.bar.search)
    if(opt. includes("menu")) this.bar.icon("more-vert")
    
    this.modal=new modal(null, "show,solid"). add(this.bar, this)
    //this. bar. icons(0).on("click",this. modal. close. bind(this. modal)) 
    return this
  }
}