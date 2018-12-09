var featuresLinks = document.querySelectorAll(".features-list a");
var featuresBlocks = document.querySelectorAll(".features-details-block");
var j, h, k;

for (i = 0; i < featuresLinks.length; ++i) {
	featuresLinks[i].addEventListener("click", function (event) {
		event.preventDefault(event);
        for (j = 0; j < featuresLinks.length; ++j) {
            featuresLinks[j].classList.remove("features-list-active");        
        }
        for (h = 0; h < featuresLinks.length; ++h) {
            if (featuresLinks[h] == this) {
                featuresLinks[h].classList.add("features-list-active");
                for (k = 0; k < featuresBlocks.length; ++k) {
                    featuresBlocks[k].classList.remove("features-details-active");
                }
                featuresBlocks[h].classList.add("features-details-active");
            }
        }
	})
}

var buyItemButtons = document.querySelectorAll(".btn-buy"), i;
var cartBlock = document.querySelector(".cart-notification");
var cartClose = document.querySelector(".cart-notification-close");
var cartCancel = document.querySelector(".cart-cancel-btn");

for (i = 0; i < buyItemButtons.length; ++i) {
	buyItemButtons[i].addEventListener("click", function (event) {
		event.preventDefault(event);
		cartBlock.classList.add("show-block");
	})
}

cartClose.addEventListener("click", function (event) {
	event.preventDefault(event);
	cartBlock.classList.remove("show-block");
});

cartCancel.addEventListener("click", function (event) {
	event.preventDefault(event);
	cartBlock.classList.remove("show-block");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (cartBlock.classList.contains("show-block")) {
            cartBlock.classList.remove("show-block");
        }
    }
});


var feedbackPopup=document.querySelector(".feedback"),feedbackButton=document.querySelector(".btn-address"),feedbackClose=document.querySelector(".feedback-close");
    null!=feedbackButton&&null!=feedbackClose&&(feedbackButton.addEventListener("click",function(e){e.preventDefault(e),feedbackPopup.classList.add("show-block")}),feedbackClose.addEventListener("click",function(e){e.preventDefault(e),feedbackPopup.classList.remove("show-block")}),window.addEventListener("keydown",function(e){27==e.keyCode&&feedbackPopup.classList.contains("show-block")&&feedbackPopup.classList.remove("show-block")}));


var mapBlock = document.querySelector(".map");
var mapLink = document.querySelector(".company-map");
var mapClose = document.querySelector(".map-close");

mapLink.addEventListener("click", function (event) {
	event.preventDefault(event);
	mapBlock.classList.add("show-block");
});

mapClose.addEventListener("click", function (event) {
	event.preventDefault(event);
	mapBlock.classList.remove("show-block");
});

function initialize() {
    var x = 59.938969;
    var y = 30.323040;
    var mapOptions = {
        zoom: 17,
        center: new google.maps.LatLng(x, y),
        scrollwheel: false,
        disableDefaultUI: true
    }
    var map = new  google.maps.Map(
        document.querySelector(".map-script"),
        mapOptions
    );
    var myLatLng = new google.maps.LatLng(x, y);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });
}
google.maps.event.addDomListener(mapLink, "click", initialize);

