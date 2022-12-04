function ClearDataBase(){
    localStorage.setItem("Infomation","");
    localStorage.setItem("Infomation1","");
    localStorage.setItem("Infomation2","");
    localStorage.setItem("Infomation3","");
    localStorage.setItem("Infomation4","");
    localStorage.setItem("Infomation5","");
    localStorage.setItem("Infomation6","");
    localStorage.setItem("Infomation7","");

    document.getElementById("cartInfo").innerHTML = "";
    document.getElementById("cartQuantity").innerHTML = "";
    document.getElementById("cartPrice").innerHTML = "";

    document.getElementById("cartInfo1").innerHTML = "";
    document.getElementById("cartQuantity1").innerHTML = "";
    document.getElementById("cartPrice1").innerHTML = "";

    document.getElementById("cartInfo2").innerHTML = "";
    document.getElementById("cartQuantity2").innerHTML = "";
    document.getElementById("cartPrice2").innerHTML = "";

    document.getElementById("cartInfo3").innerHTML = "";
    document.getElementById("cartQuantity3").innerHTML = "";
    document.getElementById("cartPrice3").innerHTML = "";

    document.getElementById("cartInfo4").innerHTML = "";
    document.getElementById("cartQuantity4").innerHTML = "";
    document.getElementById("cartPrice4").innerHTML = "";

    document.getElementById("cartInfo5").innerHTML = "";
    document.getElementById("cartQuantity5").innerHTML = "";
    document.getElementById("cartPrice5").innerHTML = "";

    ddocument.getElementById("cartInfo6").innerHTML = "";
    document.getElementById("cartQuantity6").innerHTML = "";
    document.getElementById("cartPrice6").innerHTML = "";

    document.getElementById("cartInfo7").innerHTML = "";
    document.getElementById("cartQuantity7").innerHTML = "";
    document.getElementById("cartPrice7").innerHTML = "";

}

let total = 0;

if(document.getElementById("cartInfo").innerHTML == "")
{
    if(localStorage.getItem("Infomation") != "")
    {
        document.getElementById("cartInfo").innerHTML = localStorage.getItem("Infomation") +"    "+ localStorage.getItem("Sizing");
        document.getElementById("cartQuantity").innerHTML = localStorage.getItem("Quantity");
        document.getElementById("cartPrice").innerHTML = "SGD$" + localStorage.getItem("Price");

        total = (localStorage.getItem("Quantity") * localStorage.getItem("Price")) + total;
    }
}

if(document.getElementById("cartInfo1").innerHTML == "")
{
    if(localStorage.getItem("Infomation1") != "")
    {
        document.getElementById("cartInfo1").innerHTML = localStorage.getItem("Infomation1") +"    "+ localStorage.getItem("Sizing1");
        document.getElementById("cartQuantity1").innerHTML = localStorage.getItem("Quantity1");
        document.getElementById("cartPrice1").innerHTML = "SGD$" + localStorage.getItem("Price1");

        total = (localStorage.getItem("Quantity1") * localStorage.getItem("Price1")) + total;
    }
}

if(document.getElementById("cartInfo2").innerHTML == "")
{
    if(localStorage.getItem("Infomation2") != "")
    {
        document.getElementById("cartInfo2").innerHTML = localStorage.getItem("Infomation2") +"    "+ localStorage.getItem("Sizing2");
        document.getElementById("cartQuantity2").innerHTML = localStorage.getItem("Quantity2");
        document.getElementById("cartPrice2").innerHTML = "SGD$" + localStorage.getItem("Price2");

        total = (localStorage.getItem("Quantity2") * localStorage.getItem("Price2")) + total;
    }
}

