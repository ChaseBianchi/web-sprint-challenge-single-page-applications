import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const ContainerDiv = styled.div`
display: flex;
flex-flow: column nowrap;
width: 100%;
height: auto;
align-items: center;
// justify-content: center;
`
const ToppingsDiv = styled.div`
width: 50%;
height: 110px;
display: flex;
flex-flow: column wrap;

`
const FormStyled = styled.form`
width: 300px;
height: auto;
padding: 0 5% 5% 5%;
border: 5px solid gray;
background-color: white;
button{
    width: 120px;
    height: 40px;
    border: 3px solid rgb(0,12,122,.5)
}
button:hover{
    border: 3px solid rgb(0,12,122,1);;
    background-color: rgb(0,12,122,.5);
    color: white;
}
`

export default function Form(props) {
const {formData, inputChange, formSubmit, disabled, formErr} = props

const onChange = evt =>{
    const {name, value, type, checked} = evt.target;
    const useValue = type==='checkbox' ? checked : value;
    inputChange(name, useValue);
}
const submit = evt => {
        evt.preventDefault();
        formSubmit()
      }


    return (
        <ContainerDiv>
            
            <FormStyled onSubmit={submit}>
            <h2>Build your own pizza</h2>
                <label htmlFor='size'>Size</label><br/>
                <select name='size'>
                    <option onChange={onChange} value=''>--Choose Size--</option>
                    <option onChange={onChange} value='small'>Small</option>
                    <option onChange={onChange} value='medium'>Medium</option>
                    <option onChange={onChange} value='large'>Large</option>
                </select>
                <br/><br/>
                <label>Sauce</label><br/>
                <label><input onChange={onChange} type="radio" name='sauce' value="sauce1" checked={formData.sauce==='sauce1'} />House Sauce</label><br/>
                <label><input onChange={onChange} type="radio" name='sauce' value="sauce2" checked={formData.sauce==='sauce2'} />White Sauce</label><br/>
                <label><input onChange={onChange} type="radio" name='sauce' value="sauce3" checked={formData.sauce==='sauce3'} />BBQ Sauce</label>
                <br/><br/>
                <ToppingsDiv>
                <label>Toppings</label>
                <label><input onChange={onChange} type='checkbox' name='cheese' checked={formData.cheese}/>Cheese</label>
                <label><input onChange={onChange} type='checkbox' name='pepperoni' checked={formData.pepperoni}/>Pepperoni</label>
                <label><input onChange={onChange} type='checkbox' name='sausage' checked={formData.sausage}/>Sausage</label>
                <label><input onChange={onChange} type='checkbox' name='onions' checked={formData.onions}/>Onions</label><br/>
                <label><input onChange={onChange} type='checkbox' name='olives' checked={formData.olives}/>Olives</label>
                <label><input onChange={onChange} type='checkbox' name='peppers' checked={formData.peppers}/>Peppers</label>
                <label><input onChange={onChange} type='checkbox' name='anchovies' checked={formData.anchovies}/>Anchovies</label>
                <label><input onChange={onChange} type='checkbox' name='pineapple' checked={formData.pineapple}/>Pineapple</label>
                </ToppingsDiv><br/><br/>
                <label>Instructions<br/><input type='text' name='instructions' style={{width: '100%'}}/></label>
                <br/><br/><br/>
                <button disabled={disabled}>Add to Order</button>
                <div>{formErr.size}</div>
                <div>{formErr.sauce}</div>
                <div>{formErr.toppings}</div>
                <div>{formErr.instructions}</div>
            </FormStyled>
        </ContainerDiv>
    )
}
