
//Get top-button
var mybutton = document.getElementById("top-button");

// When the user scrolls down 30px from the top of the document show top-button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on top-button scroll back to top of document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Collapsible button dynamic aspect ratio

var cw = $('.info-btn').width();
$('.info-btn').css({'height':cw +'px'});

//Toggle collapsible buttons

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//Find Us section Google Maps API code

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 51.503744,
            lng: -0.091751
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


    var locations = [ 
        { lat: 51.503744, lng: -0.091751 }, //51.503744, -0.091751 - UK - The Whiskey Exchange - https://www.thewhiskyexchange.com/shops/londonbridge
        { lat: 57.490100, lng: -2.291837 }, //57.490100, -2.291837 - Scotland - Glen Garioch Distillery - https://www.glengarioch.com/
        { lat: 57.117984, lng: 12.641980 }, //57.117984, 12.641980 - Sweden - Copenhagen Distillery - https://copenhagendistillery.com/
        { lat: 39.509838, lng: -106.052244}, //39.509838, -106.052244 - USA - Breckenridge Distillery - https://breckenridgedistillery.com/
        { lat: 43.509032, lng: -79.672828}, //43.509032, -79.672828 - Canada - Maverick Distilleries - https://www.maverickdistillery.com/
        { lat: 34.893309, lng: 135.674590}, //34.893309, 135.674590 - Japan - Beam Suntory( Habiki 21 yo most awarded in world) - https://www.suntory.co.jp/factory/yamazaki/
        { lat: -35.040166, lng: 117.847810}, //-35.040166, 117.847810 - Australia - Limeburners Distillery - https://www.distillery.com.au/
        { lat: 12.889815, lng: 77.452130}, //12.889815, 77.452130 - India - Amrut Distilleries - https://www.amrutdistilleries.com/
        { lat: 24.714143, lng: 121.691838}, // 24.714143, 121.691838 - Taiwan - Kavalan Distillery - http://www.kavalanwhisky.com/zh-tw/intro.php?ref=aW5kZXgucGhw
        { lat: 49.983468, lng: 9.176055},  //49.983468, 9.176055 - Germany - Kilian Whisky Distillers - https://www.stkiliandistillers.com/
        { lat: 60.722613, lng: 17.103251}, //60.722613, 17.103251 - Sweden - Mackmyra Whisky - https://mackmyra.se/
        { lat: -42.522365, lng: 147.444618}, //-42.522365, 147.444618 - Tasmania/Australia - https://sullivanscove.com/
        { lat: 51.023153, lng: -114.027041}, //51.023153, -114.027041 - Canada - Alberta Distillers Limited - https://www.albertadistillers.com/
        { lat: 53.417940, lng: -6.277223}, //53.417940, -6.277223 - Ireland - Jameson - https://www.jamesonwhiskey.com/en-IE/visit-us/jameson-distillery-bow-st
        { lat: 35.286694, lng: -86.364055}, //35.286694, -86.364055 - USA - Jack Daniels Distillery - https://www.jackdaniels.com/en-gb/
        { lat: -33.573923, lng: 18.992076}, //-33.573923, 18.992076 - South Africa - Bain's Whisky Distillery - https://www.bainswhisky.com/welcome
        { lat: 53.223255, lng: 8.210116},  //53.223255, 8.210116 - Germany - The LÜBBEHUSEN - https://theluebbehusen.com/
        { lat: 64.256398, lng: -21.976955} //64.256398, -21.976955 - Iceland - Eimverk Distillery - https://flokiwhisky.is/floki-icelandic-single-malt-whisky/tours/
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
         //markers.addListener('click', function() {
         //infowindow.open(map, marker);
  });

 
var markerCluster = new MarkerClusterer(map, markers, 
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}

//var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

    var infowindow = new google.maps.InfoWindow({
     content: contentString
    ,
});
;