// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);

const list = document.querySelector(`.gallery`);
list.style.listStyle = `none`; 


function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => 
    `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
        </a>
    </li>
    `).join('')
}
list.insertAdjacentHTML('beforeend', createMarkup(galleryItems)); // До list через виклик createMarkup додаємо список що створений обробкою galleryItems за шаблоном 
//list.addEventListener(`click`, handlerClick) //Додаємо прослуховування на клік на список gallery

new SimpleLightbox('.gallery a', { 
    captionsData: `alt`, // опис картинки
    captionDelay: 250, // затримка показу в мс
 }); // SimpleLightbox все робить сам, але на картинках gallery має бути лінк href="${original}
