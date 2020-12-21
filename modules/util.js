class play_utility{
  rand(min, max) { if (max) return min + Math.floor((max - min) * Math.random());
    else return Math.floor((min) * Math.random()); }
  id(){ return "id" + this.rand(9999989) }
  repeat(call, time) { for (var i = 0; i < time; i++) { call(i) } }
  type(str) { return typeof str }
  tidy(str, dat, opt) { var hold = str; while (hold.includes(dat)) { hold = hold.replace(dat, "") } return hold };
  search(string, lst, at, clean) { ret = []; for (var i = 0; i < lst.length; i++) { var con = lst[i];
      con = con[at];con=con.toLowerCase(); var call = string.toLowerCase(); for (var n = 0; n < clean.length; n++) { con = this.tidy(con, clean[n]);
        call = this.tidy(call, clean[n]); } if (con.includes(call)) ret.push(lst[i]);
      else {} } return ret }
  scan(string, lst, clean) { ret = []; for (var i = 0; i < lst.length; i++) { var con = lst[i];
      con = JSON.stringify(con);con=con.toLowerCase(); var call = string.toLowerCase(); for (var n = 0; n < clean.length; n++) { con = this.tidy(con, clean[n]);
        call = this.tidy(call, clean[n]); } if (con.includes(call)) ret.push(lst[i]);
      else {} } return ret }
  a() { alert("hi") }
}
util = new play_utility()