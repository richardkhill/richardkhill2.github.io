var shoppingCart = []; //This holds all of the items in the shopping cart

function displayShoppingCart(){
    var orderedProductsTblBody=document.getElementById("orderedProductsTblBody");
    while(orderedProductsTblBody.rows.length>0) { //Checks that all items in the basket previously have been cleared
        orderedProductsTblBody.deleteRow(0);
    }
    var cart_total_price=0; //This holds the total price of all the items in the cart
    for(var product in shoppingCart){
        var row=orderedProductsTblBody.insertRow();
        var cellName = row.insertCell(0); //New cells created to display Name, Description and Price
        var cellDescription = row.insertCell(1);
        var cellPrice = row.insertCell(2);
        cellPrice.align="right";
        cellName.innerHTML = shoppingCart[product].Name;
        cellDescription.innerHTML = shoppingCart[product].Description;
        cellPrice.innerHTML = shoppingCart[product].Price;
        cart_total_price+=shoppingCart[product].Price;
    }
    document.getElementById("cart_total").innerHTML=cart_total_price; //This displays the total price of all of the items in the shopping cart
}

function AddtoCart(name,description,price){
	var singleProduct = {};
	singleProduct.Name=name;
	singleProduct.Description=description;
	singleProduct.Price=price;
	shoppingCart.push(singleProduct);
    displayShoppingCart(); //Cart is updated after an item is added to the cart
}  
	
function Removelastitem(){
	shoppingCart.length = shoppingCart.length - 1; //Removes last item in array
	displayShoppingCart(); //Cart is updated after an item is added to the cart
}