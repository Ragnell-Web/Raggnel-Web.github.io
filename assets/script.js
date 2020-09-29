$('li a').on('click',function (e) {
  
  let tujuan = $(this).attr('href');
  let elemenHref = $(tujuan);
  
  window.scrollTo(0, $(elemenHref).offset().top - 50);
  
  e.preventDefault();
  
  
})

// let a = document.querySelector('li a');

// a.addEventListener('click',function (e) {
//   console.log(document.body.scrollTo(0, 700));
  
// })
