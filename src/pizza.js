import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
width: 60%;
height: auto;
margin: 0 15%;
padding: 0 5%;
display: flex;
border: 5px solid gray;
flex-flow: column nowrap;
align-items: left;
`

export default function Pizza() {
    return (
        <StyledForm>
            <div style={{width: '100%', textAlign: 'center'}}><h2>Build your Pizza</h2></div>
            <br/>
            <label >Size <input></input></label>
        </StyledForm>
    )
}
