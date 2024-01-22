import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';
import "./home.css";
import Home from './Home';
import { NavLink } from 'react-router-dom';
const Login = () => {
    const [inputvalue,setInputvalue]=useState({
        email:"",
        password:""
    });
    const[data,setData]=useState([]);
    const getdata=(e)=>{
        // console.log(e.target.value);
        const{value,name}=e.target;
        // console.log(value,name);
        setInputvalue(()=>{
            return{
                ...inputvalue,
                [name]:value
            }
        })

    }
    const addData=(e)=>{
        e.preventDefault();
        const{name,email,phone,password}=inputvalue;
        if(name===""){
            alert("Please enter the Name field");
        }else if(email===""){
            alert("Please enter email");
        }else if(!email.includes("@")){
            alert("Please enter valid email");
        }else if(phone===""){
            alert("Please enter phone number")
        }else if(password===""){
            alert("Please enter the password")
        }else if(password.length <5){
            alert("Password length must be greter than 5 ")
        }else{
            console.log("Data added sucessfully");
            localStorage.setItem("newuser",JSON.stringify([...data,inputvalue]));
        }
    }
  return (
    <div className='Container mt-3 mx-5'>
    <section className='d-flex justify-content-between'>
     <div className='left_content border  mt-5 p-5' style={{width:"100%"}}>
         <div className='xyz'>
         <h3 className='text-center col-lg-8'>Login</h3>
     <Form>
       <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
         <Form.Control type="mail" name="email" onChange={getdata} placeholder="Enter Email" />
       </Form.Group>
       <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
         <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" />
       </Form.Group>
       <Button variant="primary" className='col-lg-8' onClick={addData}style={{background:"rgb(67,185,127)"}} type="submit">
         Submit
       </Button>
     </Form>
     <p className='mt-3'>Already Have an Account <span><NavLink to="/Home">SignIn</NavLink></span></p>
         </div>
     </div>
     <Sign_img/>
    </section>
    </div>
  )
}

export default Login
