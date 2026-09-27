const products=[
  {
    "id": 1,
    "name": "AI Content Prompt Kit",
    "category": "AI Tools",
    "price": 99,
    "icon": "🤖",
    "tag": "PDF",
    "desc": "Draft useful content from one clear brief"
  },
  {
    "id": 2,
    "name": "AI Customer Support Prompt Kit",
    "category": "AI Tools",
    "price": 99,
    "icon": "🤖",
    "tag": "PDF",
    "desc": "Write faster, clearer replies without losing empathy"
  },
  {
    "id": 3,
    "name": "AI Research and Learning Prompts",
    "category": "AI Tools",
    "price": 89,
    "icon": "🤖",
    "tag": "PDF",
    "desc": "Turn a question into a careful learning workflow"
  },
  {
    "id": 4,
    "name": "AI Small Business Prompt Kit",
    "category": "AI Tools",
    "price": 119,
    "icon": "🤖",
    "tag": "PDF",
    "desc": "Plan offers, operations, and customer messages"
  },
  {
    "id": 5,
    "name": "AI Freelancer Prompt Kit",
    "category": "AI Tools",
    "price": 109,
    "icon": "🤖",
    "tag": "PDF",
    "desc": "Prepare client work with a repeatable workflow"
  },
  {
    "id": 6,
    "name": "AI Productivity Prompt Kit",
    "category": "AI Tools",
    "price": 89,
    "icon": "🤖",
    "tag": "PDF",
    "desc": "Use AI to plan, prioritize, and review work"
  },
  {
    "id": 7,
    "name": "Business Idea Validation Workbook",
    "category": "Business",
    "price": 129,
    "icon": "💼",
    "tag": "PDF",
    "desc": "Test a business idea before investing heavily"
  },
  {
    "id": 8,
    "name": "Simple Business Plan Workbook",
    "category": "Business",
    "price": 149,
    "icon": "💼",
    "tag": "PDF",
    "desc": "Build a concise working plan"
  },
  {
    "id": 9,
    "name": "Pricing and Profit Planner",
    "category": "Business",
    "price": 119,
    "icon": "💼",
    "tag": "PDF",
    "desc": "Estimate costs and choose a sustainable price"
  },
  {
    "id": 10,
    "name": "Customer Discovery Interview Kit",
    "category": "Business",
    "price": 99,
    "icon": "💼",
    "tag": "PDF",
    "desc": "Have more useful conversations with potential customers"
  },
  {
    "id": 11,
    "name": "Launch Checklist and Timeline",
    "category": "Business",
    "price": 109,
    "icon": "💼",
    "tag": "PDF",
    "desc": "Organize a small digital product launch"
  },
  {
    "id": 12,
    "name": "Client Onboarding Toolkit",
    "category": "Business",
    "price": 119,
    "icon": "💼",
    "tag": "PDF",
    "desc": "Start client work with clear expectations"
  },
  {
    "id": 13,
    "name": "Social Media Calendar Templates",
    "category": "Templates",
    "price": 89,
    "icon": "📄",
    "tag": "PDF",
    "desc": "Plan four weeks of focused content"
  },
  {
    "id": 14,
    "name": "Email Newsletter Templates",
    "category": "Templates",
    "price": 89,
    "icon": "📄",
    "tag": "PDF",
    "desc": "Draft useful emails with clear calls to action"
  },
  {
    "id": 15,
    "name": "Digital Product Sales Page Kit",
    "category": "Templates",
    "price": 109,
    "icon": "📄",
    "tag": "PDF",
    "desc": "Explain a product clearly and honestly"
  },
  {
    "id": 16,
    "name": "Proposal and Quote Templates",
    "category": "Templates",
    "price": 119,
    "icon": "📄",
    "tag": "PDF",
    "desc": "Scope work and present a clear offer"
  },
  {
    "id": 17,
    "name": "Meeting and Decision Templates",
    "category": "Templates",
    "price": 79,
    "icon": "📄",
    "tag": "PDF",
    "desc": "Make meetings and decisions easier to follow"
  },
  {
    "id": 18,
    "name": "Canva Content Brief Pack",
    "category": "Templates",
    "price": 89,
    "icon": "📄",
    "tag": "PDF",
    "desc": "Plan visual assets before opening a design tool"
  },
  {
    "id": 19,
    "name": "Weekly Focus Planner",
    "category": "Productivity",
    "price": 79,
    "icon": "⚡",
    "tag": "PDF",
    "desc": "Turn priorities into a realistic week"
  },
  {
    "id": 20,
    "name": "Daily Execution Planner",
    "category": "Productivity",
    "price": 69,
    "icon": "⚡",
    "tag": "PDF",
    "desc": "Plan one useful day at a time"
  },
  {
    "id": 21,
    "name": "Habit and Goal Tracker",
    "category": "Productivity",
    "price": 79,
    "icon": "⚡",
    "tag": "PDF",
    "desc": "Connect a goal to a repeatable habit"
  },
  {
    "id": 22,
    "name": "Project Milestone Planner",
    "category": "Productivity",
    "price": 99,
    "icon": "⚡",
    "tag": "PDF",
    "desc": "Break a project into observable milestones"
  },
  {
    "id": 23,
    "name": "Digital Declutter Workbook",
    "category": "Productivity",
    "price": 69,
    "icon": "⚡",
    "tag": "PDF",
    "desc": "Create a manageable file and inbox system"
  },
  {
    "id": 24,
    "name": "Study Session Planner",
    "category": "Productivity",
    "price": 69,
    "icon": "⚡",
    "tag": "PDF",
    "desc": "Study with retrieval and spaced review"
  },
  {
    "id": 25,
    "name": "Start Selling Digital Products",
    "category": "eBooks",
    "price": 149,
    "icon": "📚",
    "tag": "PDF",
    "desc": "A practical guide from idea to first launch"
  },
  {
    "id": 26,
    "name": "Practical AI for Everyday Work",
    "category": "eBooks",
    "price": 129,
    "icon": "📚",
    "tag": "PDF",
    "desc": "Use AI carefully for routine work"
  },
  {
    "id": 27,
    "name": "A Beginner Guide to Content Planning",
    "category": "eBooks",
    "price": 119,
    "icon": "📚",
    "tag": "PDF",
    "desc": "Create a repeatable content process"
  },
  {
    "id": 28,
    "name": "The Solo Business Operations Guide",
    "category": "eBooks",
    "price": 139,
    "icon": "📚",
    "tag": "PDF",
    "desc": "Document the work behind a small business"
  },
  {
    "id": 29,
    "name": "Freelance Client Workflow Guide",
    "category": "eBooks",
    "price": 129,
    "icon": "📚",
    "tag": "PDF",
    "desc": "Move from enquiry to handover with confidence"
  },
  {
    "id": 30,
    "name": "Digital Income Reality Check",
    "category": "eBooks",
    "price": 99,
    "icon": "📚",
    "tag": "PDF",
    "desc": "Evaluate digital income ideas with realistic expectations"
  }
];
let cart=[];
// Set this to a trusted HTTPS checkout service after the PayFast integration is deployed.
// The service must calculate prices from its own catalogue and return { redirectUrl }.
const checkoutApiUrl="";
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
 const p=products.find(x=>x.id===id); if(cart.some(x=>x.id===id))return showToast(p.name+" is already in your cart"); cart.push(p); updateCart(); showToast(p.name+" added to cart");
}
function updateCart(){
 document.getElementById("cartCount").textContent=cart.length;
 document.getElementById("cartItems").innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-item"><span>${p.icon}</span><div><b>${p.name}</b><small style="display:block;color:#777">${p.category}</small></div><div>${money(p.price)}<button style="display:block;border:0;background:none;color:#999;cursor:pointer" onclick="removeCart(${i})">Remove</button></div></div>`).join(""):"<p style='color:#777'>Your cart is empty. Add a product to get started.</p>";
 document.getElementById("cartTotal").textContent=money(cart.reduce((s,p)=>s+p.price,0));
}
function removeCart(i){cart.splice(i,1);updateCart()}
function toggleCart(){document.getElementById("cart").classList.toggle("open");document.getElementById("overlay").classList.toggle("show")}
function checkout(){
 if(!cart.length)return showToast("Add a product first");
 document.getElementById("cart").classList.remove("open");
 document.getElementById("overlay").classList.remove("show");
 document.getElementById("checkoutSummary").innerHTML=cart.map(p=>`<div><span>${p.name}</span><b>${money(p.price)}</b></div>`).join("")+`<div class="checkout-grand-total"><span>Total</span><b>${money(cart.reduce((sum,p)=>sum+p.price,0))}</b></div>`;
 document.getElementById("checkoutStatus").textContent=checkoutApiUrl?"":"PayFast payments are being set up. Please check back soon.";
 document.getElementById("payButton").disabled=!checkoutApiUrl;
 document.getElementById("checkoutDialog").hidden=false;
 document.body.classList.add("checkout-open");
 document.getElementById("customerEmail").focus();
}
function closeCheckout(){document.getElementById("checkoutDialog").hidden=true;document.body.classList.remove("checkout-open");document.querySelector(".cart-btn").focus()}
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!document.getElementById("checkoutDialog").hidden)closeCheckout()});
async function submitCheckout(e){
 e.preventDefault();
 if(!checkoutApiUrl)return;
 const button=document.getElementById("payButton"),status=document.getElementById("checkoutStatus");
 button.disabled=true;status.textContent="Preparing your secure payment…";
 try{
  const response=await fetch(checkoutApiUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:document.getElementById("customerEmail").value,productIds:[...new Set(cart.map(p=>p.id))]})});
  if(!response.ok)throw new Error("Checkout is unavailable right now. Please try again later.");
  const data=await response.json();
  const url=new URL(data.redirectUrl);
  if(url.protocol!=="https:"||!(["www.payfast.co.za","sandbox.payfast.co.za"].includes(url.hostname)))throw new Error("The payment link could not be verified.");
  window.location.assign(url.href);
 }catch(error){status.textContent=error.message;button.disabled=false}
}
function subscribe(e){e.preventDefault();showToast("Thanks! You're on the DigitalNest list.");e.target.reset()}
function showToast(t){const x=document.getElementById("toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),2600)}
renderProducts();updateCart();