if(document.getElementById("cartInfo3").innerHTML == "")
{
    if(localStorage.getItem("Infomation3") != "")
    {
        document.getElementById("cartInfo3").innerHTML = localStorage.getItem("Infomation3") +"    "+ localStorage.getItem("Sizing3");
        document.getElementById("cartQuantity3").innerHTML = localStorage.getItem("Quantity3");
        document.getElementById("cartPrice3").innerHTML = "SGD$" + localStorage.getItem("Price3");

        total = (localStorage.getItem("Quantity3") * localStorage.getItem("Price3")) + total;
    }
}

if(document.getElementById("cartInfo4").innerHTML == "")
{
    if(localStorage.getItem("Infomation4") != "")
    {
        document.getElementById("cartInfo4").innerHTML = localStorage.getItem("Infomation4")
        document.getElementById("cartQuantity4").innerHTML = localStorage.getItem("Quantity4");
        document.getElementById("cartPrice4").innerHTML = "SGD$" + localStorage.getItem("Price4");

        total = (localStorage.getItem("Quantity4") * localStorage.getItem("Price4")) + total;
    }
}

if(document.getElementById("cartInfo5").innerHTML == "")
{
    if(localStorage.getItem("Infomation5") != "")
    {
        document.getElementById("cartInfo5").innerHTML = localStorage.getItem("Infomation5")
        document.getElementById("cartQuantity5").innerHTML = localStorage.getItem("Quantity5");
        document.getElementById("cartPrice5").innerHTML = "SGD$" + localStorage.getItem("Price5");

        total = (localStorage.getItem("Quantity5") * localStorage.getItem("Price5")) + total;
    }
}

if(document.getElementById("cartInfo6").innerHTML == "")
{
    if(localStorage.getItem("Infomation6") != "")
    {
        document.getElementById("cartInfo6").innerHTML = localStorage.getItem("Infomation6")
        document.getElementById("cartQuantity6").innerHTML = localStorage.getItem("Quantity6");
        document.getElementById("cartPrice6").innerHTML = "SGD$" + localStorage.getItem("Price6");

        total = (localStorage.getItem("Quantity6") * localStorage.getItem("Price6")) + total;
    }
}

if(document.getElementById("cartInfo7").innerHTML == "")
{
    if(localStorage.getItem("Infomation7") != "")
    {
        document.getElementById("cartInfo7").innerHTML = localStorage.getItem("Infomation7")+"    "+ localStorage.getItem("Sizing7");
        document.getElementById("cartQuantity7").innerHTML = localStorage.getItem("Quantity7");
        document.getElementById("cartPrice7").innerHTML = "SGD$" + localStorage.getItem("Price7");

        total = (localStorage.getItem("Quantity7") * localStorage.getItem("Price7")) + total;
    }
}  
    

const totalamt = document.getElementById("totalAmount");
totalamt.innerHTML = "SGD$" + total;


function ClearAll(){
    if(document.getElementById("Delivery").elements["Delivery"].value == "Express Delivery")
    {
        total = total + 5 
    }

    alert("Name: " + document.getElementById("CheckoutName").value+"\n"+
    "ContactNo: " + document.getElementById("checkoutContactNo").value +"\n"+
    "ContactNo: " + document.getElementById("checkoutContactNo").value +"\n"+
    "Country: " + document.getElementById("Country").value +"\n"+
    "Address: " + document.getElementById("address").value +"("+ document.getElementById("postal").value + ")" + "\n"+
    "Payment: " + document.getElementById("CreditCard").elements["cc"].value + " (Approved)" + "\n"+
    "Total Amount payed: " +"SGD$"+ total + "\n"+"\n"+
    "Thanks for shopping!! Hope to see u again!!!")

    document.getElementById("CheckoutName").value = "";
    document.getElementById("checkoutContactNo").value = "";
    document.getElementById("checkoutContactNo").value = "";
    document.getElementById("postal").value = "";
    document.getElementById("address").value = "";

    document.getElementById("PaymentName").value = "";
    document.getElementById("PaymentCArd").value = "";
    document.getElementById("PaymentPostal").value = "";
    document.getElementById("PaymentAddress").value = "";
    ClearDataBase();
}
