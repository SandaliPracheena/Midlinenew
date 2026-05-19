const buttons = document.querySelectorAll('.buy-btn');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const cartIcon = document.getElementById('cartIcon');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');

let count = 0;
let total = 0;

const products = [
  {
    name:'Oversized T-Shirt',
    price:4500,
    image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name:'Urban Jacket',
    price:8900,
    image:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop'
  }
];

buttons.forEach((button,index)=>{
  button.addEventListener('click',()=>{

    count++;
    cartCount.textContent = count;

    const item = document.createElement('div');
    item.classList.add('cart-item');

    item.innerHTML = `
      <img src="${products[index].image}">
      <div>
        <h4>${products[index].name}</h4>
        <p>LKR ${products[index].price}</p>
      </div>
    `;

    cartItems.appendChild(item);

    total += products[index].price;
    cartTotal.textContent = `Total: LKR ${total}`;

  });
});

cartIcon.addEventListener('click',()=>{
  cartSidebar.classList.toggle('active');
});
