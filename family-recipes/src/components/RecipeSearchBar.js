import React, {useState,useEffect} from 'react'
import Fuse from 'fuse.js'
import {Container, Form, FormGroup,Label,Input} from 'reactstrap';
import RecipeCard from './RecipeCard';

const RecipeSearchBar = ({data}) => {
    const [query,setQuery] = useState('')

    const options = {
        isCaseSenstive:false,
        includeMatches:true,
        findAllMatches:true,
        shouldSort:true,
        keys:[
            'title'
        ]
    };

    const fuse = new Fuse(data,options)
    const results = fuse.search(query)
    const recipeResults = query ? results.map(result=>result.item) : data;
    console.log('fuse',fuse)
    console.log(results)

    function handleOnSearch({ currentTarget = {}}){
        const {value} = currentTarget;
        setQuery(value);
    }

    return (
        <Container>
             <Form>
              <h1 style={{color:'white'}}>Find Your Recipe Now!</h1>
              <FormGroup>
              <Label htmlFor="search"></Label>
              <Input    
                  type="text"
                  id="search"
                  name="search"
                  value={query}
                  onChange={handleOnSearch}
                  placeholder="Search for a recipe"
              />
              </FormGroup>
            </Form>
              <RecipeCard data={recipeResults}/>
        </Container>)
}


export default RecipeSearchBar;