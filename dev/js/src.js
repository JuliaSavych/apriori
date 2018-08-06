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



  if($('#map').length){
    var mapPosition = new google.maps.LatLng(-33.91722, 151.23064);

    var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: mapPosition,
        });

    var marker = new google.maps.Marker({
      position : mapPosition,
      icon : '../img/pointer-map.png',
      map : map
    });
  }

});