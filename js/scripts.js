function AllPlaces(){
  this.listOfPlaces = [],
  this.currentId = 0
}

AllPlaces.prototype.assignId = function(){
  this.currentId++;
  return this.currentId;
}

function Place(name, location, description, image_link){
  this.name = name,
  this.location = location,
  this.description = description,
  this.image = image_link
}

AllPlaces.prototype.addPlace = function(place){
  place.id = this.assignId();
  this.listOfPlaces.push(place);
}

AllPlaces.prototype.findPlace = function(id){
  for(var i=0; i< this.listOfPlaces.length; i++){
    if (this.listOfPlaces[i] && this.listOfPlaces[i].id == id){
      return this.listOfPlaces[i]
    }
  };
  return false;
}

AllPlaces.prototype.deletePlace = function(id){
  for(var i=0; i<this.listOfPlaces.length; i++){
    if(this.listOfPlaces[i] && this.listOfPlaces[i].id == id){
      return this.listOfPlaces[i];
    }
  };
  return false;
}

var allPlaces = new AllPlaces();

function displayAllPlaces(){
  var stringToAddHTML = "";

  for (var i = 0; i < allPlaces.listOfPlaces.length; i++) {
    if (allPlaces.listOfPlaces[i]){
      stringToAddHTML += "<div id='" + allPlaces.listOfPlaces[i].id + "'><p>" + allPlaces.listOfPlaces[i].name + "<img class='small' src='" + allPlaces.listOfPlaces[i].image + "' alt='Photo of " + allPlaces.listOfPlaces[i].name + "'></p><br></div>";
    }
  };
  console.log(stringToAddHTML);
  var show = $("#showAll");
  show.empty();
  show.html(stringToAddHTML);
};

function showDetails(id){
  var place = allPlaces.findPlace(id);
  $(".name").html(place.name);
  $(".location").html(place.location);
  $(".description").html(place.destination);
  $(".image").attr("src", place.image);
};

function attachListeners(){
  $("#showAll").on("click", "div", function(){
    showDetails(this.id);
  });
};

$(document).ready(function(){
  attachListeners();

  $("#form").submit(function(event){
    event.preventDefault();

    inputName = $("#name").val();
    inputLocation = $("#location").val();
    inputDescription = $("#description").val();
    inputImage = $("#image").val();
    var newPlace = new Place(inputName, inputLocation, inputDescription, inputImage);
    allPlaces.addPlace(newPlace);
    console.log(allPlaces);
    displayAllPlaces();
  })
})
