const galleryElement = document.querySelector(".gallery")
console.log(galleryElement)
let x = 5
document.addEventListener("keydown", (e) => {
galleryElement.style.transform = `translateX(${x}px)`
if(e.code === 'ArrowRight'){
    x += 5
      } else if (e.code === 'ArrowLeft'){
        x -= 5
      }
})
