const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

let list = ''
for (let i = 0; i < images.length; i += 1) {
  list += `<li><img src="${images[i].url}" alt="${images[i].alt}"></li>`
}
const gallery = document.querySelector('.gallery')
gallery.insertAdjacentHTML('afterbegin', list)
gallery.style.display = "flex"
gallery.style.flexDirection = "column"
gallery.style.alignItems = "center"
console.log(list)