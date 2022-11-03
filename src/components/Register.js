import React, { useState} from 'react';
import logo from '../lagoscolorfestdp1.png'
import '../App.css';

function Register() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [submitted, setStatus] = useState(false);

    
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
        await fetch('https://lagos-color-fest-server.herokuapp.com/register', postParams)
        .then(res => {
            if (res.status === 200) {
              setStatus(true)
                
                // setFirstName(''); setLastName(''); setEmail(''); 
                // setPhoneNumber(''); setGender('');
                
            }
         })
    }


    const cond1 = () => {
      return(
        <div className='row'>
        <div className="col-md-12">
        <form onSubmit={createAttendee}>
        <img src={logo} alt="Lagos Color Fest Logo"/>
        <h1 className='registerH1'> Register to Attend</h1>
        <fieldset>
    
        <label>First Name:</label>
        <input type="text" id="name" name="user_name" 
        onChange={e => setFirstName(e.target.value.trim())} value={firstName} required/>
    
        <label>Surname:</label>
        <input type="text" id="name" name="user_name" 
        onChange={e => setLastName(e.target.value.trim())} value={lastName} required/>
      
        <label>Email:</label>
        <input type="email" id="mail" name="user_email" 
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
      )
    }

    const cond2 = () => {
      return (<form>
      <section>
        {/* <div className="card"> */}
        <div className="cond2Div">
          <i className="checkmark">✓</i>
        </div>
          <h1 className="success">Success</h1> 
          <br/>
          <p>Thank you <b>{firstName}</b> <br/><br/> Your ticket is on its way to your mail!</p>
        {/* </div> */}
      </section>
      </form>)
    }

  return (
    <div>
      {submitted? cond2() : cond1()}
    </div>
  );
}

export default Register;
