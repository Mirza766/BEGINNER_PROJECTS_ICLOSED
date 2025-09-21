import React from "react";
import { useContext } from "react";
import ShoppingContext from "../context/ShoppingContext";



function DisplayingData(){
const {addCart}=useContext(ShoppingContext);
console.log(addCart)


const Total = addCart.length;

const TotalPrice=addCart.reduce((sum,item)=>{
       const hasDiscount=item.quantity>=3;
       const total=item.price*item.quantity;
       const finalAmount=hasDiscount?total*0.9:total;
       return sum+finalAmount
},0)



    return (
        
<div style={{backgroundColor: "lightblue",
      padding: "8px",
        borderRadius: "8px",
        marginBottom: "8px"
}}>
    <p>You Have {Total} products in cart.</p>
   <p>
  <strong><span>Products</span>{" -------- "}<span>Quantity{" ------- "}</span><span>Price</span></strong>
</p>

    {addCart.map((cart)=>{

 
      const hasDiscount=cart.quantity>=3;
       const total=cart.price*cart.quantity;
       const finalAmount=hasDiscount?total*0.9:total;
return(
       <div key={cart.id} style={{ 
    backgroundColor: "light-blue", 
    padding: "8px", 
    borderRadius: "8px" 
  }} >

      <p >
  {cart.name} ------ {cart.quantity} =$ {finalAmount.toFixed(2)}
   {hasDiscount && <span style={{ color: "red" }}> (10% OFF)</span>}
</p>


</div>
   
)})}
<p style={{ fontWeight: "bold", marginTop: "10px", fontSize: "1.2rem" }}>
        Total Price: ${TotalPrice.toFixed(2)}
      </p>
</div>
    )
}
export default DisplayingData