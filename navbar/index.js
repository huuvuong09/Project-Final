let flag = localStorage.getItem("flag");
let email = localStorage.getItem("emailInput");

if (flag == 1) {
  document.getElementById("signin1").innerHTML = `
  <a  type="submit" onclick = loguot() class="log"> Log Out <i class="fa-solid fa-right-from-bracket"></i></a> 
  `;
  document.getElementById("login").innerHTML = `
  Hi, ${email}
 
  `;
  document.getElementById("span1").style.display = "inline";
  document.getElementsByClassName("fa-cart-shopping")[0].style.display =
    "inline";
}
function loguot() {
  console.log(loguot);
  localStorage.removeItem("flag");
  localStorage.removeItem("email");

  window.location.href = "../navbar/home.html";
}
// function randomId() {
//   return Math.floor(Math.random() * 100000);
// }
// let products = [
//   {
//     id: randomId(),
//     name: "Nike Air For 5",
//     description: "Giày thể thao ",
//     price: 315,
//     image: "./img/Air-Jordan-3-Retro-White-Cement-Reimagined-Product.avif",
//     count: 1,
//   },
//   {
//     id: randomId(),
//     name: "Nike Air For 1",
//     description: "Giày thể thao ",
//     price: 310,
//     image: "./img/Nike-Air-Max-1-86-Big-Bubble-Red.avif",
//     count: 1,
//   },
//   {
//     id: randomId(),
//     name: "Jordan 1",
//     description: "Giày thể thao ",
//     price: 210,
//     image: "./img/Nike-Air-Force-1-Low-SP-Tiffany-And-Co-Product.avif",
//     count: 1,
//   },
//   {
//     id: randomId(),
//     name: "Nike Air Max",
//     description: "Giày thể thao ",
//     price: 410,
//     image: "./img/Nike-Air-Force-1-Low-SP-Tiffany-And-Co-Product.avif",
//     count: 1,
//   },
//   {
//     id: randomId(),
//     name: "Jacket Black",
//     description: "Giày thể thao ",
//     price: 320,
//     image: "./img/Nike-x-Stussy-Striped-Wool-Jacket-Black.avif",
//     count: 1,
//   },
//   {
//     id: randomId(),
//     name: "Stussy x Levis",
//     description: "Giày thể thao ",
//     price: 345,
//     image:
//       "./img/Stussy-x-Levis-Embossed-Praglad-Trucker-Jacket-Stussy-Rugged-Blue.avif",
//     count: 1,
//   },
//   {
//     id: randomId(),
//     name: "Supreme Tee",
//     description: "Giày thể thao ",
//     price: 515,
//     image: "./img/Supreme-Tiffany-Co-Box-Logo-Tee-White.avif",
//     count: 1,
//   },
//   {
//     id: randomId(),
//     name: "Tifany Tee",
//     description: "Giày thể thao ",
//     price: 389,
//     image: "./img/Supreme-Tiffany-Co-Box-Logo-Tee-White.avif",
//     count: 1,
//   },
//   {
//     id: randomId(),
//     name: "Lego",
//     description: "Giày thể thao ",
//     price: 423,
//     image: "./img/LEGO.avif",
//     count: 1,
//   },
//   {
//     id: randomId(),
//     name: "Bearbrick",
//     description: "Giày thể thao ",
//     price: 213,
//     image: "./img/Bearbrick-2.avif",
//     count: 1,
//   },
//   {
//     id: randomId(),
//     name: "Bearbrick x Supreme",
//     description: "Giày thể thao ",
//     price: 455,
//     image: "./img/Bearbrick.avif",
//     count: 1,
//   },
//   {
//     id: randomId(),
//     name: "Bearbrick 1000%",
//     description: "Giày thể thao ",
//     price: 615,
//     image: "./img/Bearbrick1000.avif",
//     count: 1,
//   },
// ];
// localStorage.setItem("product", JSON.stringify(products));

let promotionCode = {
  A: 10,
  B: 20,
  C: 30,
  D: 40,
};

function renderProducts() {
  let product = JSON.parse(localStorage.getItem("product"));
  let result = "";
  for (i = 0; i < product.length; i++) {
    result += `
  
   <div class="products">
    <div class="img">
      <img src="${product[i].image}" alt="">
   <p>${product[i].name}</p> 
    
    <p>Lowest Ask</p>
     <b>${product[i].price}$</b>
    
      <p>14793 sold</p>
      <button onclick=addToCart("${product[i].id}")>Add to cart</button>
    
  </div>
  </div>

  `;
  }
  document.getElementById("container1").innerHTML = result;
}
renderProducts();
function addToCart(id) {
  let product = JSON.parse(localStorage.getItem("product"));
  let productsCart = JSON.parse(localStorage.getItem("productsCart"));
  let count = 0;
  if (productsCart == null) {
    productsCart = [];
    for (let index = 0; index < product.length; index++) {
      if (product[index].id == id) {
        productsCart.push(product[index]);
        productsCart[productsCart.length - 1].use = email;
        localStorage.setItem("productsCart", JSON.stringify(productsCart));
        // renderCount();
        ++count;
        break;
      }
    }
  } else {
    for (let index = 0; index < product.length; index++) {
      if (product[index].id == id) {
        let flag = true;
        console.log(flag);
        for (let i = 0; i < productsCart.length; i++) {
          if (productsCart[i].id == id && productsCart[i].use == email) {
            flag = false;
            break;
          } else {
            flag = true;
          }
        }
        if (!flag) {
          var x = document.getElementById("snackbar");
          x.className = "show";
          setTimeout(function () {
            x.className = x.className.replace("show", "");
          }, 3000);
          break;
        } else {
          productsCart.push(product[index]);
          productsCart[productsCart.length - 1].use = email;
          localStorage.setItem("productsCart", JSON.stringify(productsCart));

          ++count;
          break;
        }
      }
    }
  }
  renderCount();
  // document.getElementById("countCart").innerHTML = productsCart.length;
}
function renderCount() {
  let productsCart = JSON.parse(localStorage.getItem("productsCart"));
  let countCart = 0;
  if (productsCart) {
    for (i = 0; i < productsCart.length; i++) {
      if (productsCart[i].use == email) {
        countCart++;
      }
    }
  }
  localStorage.setItem("countCart", countCart);
  document.getElementById("span1").innerHTML = countCart;
}
renderCount();
