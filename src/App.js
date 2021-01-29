import React, {useState,useEffect} from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components'
import Form from './form'


const StyledNav = styled.nav`
width: 100%;
height: auto;
display: flex;
flex-flow: row nowrap;
justify-content: center;
border-bottom: 5px solid #000c7a;
ul{
  width: 90%;
  height: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: end;
  // border: 1px solid red;
  // text-decoration: none;
  li{
    height: 40px;
    width: 100px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-itmes: center;
    border: 1px solid gray;
    padding-top: 10px;
    background-color: #000c7a;
    color: white;
    // text-decoration: none !important;
    border: 3px solid grey;
    a{
      color: white;
      text-decoration: none;
    }
  }
}
`

const formReset = {}
const App = () => {
  const [formData, setFormData] = useState(formReset)
  return (<>
    <Router>
      <StyledNav>
        <ul>
          <li><Link style={{ textDecoration: 'none' }} to="/">Home</Link></li>
          <li><Link style={{ textDecoration: 'none' }} to='/pizza'>Order</Link></li>
        </ul>
      </StyledNav>
    </Router>
    <h1 style={{textAlign: 'center'}}>Bianchi's Pizza</h1>
    <Form/>

    </>
  );
};
export default App;
