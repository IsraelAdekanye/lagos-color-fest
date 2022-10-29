import React, { useState } from 'react';

import './App.css';

function App() {

  const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [PhoneNumber, setPhoneNumber] = useState('')
    const [Address, setAddress] = useState('')
    const [Gender, setGender] = useState('')

  return (
    // <div className="App">
    // {/* <form className="newEntry" onSubmit={null} >
    //         <div className="flexthree">
    //           <div className="formNames"> 
    //               <label> First Name </label>
    //               <input type="text" onChange={e => setFirstName(e.target.value)} value={FirstName} required />
    //               <label> Last Name </label>
    //               <input type="text" onChange={e => setLastName(e.target.value)} value={LastName} required />
    //               <label> Email </label>
    //               <input type="email" onChange={e => setEmail(e.target.value)} value={Email} required />
    //         </div>
    //         <div className="formClass">
    //               <label> PhoneNumber </label>
    //               <input type='phone' onChange={e => setPhoneNumber(e.target.value)} value={PhoneNumber} required />
    //               <label> Home Address </label>
    //               <input type='text' onChange={e => setAddress(e.target.value)} value={Address} required ></input>
    //         </div>
    //         </div>
    //         <div className="formRadio" onChange={e => setGender(e.target.value)} >
    //           <label htmlFor="male"> Male </label>
    //           <input type="radio" name="gender" value="MALE"  />
    //           <label htmlFor="female"> Female </label>
    //           <input type="radio" name="gender" value="FEMALE" /> 
    //         </div> 
      
    //       <button type="submit" >Submit</button>  
    //     </form> */}

        
    // </div>

    <div className='row'>
      <div className="col-md-12">
      <form action="index.html" method="post">
      <h1> Register </h1>
      <fieldset>
        
      {/* <legend><span className="number">1</span> Your Basic Info</legend> */}

      <label for="name">First Name:</label>
      <input type="text" id="name" name="user_name" placeholder='Chukwuma'/>

      <label for="name">Surname:</label>
      <input type="text" id="name" name="user_name" placeholder='Ciroma'/>
    
      <label for="email">Email:</label>
      <input type="email" id="mail" name="user_email" placeholder='example@abc.com'/>
  
      <label for="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone" placeholder='08023456789'/>

      <label>Date of Birth</label>
      <input type='date'></input>
    
      <label>Gender:</label>
      <input type="radio" id="male" value="male" name="male"/><label for="male" className="light">Male</label><br/>
      <input type="radio" id="female" value="female" name="female"/><label for="female" className="light">Female</label>
      
      
      </fieldset>

      {/* <fieldset>
      <legend><span className="number">2</span> Your Profile</legend>

      <label for="bio">Bio:</label>
        <textarea id="bio" name="user_bio"></textarea>

        <label for="job">Job Role:</label>
      <select id="job" name="user_job">
        <optgroup label="Web">
          <option value="frontend_developer">Front-End Developer</option>
          <option value="php_developer">PHP Developer</option>
          <option value="python_developer">Python Developer</option>
          <option value="rails_developer">Rails Developer</option>
          <option value="web_designer">Web Designer</option>
          <option value="wordpress_developer">Wordpress Developer</option>
        </optgroup>
        <optgroup label="Mobile">
          <option value="android_developer">Android Developer</option>
          <option value="ios_developer">IOS Developer</option>
          <option value="mobile_designer">Mobile Designer</option>
        </optgroup>
        <optgroup label="Business">
          <option value="business_owner">Business Owner</option>
          <option value="freelancer">Freelancer</option>
        </optgroup>
      </select>

      <label>Interests:</label>
      <input type="checkbox" id="development" value="interest_development" name="user_interest"/><label className="light" for="development">Development</label><br/>
      <input type="checkbox" id="design" value="interest_design" name="user_interest"/><label className="light" for="design">Design</label><br/>
      <input type="checkbox" id="business" value="interest_business" name="user_interest"/><label className="light" for="business">Business</label>
      </fieldset> */}

      <button type="submit">Register</button>
      </form>
      </div>
    </div>
      
  );
}

export default App;
