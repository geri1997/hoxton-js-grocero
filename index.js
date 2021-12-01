
const state={
  products:[
    {
      id: 1,
      name:'beetroot',
      price:0.35
    },
    {
      id:2,
      name:'carrot',
      price: 0.55
    },
    {
      id:3,
      name:'apple',
      price:0.85
    },
    {
      id:4,
      name:'apricot',
      price:0.15
    },
    {
      id:5,
      name:'avocado',
      price:0.45
    },
    {
      id:6,
      name:'bananas',
      price:0.35
    },
    {
      id:07,
      name:'bell-pepper',
      price:0.6
    },
    {
      id:08,
      name:'berry',
      price:0.3
    },
    {
      id:09,
      name:'blueberry',
      price:0.75
    },
    {
      id:10,
      name:'eggplant',
      price:0.95
    }

  ],
  productsInCart:[

  ]
}
const storeItemList = document.querySelector('.store--item-list')
const cartItemList = document.querySelector('.cart--item-list')
const priceSpan = document.querySelector('.total-number')


function addToCart(product){
  for(let cartProduct of state.productsInCart){
    if(product.name===cartProduct.name){
      cartProduct.quantity++
      renderCartItems()
      return false
          }
  }
  state.productsInCart.push(product)
  product.quantity = 1;
}



function createStoreProduct(product){
  //create li
  const storeProductLi = document.createElement('li')
  //create storeIcon div
  const storeIconDiv = document.createElement('div')
  storeIconDiv.setAttribute('class','store--item-icon')
  //Create product image
  const productImage = document.createElement('img')
  productImage.setAttribute('src', `assets/icons/${product.id<10?'00':'0'}${product.id}-${product.name}.svg`)
  productImage.setAttribute('alt', product.name)
  //Create Add to cart button
  const addToCartButton = document.createElement('button')
  addToCartButton.textContent = 'Add to cart'
  //Appending
  storeItemList.append(storeProductLi)
  storeProductLi.append(storeIconDiv,addToCartButton)
  storeIconDiv.append(productImage)

  //Add to Cart Event listener
  addToCartButton.addEventListener('click',(e)=>{
    addToCart(product)
    renderCartItems()
  })


}
function createCartItems(product){
  //create li
  const cartProductLi = document.createElement('li')
  //Create product image
  const cartProductImage = document.createElement('img')
  cartProductImage.setAttribute('src', `assets/icons/${product.id<10?'00':'0'}${product.id}-${product.name}.svg`)
  cartProductImage.setAttribute('alt', product.name)
  cartProductImage.setAttribute('class','cart--item-icon')
  //Paragraph with product name
  const productNameP = document.createElement('p')
  productNameP.textContent = product.name
  //Remove button
  const removeButton = document.createElement('button')
  removeButton.className ='quantity-btn remove-btn center'
  removeButton.textContent = '-'
  //Create span which contains number of products
  const numberOfProductsSpan = document.createElement('span')
  numberOfProductsSpan.className='quantity-text center'
  numberOfProductsSpan.textContent = product.quantity
  //Add more Button
  const addQuantityButton = document.createElement('button')
  addQuantityButton.className = 'quantity-btn add-btn center'
  addQuantityButton.textContent = '+'
  //Append
  cartItemList.append(cartProductLi)
  cartProductLi.append(cartProductImage,productNameP,removeButton,numberOfProductsSpan,addQuantityButton)
  //Add quantity Event listener
  addQuantityButton.addEventListener('click',(e)=>{
    addToCart(product)
    renderCartItems()
  })
  removeButton.addEventListener('click',(e)=>{
      if(product.quantity===1){
        state.productsInCart = state.productsInCart.filter((product)=>{
          return product.quantity!==1
        }
        )
        renderCartItems()
      }else{
      product.quantity--
      renderCartItems()
     }
  })

}

function renderStoreItems(){
  for(let product of state.products){
    createStoreProduct(product)
  }
}
function renderCartItems(){
  cartItemList.innerHTML = ''
  let price = 0
  
  for(let product of state.productsInCart){
    createCartItems(product)
    price += product.quantity*product.price
  }
  priceSpan.textContent = `£${price.toFixed(2)}`
}


function init(){
  renderCartItems()
  renderStoreItems()
}
init()


