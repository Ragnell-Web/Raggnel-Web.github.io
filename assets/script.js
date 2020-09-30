$('li a').on('click',function (e) {
  
  let tujuan = $(this).attr('href');
  let elemenHref = $(tujuan);
  
  window.scrollTo(0, $(elemenHref).offset().top - 50);
  
  e.preventDefault();
  
  
})

var tglUltah = 2002;
var date = new Date();
var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;
var umur = year - tglUltah;

document.getElementById('tgl').innerHTML = umur;
// let a = document.querySelector('li a');

// a.addEventListener('click',function (e) {
//   console.log(document.body.scrollTo(0, 700));
  
// })
