//13
function objectValues(obj){
    const values = [];
    for(var key in obj){
        values.push(obj[key]);
    }
    return values;
}


// 14

function keysToString(obj){
    return Object.keys(obj).join(" ");
    
}

// 15

function valuesToString(obj){
  const values = [];
  for(var key in obj){
    if(typeof obj[key] === "string") {
        values.push(obj[key])
    }
  }
     return values.join(" ");
}

// 16

function arrayOrObject(collection){
    if(Array.isArray(collection)=== true){
        return "array"
    }
        else{
            return "object"
        }
    }
    
// 17

function capitalizeWord(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// 18
//Should take a string of words and 
//return a string with all the words capitalized (
function capitalizeAllWords(string){
    var holder= [];
     for(var word of string.split(" ")){
         holder.push(capitalizeWord(word));
     }
     return holder.join(" ");
}
  // 19
function welcomeMessage(obj) {
    
    return "Welcome " + capitalizeWord(obj.name) + '!';
    
}
// 20
function profileInfo(obj) {
    return capitalizeWord(obj.name) + " is a " + capitalizeWord(obj.species);
}

// 21

/*Should take an object, 
if this object has a noises array return them as a string separated by a space, 
if there are no noises return 'there are no noises'
*/

function maybeNoises(obj){
    if(typeof obj.noises === undefined){
        return    "there are no noises";
    }
    else if (Array.isArray(obj.noises) == false){
        return 'there are no noises';
    }
    else if(obj.noises.length === 0 ){
        return "there are no noises";
    } else{
        return  obj.noises.join(" ");
    }
}

//  22
//Should take a string of words and a word 
//and return true if <word> is in <string of words>, 
//otherwise return false

function hasWord(string,word){
    if(string.indexOf(word) > -1){
        return true;
    }else{
        return false;
    }
    
}

// 23

//addFriend()
// Should take a name and an object
//and add the name to the object's friends array
//then return the object

function addFriend(name,object){
    object.friends.push(name)
    return object;
}


// 24

//isFriend() 
//: Should take a name and an object 
//and return true if <name> is a friend of <object> and false otherwise  


function isFriend(name,object){
    return Array.isArray(object.friends) && object.friends.indexOf(name) !== -1;
}

// function isFriend(name,object){
//     return object.name === name;
// }














//25
// nonFriends() : 
//Should take a name and a list of people, 
// and return a list of all the names that <jak> is not friends with
    
    
    function nonFriends(name,people){
        var results = [];    
        for(var person of people){
            console.log(person);
            if(person.friends.indexOf(name) === -1 && person.name !== name){
                results.push(person.name);
            }
            
                
        }
        return results;
    }
    
    
    //26
    // updateObject() 
    // : Should take an object, a key and a value.
    // Should update the property <key> on <object> with new <value>. 
    // If <key> does not exist on <object> create it
   
   function updateObject(object,key,value){

    object[key] = value;
       return object;
   }
    
    
    
    
    
    // //27
    // removeProperties() :
    // Should take an object and an array of strings.
    // Should remove any properties on <object> that are listed in <array> 
    
    function removeProperties(object,strings){
       
        for(var prop of strings){
            if(Object.keys(object).indexOf(prop) > -1){
                 delete object[prop];
            }
        }
        return object;
    }
    
    //28
    // and return 
    //an array with all the duplicates removed
    
    function dedup(array){
    var newArray= [];
    for(var duplicates of array){
        if(newArray.indexOf(duplicates) === -1){
            newArray.push(duplicates);
    
        }
    }console.log(newArray);
        return newArray;
        
    }
    
    
    
    
    
    
    
    
    
    
    
    