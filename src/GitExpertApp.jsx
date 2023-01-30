import React, {Fragment,useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GitExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);
  return (
    <Fragment>
        <h2>Git Expert App</h2>
        <AddCategory setCategories={setCategories}/>
        <br />
        <ol>
          {
            categories.map(category => <GifGrid key={category} category={category}/>)
          }
        </ol>
    </Fragment>
  )
}
