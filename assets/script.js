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

let d = new Date();
	let tgl = d.getDate();
	

	let months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
	let days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum&#39;at', 'Sabtu'];
	let h = d.getDay();
	let b = d.getMonth();
	let t = d.getFullYear();

	document.getElementById('thisDate').innerHTML = days[h] + ', ' + tgl + ' ' + months[b] + ' ' + t;
// let a = document.querySelector('li a');

// a.addEventListener('click',function (e) {
//   console.log(document.body.scrollTo(0, 700));
  
// })
