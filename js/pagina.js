function singleSubTotal(obj) {
    var price = obj.parentElement.children[3].innerHTML;
    var count = obj.parentElement.children[4].children[1].value;
    obj.innerHTML = eval(price + "*" + count);
}

function allShopPriceTotal() {
    var obj = document.getElementById("resultTotalMoney");
    var allSingelSubElement = document.getElementsByClassName("shopCount");
    var sum = "0";
    for (singelSubElement of allSingelSubElement) {
        if (sum != "") {
            sum += "+";
        }
        sum += singelSubElement.innerHTML;
    }
    obj.innerHTML = eval(sum);
}

var allSingelIntegralElement = document.getElementsByClassName("integral");

var sum = "0";
for (singelIntegralElement of allSingelIntegralElement) {
    // Cantidad
    var count = singelIntegralElement.parentElement.children[4].children[1].value;
    if (sum != "") {
        sum += "+";
    }
    sum += singelIntegralElement.innerHTML + "*" + count;
}
obj.innerHTML = eval(sum);

function buyNow() {
    var result = confirm("¡Quieres comprar todo!");
    if (result == false) {
        return
    }
    var obj = document.getElementById("myTable");
    obj.innerHTML = "";

    allShopPriceTotal();
    allIntegralTotal();
    alert("¡Compra exitosa!");
}

function addToCart(obj) {
    var result = confirm('¿Añadir este producto al carrito de la compra?');
    if (result == false) {
        return parseInt(th);
    }

    var cartBox = document.getElementById("myTable");
    // Objeto de mercancía
    var shop = {
        shopImg: obj.children[0].src,
        shopIntegral: parseInt(eval(obj.children[2].innerHTML + "/20")),
        shopPrice: obj.children[2].innerHTML
    }

    var img = document.getElementsByClassName("celularImg");
    var result = "-1";
    for (var i = 0; i < img.length; i++) {
        if (shop.shopImg == img[i].children[0].src) {
            result = i;
        }
    }
    if (result != "-1") {
        var count = img[result].parentElement.children[4].children[1];
        count.value = eval(count.value + "+1");

        singleAllSubTotal();
    } else {
        // Crea un objeto de carrito de compras
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerHTML = '<input type="checkbox" class="selectOne" />';
        var td2 = document.createElement("td");
        td2.className = "imgbackground";
        td2.innerHTML = '<img src="' + shop.shopImg + '" height="100" width="100" />';
        var td3 = document.createElement("td");
        td3.className = "integral";
        td3.innerHTML = shop.shopIntegral;
        var td4 = document.createElement("td");
        td4.innerHTML = shop.shopPrice;
        var td5 = document.createElement("td");
        td5.innerHTML = '<button οnclick="reduce(this)">-</button>&nbsp;'
            + '<input type="text" size="1" readonly="true" value="1" />'
            + '&nbsp;<button οnclick="plus(this)">+</button>';
        var td6 = document.createElement("td");
        td6.className = "shopCount";
        td6.innerHTML = parseInt(shop.shopPrice);
        var td7 = document.createElement("td");
        td7.innerHTML = '<a href="#" class="delete" οnclick="deleteChild(this)"> Eliminar </a>';
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        // Añadir al carrito
        cartBox.appendChild(tr);
    }

    allShopPriceTotal();

    window.onload = function () {
        singleAllSubTotal();
        allShopPriceTotal();
        allIntegralTotal();
    }
}

