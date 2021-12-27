
  function parseStory(input, title, uid, name){
      
    let parenthesesArray1 = [];
    let parenthesesArray2 = []
    let wordArray = [];
    

    for (let i = 0; i < input.length; i++){
        //Check for #, since it is used in the Play component to identity where to insert words
        let letter = input.charAt(i);
        if (letter == '#'){
            return 'error1';
        }

        //saves the index of parenthesis brackets
       else if (letter == '('){
            parenthesesArray1.push(i);
        }
        else if (letter == ')'){
            parenthesesArray2.push(i);
        }


    }

    if (parenthesesArray1.length != parenthesesArray2.length || parenthesesArray2.length == 0 || title.length < 1){
        //returns an error if there are unequal number of left and right parentheses or no parentheses
        return 'error2';

        
    }
    else{
 
    for (let i = 0; i < parenthesesArray1.length; i++){

        let index = parenthesesArray1[i];
        //the second index number needs to be higher by one to include ')'
        let secondindex = parenthesesArray2[i] + 1;
        let removed = input.slice(index, secondindex);
        wordArray.push(removed);
        
        console.log(removed)
        console.log(wordArray);
      


        

    }

    for (let i = 0; i < wordArray.length; i++){

        let hashstring = '#' + i;
        input = input.replace(wordArray[i], hashstring);

        //later when reading a madlib from the database, the words
        //given by the player will be inserted at the index of each #
    }

    // get the indecies of each ( and )


        let madlib = {
            wordList: wordArray,
            story: input,
            title: title,
            uid: uid,
            name: name,
            plays: 0

        }


        return madlib;

     }

  }

  module.exports = parseStory;