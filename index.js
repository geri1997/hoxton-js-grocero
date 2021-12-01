
const state={
  products:[
    {
      id: 'assets/icons/001-beetroot.svg',
      name:'beetroot',
      price:0.35
    },
    {
      id:'assets/icons/002-carrot.svg',
      name:'carrot',
      price: 0.55
    },
    {
      id:'assets/icons/003-apple.svg',
      name:'apple',
      price:0.85
    },
    {
      id:'assets/icons/004-apricot.svg',
      name:'apricot',
      price:0.15
    },
    {
      id:'assets/icons/005-avocado.svg',
      name:'avocado',
      price:0.45
    },
    {
      id:'assets/icons/006-bananas.svg',
      name:'bananas',
      price:0.35
    },
    {
      id:'assets/icons/007-bell-pepper.svg',
      name:'bell-pepper',
      price:0.6
    },
    {
      id:'assets/icons/008-berry.svg',
      name:'berry',
      price:0.3
    },
    {
      id:'assets/icons/009-blueberry.svg',
      name:'blueberry',
      price:0.75
    },
    {
      id:'assets/icons/010-eggplant.svg',
      name:'eggplant',
      price:0.95
    }

  ],
  productsInCart:[

  ]
}

const storeItemList = document.querySelector('.store--item-list')
function createStoreProduct(product){
  //create li
  const storeProductLi = document.createElement('li')
  //create storeIcon div
  const storeIconDiv = document.createElement('div')
  storeIconDiv.setAttribute('class','store--item-icon')
  //Create product image
  const productImage = document.createElement('img')
  productImage.setAttribute('src', product.id)
  productImage.setAttribute('alt', product.name)
  //Create Add to cart button
  const addToCartButton = document.createElement('button')
  addToCartButton.textContent = 'Add to cart'
  //Appending
  storeItemList.append(productLi)
  storeProductLi.append(storeIconDiv,addToCartButton)
  storeIconDiv.append(productImage)
}
function createCartItems(product){
  //create li
  const cartProductLi = document.createElement('li')
  //Create product image
  const cartProductImage = document.createElement('img')
  cartProductImage.setAttribute('src', product.id)
  cartProductImage.setAttribute('alt', product.name)
  cartProductImage.setAttribute('class','cart--item-icon')
}
function renderStoreItems(){
  for(let product of state.products){
    createStoreProduct(product)
  }
}




renderStoreItems()