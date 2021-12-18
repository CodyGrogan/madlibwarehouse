

function PlayItem(props){
    let storyObj = props.storyObject

    let pickStory= ()=> {
        props.setStory(storyObj);

    }
    return(
        
            <tr>
                <td>{props.storyObject.title}</td>
                <td>{props.storyObject.name}</td>
                <td>{props.storyObject.plays}</td>
                <td><button onClick={ () =>pickStory()} className="btn btn-primary btn-small">Play</button></td>
            </tr>
        
    )
}

export default PlayItem;