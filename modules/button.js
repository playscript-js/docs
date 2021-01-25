class button extends tag {
  constructor(text, w, h, opt) {
    opt = opt || ""
    super("button")
    if(opt.includes("html"))this.html(text||"");else if(opt.includes("mdi"))this.icon(text);else this.text(text||"")
    this.css({"outline":"none", "width":w,"height":h,"font-size":"19px","border":"2px solid transparent","text-align":"center","background":"var(--accent)","color":"white","border-radius":"8px","padding":"12px 14px","margin":"8px"})
    if(opt.includes("silent"))this.css({color:"var(--accent)", background:"var(--back)"})
    if(opt.includes("outline"))this.css({color:"var(--accent)", background:"transparent", "border":"2px solid var(--accent) "})
    if(opt.includes("blur"))this.css({"box-shadow":"0px 0px 6px 3px var(--accent) "})
    if(opt.includes("shadow"))this.css({"box-shadow":"0px 4px 8px 1px var(--shadow) "})
    if(opt.includes("pill"))this.css({"border-radius" :"1000px"})
    if(opt.includes("square"))this.css({"border-radius":"0px"})
    if(opt.includes("elegant"))this.css({"color":"var(--accent) ", "background":store.getItem("psaccent")+"55"})
    if(opt.includes("gradient"))this.css({"color":"var(--accent) ", "background":"linear-gradient(" +store.getItem("psaccent")+"00"+", "+store.getItem("psaccent")+"55) ","border":"2px solid var(--background" })
    if(opt.includes("fab"))this.css({ "font-size": "25px", "border-radius": "100px", "padding": "15px", "width": "30px", "height": "30px" })
    if(opt.includes("mini"))this.css({ "font-size": "20px", "border-radius": "100px", "padding": "10px", "width": "30px", "height": "30px" })
    return this
  }
}