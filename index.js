var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://fakestoreapi.com/products", true);
xmlhttp.send();

xmlhttp.onreadystatechange = function () {
  if (this.readyState === 4) {
    // 4 = "DONE" state "	The request has been processed and the response is ready"
    if (this.status === 200) {
      //200 = "OK" state "	The request was successfully received, understood, and accepted"
      var data = JSON.parse(xmlhttp.responseText);
      console.log(data);

      for (i = 0; i < data.length; i++) {
        var product = document.getElementById("product");
        var heading = document.getElementById("heading-0");
        if (data[i].category === "men's clothing") {
          heading.innerHTML = data[i].category;
          var div = document.createElement("div");
          div.setAttribute("id", "product");
          var aTag = document.createElement("a");
          aTag.setAttribute("href", "detail.html?id=" + data[i].id);
          div.setAttribute("class", "product_item col-sm-3 mt-3 mb-3");
          var img = document.createElement("img");
          img.setAttribute("class", "border");
          img.setAttribute("src", data[i].image);
          aTag.appendChild(img);
          div.appendChild(aTag);
          product.appendChild(div);
        }

        var product_1 = document.getElementById("product-1");
        var heading_1 = document.getElementById("heading-1");
        // for (i = 0; i < data.length; i++) {
        if (data[i].category === "jewelery") {
          heading_1.innerHTML = data[i].category;
          var div = document.createElement("div");
          div.setAttribute("id", "product");
          var aTag = document.createElement("a");
          aTag.setAttribute("href", "detail.html?id=" + data[i].id);
          div.setAttribute("class", "product_item col-sm-3 mt-3 mb-3");
          var img = document.createElement("img");
          img.setAttribute("class", "border");
          img.setAttribute("src", data[i].image);
          aTag.appendChild(img);
          div.appendChild(aTag);
          product_1.appendChild(div);
        }

        var product_2 = document.getElementById("product-2");
        var heading_2 = document.getElementById("heading-2");
        // for (i = 0; i < data.length; i++) {
        if (data[i].category === "electronics") {
          heading_2.innerHTML = data[i].category;
          var div = document.createElement("div");
          div.setAttribute("id", "product");
          var aTag = document.createElement("a");
          aTag.setAttribute("href", "detail.html?id=" + data[i].id);
          div.setAttribute("class", "product_item col-sm-3 mt-3 mb-3");
          var img = document.createElement("img");
          img.setAttribute("class", "border");
          img.setAttribute("src", data[i].image);
          aTag.appendChild(img);
          div.appendChild(aTag);
          product_2.appendChild(div);
        }

        var product_3 = document.getElementById("product-3");
        var heading_3 = document.getElementById("heading-3");
        // for (i = 0; i < data.length; i++) {
        if (data[i].category === "women's clothing") {
          heading_3.innerHTML = data[i].category;
          var div = document.createElement("div");
          div.setAttribute("id", "product");
          var aTag = document.createElement("a");
          aTag.setAttribute("href", "detail.html?id=" + data[i].id);
          div.setAttribute("class", "product_item col-sm-3 mt-3 mb-3");
          var img = document.createElement("img");
          img.setAttribute("class", "border");
          img.setAttribute("src", data[i].image);
          aTag.appendChild(img);
          div.appendChild(aTag);
          product_3.appendChild(div);
        }
      }
    } else {
      //if  this.state != 200 	The server failed to find anything matching the request"
      alert("Error: " + this.status);
    }
  }
};

function home() {
  window.location.href = "index.html";
  //  alert("heelo");
}

function mens() {
  // alert("data1");
  var product = document.getElementById("product");
  var product_1 = document.getElementById("product-1");
  var product_2 = document.getElementById("product-2");
  var product_3 = document.getElementById("product-3");

  product.style.display = "flex";
  product_1.style.display = "none";
  product_2.style.display = "none";
  product_3.style.display = "none";
}
function jewelery() {
  var product = document.getElementById("product");
  var product_1 = document.getElementById("product-1");
  var product_2 = document.getElementById("product-2");
  var product_3 = document.getElementById("product-3");

  product.style.display = "none";
  product_1.style.display = "flex";
  product_2.style.display = "none";
  product_3.style.display = "none";
}
function electronics() {
  var product = document.getElementById("product");
  var product_1 = document.getElementById("product-1");
  var product_2 = document.getElementById("product-2");
  var product_3 = document.getElementById("product-3");

  product.style.display = "none";
  product_1.style.display = "none";
  product_2.style.display = "flex";
  product_3.style.display = "none";
}
function women() {
  var product = document.getElementById("product");
  var product_1 = document.getElementById("product-1");
  var product_2 = document.getElementById("product-2");
  var product_3 = document.getElementById("product-3");

  product.style.display = "none";
  product_1.style.display = "none";
  product_2.style.display = "none";
  product_3.style.display = "flex";
}

function like() {
  var like = document.getElementById("like");
  var number = document.getElementById("number");

  like.innerHTML = `<button class="heart"  id="unlike" onclick="unlike()">
                <i class="fa fa-heart" style="font-size: 24px"></i>
              </button>`;
  number.innerHTML = "1";
}

// search functionality
var search_text = document.getElementById("search_text");
search_text.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    search(e);
  }
});

function search(e) {
  // console.log(data);
  console.log(search_text.value);
}
