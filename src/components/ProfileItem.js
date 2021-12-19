
function ProfileItem(props){
    let storyObj = props.storyObject

    let deleteStory= ()=> {
        props.deleteStory(storyObj);

    }
    return(
        
            <tr>
                <td>{props.storyObject.title}</td>
        
                <td>{props.storyObject.plays}</td>
                <td><button onClick={ () =>deleteStory()} className="btn btn-danger btn-small">Delete</button></td>
            </tr>
        
    )
}

export default ProfileItem;