import React, {useState,useEffect} from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components'
import Form from './form'
import * as yup from 'yup'
import schema from './validation/formSchema'

const Order = styled.div`
width: 100%;
height: auto;
display: flex;
flex-flow: row wrap;

`
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

const formReset = {size: '',sauce: '',cheese: false, pepperoni: false, sausage: false, onions: false, olives: false, peppers: false, anchovies: false, pineapple: false,instructions: '',}
const initialFormErr = {size: '',sauce: '',cheese: '', pepperoni: '', sausage: '', onions: '', olives: '', peppers: '', anchovies: '', pineapple: '',instructions: '',}
const App = () => {
  const [formData, setFormData] = useState(formReset)
  const [orders, setOrders] = useState([])
  const [disabled, setDisabled] = useState(true)
  const [formErr, setFormErr] = useState(initialFormErr)

  const getOrders = ()=>{
    axios.get(`https://reqres.in/api/users`).then(res=>setOrders(res.data.data))
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    getOrders()
  },[])
  useEffect(()=>{
    schema.isValid(formData).then(valid=>{
      setDisabled(valid)
    })
  },[formData])


  const createNewOrder = newOrder => {
    axios.post(`https://reqres.in/api/users`, newOrder).then(res=>{
      setOrders([res, ...orders]);
      setFormData(formReset)
    })
    .catch(err=>console.log(err))
    // debugger
  }

  const formSubmit = ()=>{
    const newOrder = {
      size: formData.size,
      sauce: formData.sauce,
      cheese: formData.cheese, pepperoni: formData.pepperoni, sausage: formData.sausage, onions: formData.onions, olives: formData.olives, peppers: formData.peppers, anchovies: formData.anchovies, pineapple: formData.pineapple,
      instructions: formData.instructions.trim(),
    }
    createNewOrder(newOrder);
  }

  const inputChange = (name, value) => {
    yup.reach(schema, name).validate(value).then(()=>{
      setFormErr({...formErr, [name]: ''})
    }).catch(err => {
      setFormErr({...formErr, [name]: err.errors[0]})
    })
    setFormData({...formData, [name]: value})
  }
  // const inputChange = (name, value)=>{
  //   yup.reach(schema, name).validate(value).then(()=>{
  //     setFormErr({...formErr, [name]: ''})
  //   }).catch(err=>setFormErr({...formErr, [name]:err.errors[0]}))
  //   setFormData({...formData, [name]: value})
  // }

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
    <Form formData={formData} inputChange={inputChange} disabled={disabled} formErr={formErr}formSubmit={formSubmit}/>
    {/* <Order>
      {orders.map((orderData)=>{
        return(
          <div>
            <h3>Added to order</h3>
            <p>{`${orderData.data.size} pizza with ${orderData.data.sauce}`}</p>
          </div>
        )
      })}
    </Order> */}
    </>
  );
};
export default App;
