import './styles/ws320.css';
import './styles/ws480.css';
import './styles/ws768.css';
import './styles/ws1200.css';

// import image from './assets/images/fantasy1280.jpg';

const addImage = document.querySelector('#addImage');
const form = document.querySelector('#form');
const setWidth = document.querySelector('#width');
const setHeight = document.querySelector('#height');
const gallery = document.querySelector('.Gallery-container');
const hideButtons = document.querySelector('.Hide-buttons');

const hide = document.getElementById('hide');
// const hideAll = document.getElementById('hideAll');

hide.addEventListener('click', () => {
  if(form.classList.contains('Form')) {
    form.classList.remove('Form');
  } else {
    form.classList.add('Form');
  }
})

// hideAll.addEventListener('click', () => {
//   console.log(addImage.parentNode.classList.contains('Flex'))
//   if(addImage.parentNode.classList.contains('Flex')) {
//     addImage.parentNode.classList.add('None');
//     hideButtons.classList.add('None')
//   } else {
//     addImage.parentNode.classList.add('Flex');
//   }
// })

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const galleryImageContainer = document.getElementsByClassName('Gallery-image-container');
  const nodeList = document.querySelectorAll('.Gallery-image-container');
  const width = setWidth.value;
  const height = setHeight.value;

  if (galleryImageContainer.length > 0) {
    const arrElements = [...nodeList];
    arrElements.forEach((item)=> {
      item.style.width = `${width}px`;
      item.style.height = `${height}px`;
    })
  }

  form.reset();
});

addImage.addEventListener('change', (e) => {
  e.preventDefault();
  const article = document.createElement('article');
  const div = document.createElement('div');
  div.className = 'Gallery-image-container';
  article.appendChild(div);
  const file = e.target.files[0];
  const bitMap = window.URL.createObjectURL(file);
  div.style.backgroundImage = `url('${bitMap}')`;
  article.className = 'Gallery-addImage-container';
  gallery.appendChild(article);
});
