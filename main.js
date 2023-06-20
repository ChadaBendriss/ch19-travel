let btn = document.querySelector('#load-more');
let nbr = 3;

 btn.onclick = () =>{
   let col = [...document.querySelectorAll('.container .box-container .box')];
   var i=0;
   for (i = nbr; i < nbr + 6; i++){
      col[i].style.display = 'inline-block';
   }
   nbr += 6;

   if(nbr > col.length || nbr==col.length){
      btn.style.display = 'none';
   }
} 

 const sr = ScrollReveal({
 duration:2500,
 delay:400,
 distance:"60px",
 reset:true
 


});
sr.reveal(".course-box");


