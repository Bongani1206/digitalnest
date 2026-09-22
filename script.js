const products=[
{id:1,name:"AI Prompt Vault",category:"AI Tools",price:149,icon:"🤖",tag:"BESTSELLER",desc:"250+ prompts for content, business, research and productivity."},
{id:2,name:"Small Business Starter Kit",category:"Business",price:199,icon:"💼",tag:"POPULAR",desc:"Practical checklists, planners and templates to organize your business."},
{id:3,name:"Social Media Content Planner",category:"Templates",price:99,icon:"📱",tag:"NEW",desc:"Plan a month of posts, captions and content ideas in one place."},
{id:4,name:"ChatGPT Business Prompts",category:"AI Tools",price:129,icon:"✨",tag:"AI",desc:"Ready-to-use prompts for marketing, customer service and admin."},
{id:5,name:"Ultimate Productivity Pack",category:"Productivity",price:119,icon:"⚡",tag:"VALUE",desc:"Daily planner, weekly review, habit tracker and focus sheets."},
{id:6,name:"Digital Income Guide",category:"eBooks",price:89,icon:"📚",tag:"GUIDE",desc:"A practical introduction to building income with digital products."},
{id:7,name:"Canva Content Bundle",category:"Templates",price:159,icon:"🎨",tag:"CREATOR",desc:"Editable social graphics and content planning resources."},
{id:8,name:"AI Freelancer Toolkit",category:"Business",price:179,icon:"🚀",tag:"NEW",desc:"Client workflow templates, prompts and proposal resources."}
];
let cart=[];
const money=n=>"R"+n.toFixed(0);
function renderProducts(list=products){
 document.getElementById("products").innerHTML=list.map(p=>`<article class="product">
 <div class="product-art"><span class="tag">${p.tag}</span>${p.icon}</div>
 <div class="product-info"><h3>${p.name}</h3><p>${p.desc}</p>
 <div class="price-row"><span class="price">${money(p.price)}</span><button class="add" onclick="addToCart(${p.id})">+ Add</button></div></div></article>`).join("");
}
function filterProducts(cat){
 document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));
 const list=cat==="All"?products:products.filter(p=>p.category===cat);
 renderProducts(list);
 document.getElementById("shop").scrollIntoView({behavior:"smooth"});
}
function addToCart(id){
 const p=products.find(x=>x.id===id); cart.push(p); updateCart(); showToast(p.name+" added to cart");
}
function updateCart(){
 document.getElementById("cartCount").textContent=cart.length;
 document.getElementById("cartItems").innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-item"><span>${p.icon}</span><div><b>${p.name}</b><small style="display:block;color:#777">${p.category}</small></div><div>${money(p.price)}<button style="display:block;border:0;background:none;color:#999;cursor:pointer" onclick="removeCart(${i})">Remove</button></div></div>`).join(""):"<p style='color:#777'>Your cart is empty. Add a product to get started.</p>";
 document.getElementById("cartTotal").textContent=money(cart.reduce((s,p)=>s+p.price,0));
}
function removeCart(i){cart.splice(i,1);updateCart()}
function toggleCart(){document.getElementById("cart").classList.toggle("open");document.getElementById("overlay").classList.toggle("show")}
function checkout(){if(!cart.length)return showToast("Add a product first");showToast("Demo checkout — connect your payment provider to go live.")}
function subscribe(e){e.preventDefault();showToast("Thanks! You're on the DigitalNest list.");e.target.reset()}
function showToast(t){const x=document.getElementById("toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),2600)}
renderProducts();updateCart();
