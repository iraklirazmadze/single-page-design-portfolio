let leftArrow = document.querySelector('.arrows').children[0];
let rightArrow = document.querySelector('.arrows').children[1];
let isMoving = false;
leftArrow.addEventListener('click', () =>{
  if(isMoving == true){
    return;
  }else{
    isMoving = true;
    let imgs = document.querySelector(".images");
    let goalImg = imgs.children[4];
    let newImg = document.createElement('img');
    newImg.style.width = '0px';
    newImg.src = document.querySelector(".images").children[4].src
    imgs.insertBefore(newImg,imgs.firstChild);
    setTimeout(() => {
      imgs.lastElementChild.style.width = "0px";
      imgs.firstElementChild.style.width = '78%';
    }, 10);
    setTimeout(() => {
      imgs.lastElementChild.remove();
      isMoving = false;
    }, 301);
  }
})

rightArrow.addEventListener('click', () =>{
  if(isMoving == true){
      return;
    }else{
      isMoving = true;
    let imgs = document.querySelector(".images");
    let goalImg = imgs.children[0];
    let newImg = document.createElement('img');
    newImg.style.width = '0px';
    newImg.src = document.querySelector(".images").children[0].src
    imgs.insertBefore(newImg,imgs.lastChild);
    setTimeout(() => {
      imgs.firstElementChild.style.width = "0px";
      newImg.style.width = '78%';
    }, 10);
    setTimeout(() => {
      imgs.firstElementChild.remove();
      isMoving =  false;
    }, 301);
  }
})