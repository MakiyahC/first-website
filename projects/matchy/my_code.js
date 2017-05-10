//step one

var animal = {};
    animal.species = 'Duck';
    animal['name'] = 'Patty';
    animal['noises'] = [];
    
    console.log(animal);
//step two    
    var noises = [];
    noises[0] = 'Quack';
    noises.push('Squeak');
    noises.unshift('Yonk');
    noises[noises.length] ='Flap';
    
    console.log(noises.length);
    console.log(noises[noises.length-1]);
    console.log(noises);
    
//step three
animal['noises'] = noises;
animal.noises.push('splash');
console.log(animal);

//step four

var animals = [];
animals.push(animal);
console.log(animals);
var duck = {
    species: 'Duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
    };
var snake = {
    species: 'Snake',
    name: 'Solomon',
    noises: ['Sssss','Slither']
    };
var lizard = {
    species: 'Lizard',
    name: 'Leslie',
    noises: ['Hiss', 'Scratch',]
    };
animals.push(duck); 
animals.push(snake);
animals.push(lizard);
console.log(animals);

friends = [];
//because we can hold names in an order

function getRandom(array) {
  
  min = Math.ceil(0);
  max = Math.floor(array.length);
  var result =  Math.floor(Math.random() * (max - 0)) + min;
  return array[result];
    
}
var resultinganimal = getRandom(animals);
friends.push(resultinganimal.name);
    
 animals[0].friends = friends;   
    
    
function search(animalName) {
var ourResult = null;
for(var i = 0; i<animals.length;i++){
    if (animals[i].name == animalName){
        ourResult = animals[i];
        break;
    
    }
}
        return ourResult;

}
console.log(search('Mak'));

var placeholder = null;
function edit(animalName,newObject){
    for(var i = 0; i<animals.length;i++){
    if (animals[i].name == animalName) {
        animals[i] == newObject;
    }
        
    }
}

function remove(animalName){
    for(var i = 0;i<animals.length;i++){
        if (animals[i].name === animalName){
            var removed = animals.splice(i, 1)
            return removed[0];
        } 
    }
}

function create(newAnimal){
    if(typeof newAnimal.name !== 'string'  !newAnimal.name.length){
        
    
    
}
 
    
    
    
    
    
    