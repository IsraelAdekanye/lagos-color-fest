import React, { useState } from 'react';
import logo from '../lagoscolorfestdp1.png'
import '../App.css';

function Register() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');



    const createAttendee = async(e)=> {
        e.preventDefault()
        const postParams = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {firstName, lastName, email,
                phoneNumber, gender
            })
        }
        console.log(gender)
        await fetch('http://localhost:3033/register', postParams)
        .then(res => {
            if (res.status === 200) {
                console.log(res)
                setFirstName(''); setLastName(''); setEmail(''); 
                setPhoneNumber(''); setGender('');
                
            }
         })
    }

  
  return (

    <div className='row'>
        <div className="col-md-12">
        <form onSubmit={createAttendee}>
        <img src={logo} alt="Lagos Color Fest Logo"/>
        <h1> Register to Attend</h1>
        <fieldset>
    
        <label>First Name:</label>
        <input type="text" id="name" name="user_name" placeholder='Chukwuma' 
        onChange={e => setFirstName(e.target.value.trim())} value={firstName} required/>
    
        <label>Surname:</label>
        <input type="text" id="name" name="user_name" placeholder='Ciroma'
        onChange={e => setLastName(e.target.value.trim())} value={lastName} required/>
      
        <label>Email:</label>
        <input type="email" id="mail" name="user_email" placeholder='example@abc.com'
        onChange={e => setEmail(e.target.value.trim())} value={email} required/>
    
        <label>Phone Number:</label>
        <input type="tel" id="phone" name="phone" placeholder='08023456789'
        onChange={e => setPhoneNumber(e.target.value.trim())} value={phoneNumber} required/>
    
        <div className="formRadio" onChange={e => {setGender(e.target.value); }} >
          <label>Gender:</label>
    
          <input type="radio" value="Male" name="gender" required/>
          <label className="light">Male</label><br/>
          
          <input type="radio" value="Female" name="gender"/>
          <label className="light">Female</label>
        </div>
        </fieldset>
    
        <button type="submit">Register</button>
        </form>
        </div>
      </div>
    
      
  );
}

export default Register;
