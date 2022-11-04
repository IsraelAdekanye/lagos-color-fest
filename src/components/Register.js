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
    const [uuid, setUUID] = useState('')

    
    const createAttendee = async(e)=> {
        e.preventDefault()
        setUUID((Date.now().toString(36) +'-'+ Math.random().toString(36).substring(2)).toUpperCase())
        const postParams = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {firstName, lastName, email,
                phoneNumber, gender, uuid
            })
        }
        await fetch(process.env.REACT_APP_REGISTER_URL, postParams)
        .then(res => {
            if (res.status === 200) {
              setStatus(true)
                
                // setFirstName(''); setLastName(''); setEmail(''); 
                // setPhoneNumber(''); setGender('');
                
            }
         })
    }


    const registrationForm = () => {
      
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
        <input type="email" id="mail" name="user_email" placeholder='example@abc.com'
        onChange={e => setEmail(e.target.value.trim())} value={email} required/>
    
        <label>Phone Number:</label>
        <input type="tel" id="phone" name="phone" placeholder='08023456789' pattern="[0]{1}[0-9]{10}"
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

    const successPage = () => {
      return (<form>
      <section>
        {/* <div className="card"> */}
        <div className="cond2Div">
          <i className="checkmark">✓</i>
        </div>
          <h1 className="success">Registration Successful</h1> 
          <br/>
          <p>Thank you <b>{firstName}</b> <br/><br/> Your Reservation Code is <br/><b>{uuid}</b><br/><br/>Your ticket is on its way to your mail!</p>
        {/* </div> */}
      </section>
      </form>)
    }

  return (
    <div>
      {submitted? 
      successPage()
       :
       registrationForm()
       }
    </div>
  );
}

export default Register;
