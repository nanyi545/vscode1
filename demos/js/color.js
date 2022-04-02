

document.getElementById('btn').addEventListener('click', () => {
  let c1 = "#"+document.getElementById('i1').value.toLowerCase();
  console.log(c1);
  let c2 = hexToRgb(c1);
  console.log(c2);
  document.getElementById("div1").style.background = c2;
});


function hexToRgb(hex){
  if(/^#([a-f0-9]{3}){1,2}$/.test(hex)){
      if(hex.length== 4){
          hex= '#'+[hex[1], hex[1], hex[2], hex[2], hex[3], hex[3]].join('');
      }
      var c= '0x'+hex.substring(1);
      return 'rgb('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+')';
  }
}
