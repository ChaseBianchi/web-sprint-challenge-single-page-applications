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
width: 400px;
height: auto;
padding: 0 20% 10% 20%;
border: 5px solid gray;
`

export default function Form() {
    return (
        <ContainerDiv>
            
            <FormStyled>
            <h2>Build your own pizza</h2>
                <label htmlFor='size'>Size</label><br/>
                <select name='size'>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
                <br/><br/>
                <label>Sauce</label><br/>
                <label><input type="radio" value="sauce1" checked={false} />House Sauce</label><br/>
                <label><input type="radio" value="sauce2" checked={false} />White Sauce</label><br/>
                <label><input type="radio" value="sauce3" checked={false} />BBQ Sauce</label>
                <br/><br/>
                <ToppingsDiv>
                <label>Toppings</label>
                <label><input type='checkbox' value='cheese'/>Extra Cheese</label>
                <label><input type='checkbox' value='pepperoni'/>Pepperoni</label>
                <label><input type='checkbox' value='sausage'/>Sausage</label>
                <label><input type='checkbox' value='onions'/>Onions</label><br/>
                <label><input type='checkbox' value='olives'/>Olives</label>
                <label><input type='checkbox' value='peppers'/>Peppers</label>
                <label><input type='checkbox' value='anchovies'/>Anchovies</label>
                <label><input type='checkbox' value='pineapple'/>Pineapple</label>
                </ToppingsDiv><br/><br/>
                
                
            </FormStyled>
        </ContainerDiv>
    )
}
