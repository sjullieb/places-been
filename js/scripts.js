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

AllPlaces.prototype.addPlace(place){
  place.id = this.assignId;
  this.listOfPlaces.push(place);
}

AllPlaces.prototype.findPlace(id){
  for(var i=0; i< this.listOfPlaces.length; i++){
    if (this.listOfPlaces[i] && this.listOfPlaces[i].id == id){
      return this.listOfPlaces[i]
    }
  };
  return false;
}

AllPlaces.prototype.deletePlace(id){
  for(var i=0; i<this.listOfPlaces.length; i++){
    if(this.listOfPlaces[i] && this.listOfPlaces[i].id == id){
      return this.listOfPlaces[i];
    }
  };
  return false;
}

var allPlaces = new AllPlaces();

$(document).ready(function(){

  $("#form").submit(function(event){
    event.preventDefault;

    inputName = $("#name").val();
    inputLocation = $("#location").val();
    inputDescription = $("#description").val();
    inputImage = $("#image").val();

    var onePlace = new Place(inputName, inputLocation, inputDescription, inputImage);
    allPlaces.addPlace(onePlace);

  });
});
