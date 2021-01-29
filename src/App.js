import React from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Pizza from './pizza'
import Home from './home'
import styled from 'styled-components'
const StyledNav = styled.nav`
border-bottom: 5px solid gray;
ul{
list-style: none;
display: flex;
flex-flow: row nowrap;
li:hover{
  background-color: #e3e8f9;
  color: black;
}
li{
  width: 100px;
  height: 25px;
  border: 2px solid gray;
  color: black;
  text-align: center;
}
a{
  text-decoration: none;
  color: black;
}
`
const App = () => {
  return (<>
  <Router>
    <StyledNav>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/pizza'><li>Order</li></Link>
      </ul>
    </StyledNav>
    <h1 style={{textAlign: 'center', fontSize: '3rem'}}>Bianchi Pizza Pies</h1>

    <Route exact path='/' component={Home}/>
    <Route path='/pizza' component={Pizza}/>

  </Router>
</>)};
export default App;
