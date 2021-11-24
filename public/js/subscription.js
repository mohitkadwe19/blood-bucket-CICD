
// Binding exc key
$('body').keydown(function(e) {
    if (e.keyCode == 27) {
        // put your code here if any (that will run after Esc pressed).
        hidePayment()
    }    
});
let order_id = ""
let name = ""
let email = ""
let amt = 0
let contact = ""
let siganture = ""
let beatingHeart = '<i class="fa fa-heart color-main"></i>'

let speed = 10
startSlide = () => {
    $('#fade-slide').slick({
        dots: false,
        autoplay: true,
        infinite: true,
        speed: speed,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        pauseOnHover: false
      });
} 

startSlide()
showPayment = () => {
    $("#payment-details").show()
    $("#payment-details").removeClass('hide')
    $("#fade-slide").slick('unslick')
    speed = 500
    startSlide()
}
hidePayment = () => {
    $("#payment-details").hide()
    $("#fade-slide").slick('unslick')
    speed = 10
    startSlide()
}
hidePayment()

verifyPayment = (order_id,payment_id,signature) => {

    let data = {
        "razorpay_order_id":order_id,
        "razorpay_payment_id":payment_id,
        "razorpay_signature":signature
    }
    console.log(data)
    let url = "https://blood-request-api.herokuapp.com/payment/verify"
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           let res = JSON.parse(xhttp.responseText)
           if(res.status === "success")
            paymentSuccess()
        }
    };
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json")
  
    xhttp.send(JSON.stringify(data));
}

setOption = (order_id) => {
    var options = {
        "key": "rzp_live_wwzcBBhKfyo9Dx", // Enter the Key ID generated from the Dashboard
        "amount": amt*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "BloodConnect Foundation",
        "description": "Donation",
        "order_id":order_id,
        "image": "./img/logo.png", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            let payment_id = response.razorpay_payment_id
            let siganture = response.razorpay_signature
            let o_id = response.razorpay_order_id
            verifyPayment(o_id,payment_id,siganture)
        },
        "prefill":{
            "name":name,
            "email":email,
            "contact":contact
        },
        "notes": {
            "address": "BloodConnect Foundation"
        },
        "theme": {
            "color": "#D20003"
        }
    };
    var rzp1 = new Razorpay(options);
    startPayment(rzp1)
}

initiatePayment = (e) => {
    e.preventDefault()
    name = $("#nameInput").val()
    email = $("#emailInput").val()
    amt = $("#amtInput").val()
    contact = $("#contactInput").val()
    
    let body = {
        "amount": amt*100,
        "currency": "INR",
        "receipt": "rcptid_11",
        "payment_capture": 1
    }
    console.log(body)
    let url = "https://blood-request-api.herokuapp.com/payment/order"
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           let res = JSON.parse(xhttp.responseText)
           console.log(res.sub.id)
           setOption(res.sub.id)
        }
    };
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json")
    console.log(body)
    xhttp.send(JSON.stringify(body));
    
    
}

startPayment = (rzp1) => {
    rzp1.open();
}

paymentSuccess = () => {
    $("#success-modal").removeClass('hide')
    $("#success-modal").addClass('show')
    let secondsLeft = 3;
    let x = setInterval( () => {
        if(secondsLeft <= 0)
            window.location.href = "./organize-a-camp.html"
        $("#seconds").html(`${secondsLeft}s`)
        secondsLeft -=1;
    },1000)
    hidePayment()
}

amtSelected = (e) => {
    //$("#amtImpact").addClass('w-0')
    $("button.amt").removeClass('selected')
    e.target.classList.add('selected')
    amt = e.target.textContent
    $("#amtInput").val(amt)
    $("#amtImpact").html(`You are helping us save ${amt/50} lives ${beatingHeart}`)
    //$("#amtImpact").removeClass('w-0')
    $("#amtImpact").addClass('w-100')
    requirePanCard(e)
}

amtChanged = (e) =>{
    let amt = e.target.value
    if(amt < 50)
    $("#amtImpact").html(`You are helping us save 1 live ${beatingHeart}`)
    else
    $("#amtImpact").html(`You are helping us save ${Math.round(amt/50)} lives ${beatingHeart}`)
    requirePanCard(e)
}

requirePanCard = (e) => {
    e.preventDefault()
}