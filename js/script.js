let leftArrow = document.querySelector('.arrows').children[0];
let rightArrow = document.querySelector('.arrows').children[1];
leftArrow.addEventListener('click', () =>{
  let imgs = document.querySelector(".images");
  imgs.lastElementChild.style.width = "0px";
  let goalImg = imgs.children[4];
  setTimeout(() => {
    imgs.insertBefore(goalImg,imgs.firstChild);
  }, 200);
  setTimeout(() => {
    imgs.children[0].style.width = "78%";
  }, 400);
 
  

  
  
 
  
 

})

rightArrow.addEventListener('click', () => {
  let imgs = document.querySelector(".images");
  imgs.firstElementChild.style.width = '0px'
  setTimeout(() => {
    imgs.appendChild(imgs.children[0]);
  }, 200);
  setTimeout(() => {
    imgs.children[4].style.width = "78%";
  }, 400);
})

