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

    $("input").val("");

    $(".places").last().click( function() {
      $("#output").show();
      $("#output h2").text(userTravel.travelLocation);
      $("#fellow-travelers-output").text(userTravel.travelers);
      $("#date-output").text(userTravel.travelMonth);
    });
  });
});
