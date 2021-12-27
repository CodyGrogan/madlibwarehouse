
let sortByPlays = (array) =>{
    console.log('sortByPlays clicked')
    let storyObjects = array.slice(0);
    storyObjects.sort(function(a,b){
        return b.plays - a.plays;
    });
    console.log(storyObjects)
    return storyObjects


}

let sortByAlphabet = (storyarray, type) =>{
    //type parameter should be a string 'name' or 'title'

    let array = storyarray.slice(0);
    if (type == 'name'){
    array.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
    }
    else{

    
        array.sort(function(a, b) {
            var nameA = a.title.toUpperCase(); // ignore upper and lowercase
            var nameB = b.title.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          });

    }
    return array;
      
}

module.exports = {sortByPlays, sortByAlphabet};