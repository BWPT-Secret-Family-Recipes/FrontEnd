import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, Input } from 'reactstrap';
import {axiosWithAuth} from '../utils/axiosWithAuth'

const RecipeModal = (props) => {

  const {id,title,ingredients,instructions} = props.data
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [editRecipe,setEditRecipe] = useState({
      title:title,
      ingredients:ingredients,
      instructions:instructions
  })

  const handleChanges = (e) => {
      e.persist();
      setEditRecipe({...editRecipe,[e.target.name]:e.target.value})
  }

  const submitChanges = (e) => {
      e.preventDefault();
      axiosWithAuth().put(`https://ptbw191-secretfamilyrecipes.herokuapp.com/api/recipe/${id}`,editRecipe)
      .then(res=>{
          console.log('Recipe successfully edited',res)
      })
      .catch(err=>{
          console.log('Recipe did not update', err.response)
      })
      toggle()
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}>Edit Recipe</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Recipe</ModalHeader>
        <ModalBody>
          <Form>
            Title: <Input type="text" name="title" value={editRecipe.title} onChange={handleChanges}/>
            Ingredients: <Input type="text" name="ingredients" value={editRecipe.ingredients} onChange={handleChanges}/>
            Instructions: <Input type="text" name="instructions" value={editRecipe.instructions} onChange={handleChanges}/>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={submitChanges}>Confirm Edit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default RecipeModal;