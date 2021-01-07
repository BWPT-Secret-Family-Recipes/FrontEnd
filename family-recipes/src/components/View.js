import React, {  useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const ViewDetails = (props) => {
    const {id,username, title,ingredients,instructions} = props.data
    const [modal, setModal] = useState(false);
    const [state , setState] = useState({
        id:id,
        username: username,
        title: title,
        ingredients: ingredients,
        instructions: instructions
    })
  
    const toggle = () => setModal(!modal);
    return(
        <div>
            <Button color="danger" onClick={toggle}>View Recipe</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Recipe Id: {state.id}</ModalHeader>
                    <ModalBody>              
                    <h2>{state.title}</h2>
                    <p>This recipe was posted by: {state.username}</p>
                    <p>Ingredients: {state.ingredients}</p>
                    <p>Instructions: {state.instructions}</p>
                    </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
         </div>

        )
        
}

export default ViewDetails;