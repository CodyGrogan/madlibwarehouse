

function PlayItem(props){
    
    return(
        
            <tr>
                <td>{props.storyObject.title}</td>
                <td>Two</td>
                <td>Three</td>
                <td><button className="btn btn-primary btn-small">Play</button></td>
            </tr>
        
    )
}

export default PlayItem;