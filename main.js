//component

  let container = document.createElement('div')
  let sectionContainer = document.createElement('div')
  container.classList.add('container')
  sectionContainer.classList.add('container')
  container.style.cssText = 'width:1170px;padding:0 15px;margin:auto;';
  sectionContainer.style.cssText = 'width:1170px;padding:0 15px;margin:auto;';
//component

// Header

  // Declare Elements
  let header = document.createElement('header');
  let nav = document.createElement('nav');
  let logo = document.createElement('h2');
  let links = document.createElement('ul');
  let linkItem = document.createElement('li')
  let linkItemA = document.createElement('a')

  // Append Elements To Body
  document.body.prepend(header)
  header.appendChild(container)
  container.appendChild(nav)
  nav.appendChild(logo)
  nav.appendChild(links)
  // Append Text To Elements
  logo.textContent = 'Shop'
  let linkItems = ['Cars','Technology','Anime_Girls','Shoes','Pets'] // List Items 
  for(let i = 0; i < linkItems.length; i++){
    // Clone Items => Can't Put Same Item Several Times
    let clonedItem = linkItem.cloneNode('true') // True Mean Clone Every Thing Inside
    let clonedItemA = linkItemA.cloneNode('true')
    links.appendChild(clonedItem)
    clonedItem.appendChild(clonedItemA)
    clonedItemA.textContent = linkItems[i] // Link Item Text = List Item Of Our Array
  }
  // Add Cart Icon
  let cart = document.createElement('li')
  let icon = document.querySelector('li i')
  // Short Hand To Add Elements With Style
  cart.innerHTML = '<i class="fa-solid fa-cart-arrow-down" style="color:#fff;font-size:35px;position:absolute;top:50%;transform: translateY(-50%);margin-left:10px;cursor:pointer;";></i>'
  links.appendChild(cart)
  // Select Elements 
  let listItems = document.querySelectorAll('header nav ul li')
  let listItemsA = document.querySelectorAll('header nav ul li a')
  let lastItem = document.querySelector('header nav ul li:last-child')
  // Styling
  document.body.style.cssText = 'margin:0;padding:0;font-family:sans-serif;';
  header.style.cssText = 'background-color:#0098ff;font-size:1.3rem';
  nav.style.cssText = 'display:flex;align-items:center;justify-content:space-between;';
  logo.style.cssText = 'color:#fff;';
  links.style.cssText = 'position:relative;';
  listItems.forEach(e => { // For Each Loop Cuz We Target All Elements Not 1 Element
    e.style.cssText = 'display:inline-block;margin-left:10px';
  })
  listItemsA.forEach(e => {
    e.style.cssText = 'color:#fff; text-decoration:none;padding:5px 10px; display:inline-block;border-radius:5px;cursor:pointer;letter-spacing:1px;font-size:20px';
  })
  lastItem.style.cssText = 'display:inline-block;margin-left:30px;'
// Header

// Main Section

  // Declare Elements
  let section = document.createElement('section')
  let products = document.createElement('div')
  let product = document.createElement('div')
  let image = document.createElement('div')
  let info = document.createElement('div')
  let price = document.createElement('div')
  let text = document.createElement('h2')
  let btn = document.createElement('button')

  // Add Class To Elements
  products.classList.add('products')
  product.classList.add('product')
  image.classList.add('image')
  info.classList.add('info')
  price.classList.add('price')

  // Append Elements To Body
  header.after(section)
  section.appendChild(sectionContainer)
  sectionContainer.appendChild(products)
  products.appendChild(product)
  product.appendChild(image)
  product.appendChild(price)
  product.appendChild(info)
  info.appendChild(text)
  info.appendChild(btn)
  // Add Text To Elements
  btn.innerHTML = 'Buy Now';
  let productsItems = ['Anime Girl', 'Routine', 'Routine', 'If Condition', 'Life Style', 'Life Style']
  let productsPrices = ['100 Ton Of Gold $$$', '100$', '100$', '150$', '200$', '200$']
  for(let i = 0; i < productsItems.length - 1; i++){
    document.querySelector('.product .info h2').innerHTML = productsItems[i]
    document.querySelector('.product .price').innerHTML = productsPrices[i]
    image.innerHTML = `<img src="./Media/${i + 1}.jpg" alt="Anime">`;
    let clonedProduct = product.cloneNode(true)
    products.appendChild(clonedProduct)
  }

  // Styling

  section.style.cssText = 'padding:50px 0;background-color:#607d8b';
  products.style.cssText = 'display:grid; grid-template-columns:1fr 1fr 1fr;gap:20px';
  let productBox = document.querySelectorAll(".product")
  productBox.forEach(e =>{
    e.style.cssText = 'background-color:#fff;overflow:hidden;border-radius:10px;';
  })
  image.style.cssText = '';
  let img = document.querySelectorAll('.product .image img')
  img.forEach(e =>{
    e.style.cssText = 'max-width:100%';
  })
  let infoBox = document.querySelectorAll('.product .info')
  infoBox.forEach(e =>{
    e.style.cssText = 'display:flex;align-items:center;justify-content:space-between;padding:0 10px 10px 10px';
  })
  let textBox = document.querySelectorAll('.product .info h2')
  textBox.forEach(e =>{
    e.style.cssText = 'color:#333;';
  })
  let btnBox = document.querySelectorAll('.product .info button')
  btnBox.forEach(e =>{
    e.style.cssText = 'padding:5px 10px;border:none;outline:none;border-radius:6px;background-color:#0098ff; color:#fff;font-weight:bold;cursor:pointer';
  })
  let priceBox = document.querySelectorAll('.product .price')
  priceBox.forEach(e =>{
    e.style.cssText = 'padding:10px;margin:0;font-weight:bold;border-bottom:1px solid #ccc';
  })

// Main Section

// Adding Products To Cart

let cartBox = document.createElement('div');
cartBox.classList.add('cart-box')
document.body.prepend(cartBox);
cartBox.style.cssText = 'background-color:#f0f0f0;border-radius:10px;position:absolute;right:18%;top:9%;padding:20px;display:none;grid-template-colmuns:1fr;gap:20px;';

btnBox.forEach(e =>{
  e.addEventListener('click',a =>{
    let cartItem = e.parentElement.parentElement.cloneNode(true)
    cartBox.appendChild(cartItem)
    let imgBox = document.querySelectorAll('.cart-box .image')
    imgBox.forEach(e =>{
      e.style.cssText = 'width:300px';
    })
  })
})
let imgCart = document.querySelectorAll('.cart-box img')
imgCart.forEach(e =>{
  e.style.cssText = 'max-width:100%';
})
cart.addEventListener('click', e=>{
  cartBox.classList.toggle('active')
  let active = document.querySelector('.active');
  active.style.cssText = 'background-color:#f0f0f0;border-radius:10px;position:absolute;right:18%;top:9%;padding:20px;display:none;grid-template-colmuns:1fr;gap:20px;';
})

// Adding Products To Cart