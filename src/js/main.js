import '../css/main.css'

const features = document.getElementById('features')
const pricing = document.getElementById('pricing')
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
  paragraphs[i].style.display = 'none'
  if (i - 1 < 0) {
    i = paragraphs.length - 1
  } else {
    i = i - 1
  }
  paragraphs[i].style.display = 'block'
}

right_arrow.onclick = function () {
  paragraphs[i].style.display = 'none'
  if (i + 1 >= paragraphs.length) {
    i = 0
  } else {
    i = i + 1
  }
  paragraphs[i].style.display = 'block'
}

let windowRation = window.devicePixelRatio*100;

// if (window.devicePixelRatio*100 > 250) {
//   document.querySelector('.features').style.flexDirection = 'column'
// } else if (window.devicePixelRatio*100 < 250) {
//   document.querySelector('.features').style.flexDirection = 'row'
// }
//
// window.addEventListener('resize', function(event){
//   if (window.devicePixelRatio*100 > 250) {
//     document.querySelector('.features').style.flexDirection = 'column'
//   } else if (window.devicePixelRatio*100 < 250) {
//     document.querySelector('.features').style.flexDirection = 'row'
//   }
// });

if (window.devicePixelRatio*100 > 250) {
  document.querySelector('.features').style.flexDirection = 'column'
} else if (window.devicePixelRatio*100 < 250) {
  document.querySelector('.features').style.flexDirection = 'row'
}

window.addEventListener('resize', function(event){
  if (window.devicePixelRatio*100 > 250) {
    document.querySelector('.features').style.flexDirection = 'column'
  } else if (window.devicePixelRatio*100 < 250) {
    document.querySelector('.features').style.flexDirection = 'row'
  }
});


