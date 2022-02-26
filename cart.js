
let item=document.getElementById("items");
let buttonarea= document.getElementById("button");
let items=JSON.parse( localStorage.getItem("cart"));
let cartArr=[];
cartArr.push(items);

if(cartArr.length==0){
    item.innerHTML=`Your Carrt is Empty`;
}

else{

    let totalPrice=0;
    cartArr.forEach((element) => {

        totalPrice+=carrArr.price;

        let div= document.createElement("div");

        let image=document.createElement("img");
        image.src=element.image;
    
        let name= document.createElement("p");
        name.textContent=element.name;

        let price= document.createElement("p");
        price.textContent=element.price;

        let rem= document.createElement("p");
        rem.textContent="Remove";
        
        div.append(image,name,price);

        item.append(div);
    });

   let heading= document.createElement("h3");
   heading.textContent="Add Oder Note";

   let note= document.createElement("p");
   note.textContent="Shipping & taxes calculated at checkout";

   let button=document.createElement("button");
   button.textContent=`Checkout . ₹${totalPrice}`;
   button.addEventListener("click", go())

}
function go(event){
    event.preventDefault();
   window.location.href="information.html";
}