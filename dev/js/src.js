$( document ).ready(function() {  
  var advantages_block = $('.advantages'); 
  if(advantages_block.length){
    $('.advantages a').click(function(event) {
      // відміняєм дію браузера по замовчуванню
      event.preventDefault();
      // дістаєм ІД елемента до якого будемо скролити
      var target = $(this).attr('href');
      // дістаємо позицію елемента 
      var pos = $(target).offset().top;
      $("html, body").animate({scrollTop : pos}, 700);
    });
  }
});

$('[data-fancybox="gallery-1"]').fancybox({
   thumbs : {
    autoStart : true
  },
  image: {
      preload: true
  },
  transitionEffect: "fade",
  toolbar: "auto",
  buttons: [
        "share",
        "fullScreen",
        "download",
        "thumbs",
        "close"
    ]
});

function initMap() {
  if($('#map').length){
    var mapPosition = new google.maps.LatLng(-23.91722, 151.23064);

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: mapPosition,
      });
    // var infowindow = new google.maps.InfoWindow({
    //   content: contentString
    // });

    var marker = new google.maps.Marker({
      position : mapPosition,
      icon : '../img/pointer-map.png',
      map : map,
      title: 'mapPosition (Ayers Rock)'   
    });
  }
}

window.addEventListener('resize', function(event){
    var mainBlockHeigh = $('.main-block').height();
    console.log(mainBlockHeigh);
});