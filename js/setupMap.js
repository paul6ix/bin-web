var cu = new google.maps.LatLng(6.671310, 3.158175);
function myMap() {
    var mapOptions = {
        center: cu,
        zoom: 25,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
        position: cu

    });


}