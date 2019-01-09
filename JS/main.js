var Playlist = []; //Array that holds all the songs in the playlist

//This uses the same function as the store to add, display and remove songs from the playlist
function displayShoppingCart(){
    var orderedProductsTblBody=document.getElementById("orderedProductsTblBody");
    while(orderedProductsTblBody.rows.length>0) {
        orderedProductsTblBody.deleteRow(0);
    }
    var cart_total_price=0;
    for(var product in Playlist){
        var row=orderedProductsTblBody.insertRow();
        var cellName = row.insertCell(0);
        var cellDescription = row.insertCell(1);
        var cellPrice = row.insertCell(2);
        cellPrice.align="right";
        cellName.innerHTML = Playlist[product].Name;
    }
    document.getElementById("cart_total").innerHTML=cart_total_price;
}

function AddtoPlaylist(name,description,price){
	var singleProduct = {};
	singleProduct.Name=name;
	Playlist.push(singleProduct);
    displayShoppingCart();
}  
	
function Removelastitem(){ //This removes the last item in the array by minusing the array.length
	Playlist.length = Playlist.length - 1;
	displayShoppingCart();
}
	
function ClearPlaylist(){ //This clears the whole Playlist by setting the length of the array to 0
	Playlist.length = 0;
	displayShoppingCart();
}
