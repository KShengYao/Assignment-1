/* cartFuntcions */
function CartMsg(){
    var msg = document.getElementById("popUpmsg")
    msg.innerHTML = "Added to Cart!!!"

    const FSize = document.getElementById("FirstSize");
    localStorage.setItem("Sizing",FSize.elements["pic1"].value);
    localStorage.setItem("Infomation","RELIANCE T-shirt / Black");
    localStorage.setItem("Quantity",document.getElementById("Quantity1").value);
    localStorage.setItem("Price","45.99");
}

function CartMsg1(){
    var msg = document.getElementById("popUpmsg1")
    msg.innerHTML = "Added to Cart!!!"

    const FSize = document.getElementById("SecondSize");
    localStorage.setItem("Sizing1",FSize.elements["pic2"].value);
    localStorage.setItem("Infomation1","RELIANCE T-shirt / Vanilla White");
    localStorage.setItem("Quantity1",document.getElementById("Quantity2").value);
    localStorage.setItem("Price1","45.99");
}

function CartMsg2(){
    var msg = document.getElementById("popUpmsg2")
    msg.innerHTML = "Added to Cart!!!"

    const FSize = document.getElementById("ThirdSize");
    localStorage.setItem("Sizing2",FSize.elements["pic3"].value);
    localStorage.setItem("Infomation2","RELIANCE Long Sleeve T-shirt / Black");
    localStorage.setItem("Quantity2",document.getElementById("Quantity3").value);
    localStorage.setItem("Price2","75.99");
}

function CartMsg3(){
    var msg = document.getElementById("popUpmsg3")
    msg.innerHTML = "Added to Cart!!!"

    const FSize = document.getElementById("ForthSize");
    localStorage.setItem("Sizing3",FSize.elements["pic4"].value);
    localStorage.setItem("Infomation3","RELIANCE Hoodie / Black");
    localStorage.setItem("Quantity3",document.getElementById("Quantity4").value);
    localStorage.setItem("Price3","105.99");
}

function CartMsg4(){
    var msg = document.getElementById("popUpmsg4")
    msg.innerHTML = "Added to Cart!!!"

    localStorage.setItem("Infomation4","RELIANCE Towel");
    localStorage.setItem("Quantity4",document.getElementById("Quantity5").value);
    localStorage.setItem("Price4","9.99");

}

function CartMsg5(){
    var msg = document.getElementById("popUpmsg5")
    msg.innerHTML = "Added to Cart!!!"

    localStorage.setItem("Infomation5","Illustration Tote Bag");
    localStorage.setItem("Quantity5",document.getElementById("Quantity6").value);
    localStorage.setItem("Price5","19.99");
}

function CartMsg6(){
    var msg = document.getElementById("popUpmsg6")
    msg.innerHTML = "Added to Cart!!!"

    localStorage.setItem("Infomation6","RELIANCE Sakosh");
    localStorage.setItem("Quantity6",document.getElementById("Quantity7").value);
    localStorage.setItem("Price6","24.99");
}

function CartMsg7(){
    var msg = document.getElementById("popUpmsg7")
    msg.innerHTML = "Added to Cart!!!"

    const FSize = document.getElementById("iphone");
    localStorage.setItem("Sizing7",FSize.elements["phone"].value);
    localStorage.setItem("Infomation7","Illustration iPhone Case");
    localStorage.setItem("Quantity7",document.getElementById("Quantity8").value);
    localStorage.setItem("Price7","19.99");
}






