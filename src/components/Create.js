import Navbar from "./Navbar";

function Create(props){
    return(
        <div>
            <Navbar/>
            <p>This is Create</p>


            <p>In this section, write your own mad lib template</p>

            <p>When you write your story, request words by putting them in parenthesis.</p>
            <p>ex: Harold was a (adjective) (animal). He loves to (verb).</p>
            <textarea cols='50' rows="10"></textarea>
            <br/>
            <button type="button" className="btn btn-primary">Submit</button>
        </div>
    )
}

export default Create;