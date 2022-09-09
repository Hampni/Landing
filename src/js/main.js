import '../css/main.css'

const features = document.getElementById('features')
const pricing = document.getElementById('pricing')
const carousel = document.querySelector('.paragraph')
const left_arrow = document.getElementById('left_arrow')
const right_arrow = document.getElementById('right_arrow')

features.addEventListener('click', function (e) {
  e.preventDefault()
  document.getElementById('features_list').scrollIntoView({ behavior: 'smooth', block: 'center' })
})

pricing.addEventListener('click', function (e) {
  e.preventDefault()
  document.getElementById('price').scrollIntoView({ behavior: 'smooth', block: 'center' })
})

let paragraphs = document.querySelectorAll('.parag')
let i = 0
paragraphs[i].style.display = 'block'

left_arrow.onclick = function () {
  carousel.style.opacity = '0'
  setTimeout(function () {
    paragraphs[i].style.display = 'none'
    if (i - 1 < 0) {
      i = paragraphs.length - 1
    } else {
      i = i - 1
    }
    paragraphs[i].style.display = 'block'
    carousel.style.opacity = '100%'
  }, 600);

}

right_arrow.onclick = function () {
  carousel.style.opacity = '0'
  setTimeout(function () {
    paragraphs[i].style.display = 'none'
    if (i + 1 >= paragraphs.length) {
      i = 0
    } else {
      i = i + 1
    }
    paragraphs[i].style.display = 'block'
    carousel.style.opacity = '100%'
  }, 500);
}

// When the user clicks on the button,
// toggle between hiding and showing the dropdown content

document.querySelector('.dropbtn').addEventListener('click', function () {
  document.getElementById('myDropdown').classList.toggle('show')
})

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {

    let dropdowns = document.getElementsByClassName('dropdown-content')
    let i
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
}

