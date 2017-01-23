function Travel(location, fellowTravelers, date) {
  this.travelLocation = location;
  this.travelers = fellowTravelers;
  this.travelMonth = date;
}


$(document).ready(function() {
  $("form#user-input").submit(function(event) {
    event.preventDefault();
    var userLocation = $("input#location").val();
    var userFellowTravelers = $("input#fellow-travelers").val();
    var userDate = $("input#date").val();

    var userTravel = new Travel(userLocation, userFellowTravelers, userDate);

    $("ul#place-list").append("<li class='places'>" + userTravel.travelLocation + "</li>")
  });
});
