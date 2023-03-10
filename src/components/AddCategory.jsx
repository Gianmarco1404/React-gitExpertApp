import React,{useState} from 'react'
import propTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange=(e)=>{
        setInputValue(e.target.value);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategories(cat=>[inputValue,...cat]);
            setInputValue('');
        }
    }
  return (
    <form action="../../public/index.html" method="post" onSubmit={handleSubmit}>
            <input type="text" name="" id="" value={inputValue} onChange={handleInputChange}/>
    </form>
  )
}
AddCategory.propTypes={
    setCategories: propTypes.func.isRequired
}