window.onload = function()
{
    const queryString = window.location.search;
console.log(queryString);
// ?product=shirt&color=blue&newuser&size=m
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
// console.log(product);

var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://fakestoreapi.com/products/" + id, true);
xmlhttp.send();

xmlhttp.onreadystatechange = function () {
  if (this.readyState === 4) {
    // 4 = "DONE" state "	The request has been processed and the response is ready"
    if (this.status === 200) {
      //200 = "OK" state "	The request was successfully received, understood, and accepted"
      var data = JSON.parse(xmlhttp.responseText);
      console.log(data);
var details_image = document.getElementById('details_image');
 var img = document.createElement("img");
          img.setAttribute("class", "border");
         
         
          img.setAttribute("src", data.image);
          details_image.appendChild(img);

      var title = document.getElementById('title');
      title.innerHTML = data.title;
    //   console(data.title);
    var description = document.getElementById('description');
      description.innerHTML = data.description;
     var rating = document.getElementById('rating');
      rating.innerHTML = data.rating.rate;
      var price = document.getElementById('price');
      price.innerHTML = "₹ " +  data.price;
     var rate = document.getElementById('rate');
      rate.innerHTML = "(₹ " +  data.price + ")";




          } else {
      //if  this.state != 200 	The server failed to find anything matching the request"
      alert("Error: " + this.status);
    }
  }
};

};


