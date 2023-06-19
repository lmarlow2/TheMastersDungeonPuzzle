function calculateSums(){
  let a, b, c, d, e, f, g, h, i;
  a = parseInt(document.getElementById("a").value);
  b = parseInt(document.getElementById("b").value);
  c = parseInt(document.getElementById("c").value);
  d = parseInt(document.getElementById("d").value);
  e = parseInt(document.getElementById("e").value);
  f = parseInt(document.getElementById("f").value);
  g = parseInt(document.getElementById("g").value);
  h = parseInt(document.getElementById("h").value);
  i = parseInt(document.getElementById("i").value);
  //rows
  let abc = a + b + c;
  let def = d + e + f;
  let ghi = g + h + i;
  //cols
  let adg = a + d + g;
  let beh = b + e + h;
  let cfi = c + f + i;
  //diags
  let aei = a + e + i;
  let ceg = c + e + g;

  if([ ... new set([a, b, c, d, e, f, g, h, i])].length == 9){
    if(abc == def && def == ghi && ghi == adg && adg == beh && beh == cfi && cfi == aei && aei == ceg && ceg == 15){
      window.alert("Correct Answer Submitted!");
    } else {
      window.alert("This answer is not correct!");
    }
  } else {
    window.alert("The value of each box must be unique. No option is reused.");
  }
}
