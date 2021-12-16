import Navbar from "./Navbar";

function submitTemplate(){

    let input = document.getElementById('madlibtextarea').value;
     
    console.log(input);

    let parenthesesArray1 = [];
    let parenthesesArray2 = []
    let wordArray = [];
    let slicedString = '';

    for (let i = 0; i < input.length; i++){

        let letter = input.charAt(i);
        if (letter == '#'){
            alert('invlaid character #')
            break;
        }

        
       else if (letter == '('){
            parenthesesArray1.push(i);
        }
        else if (letter == ')'){
            parenthesesArray2.push(i);
        }


    }
 
    for (let i = 0; i < parenthesesArray1.length; i++){

        let index = parenthesesArray1[i];
        //the second index number needs to be higher by one to include ')'
        let secondindex = parenthesesArray2[i] + 1;
        let removed = input.slice(index, secondindex);
        wordArray.push(removed);
        console.log(removed)
        console.log(wordArray);
      


        

    }

    // get the indecies of each ( and )


    console.log(parenthesesArray1);
    console.log(input);

    
}


function Create(props){
    return(
        <div>
            <Navbar/>
            <p>This is Create</p>


            <p>In this section, write your own mad lib template</p>

            <p>When you write your story, request words by putting them in parenthesis.</p>
            <p>ex: Harold was a (adjective) (animal). He loves to (verb).</p>
            <textarea id='madlibtextarea' cols='50' rows="10"></textarea>
            <br/>
            <button type="button" onClick={submitTemplate} className="btn btn-primary">Submit</button>
        </div>
    )
}

export default Create;