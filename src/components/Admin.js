import axios from "axios";
import { useEffect, useState } from "react";


const ViewAttendees = () => {
  


      const getData = async() => {  
        await axios.get(process.env.REACT_APP_GET_DATA_URL)
        .then(res =>{
            if(!res.status===200)return;
            //console.log(res)
            setData(res.data)
            //console.log(data)
        })
        .catch(err=>{
            console.error(err.error);
        })
      }
  useEffect(()=>{getData()})

  const [data, setData] = useState([]);
  return (
    <div  style={{display : "flex",minHeight : "100vh" }}>
            <div className="students">
                <h1>Attendees</h1>
                {/* <input type="search" placeholder="Search for Attendees" ></input> */}
                <table>
                    <thead>
                        <tr className="studentsThead">
                            <th>S/N</th>
                            <th> First Name</th> 
                            <th>Last Name</th> 
                            <th>Phone Number</th> 
                            <th>Gender</th> 
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map( (data, index) => {
                        return <tr key={index}>
                            <td>{index + 1} </td> 
                            <td>{data.firstName.toUpperCase()}</td> 
                            <td>{data.lastName.toUpperCase()}</td> 
                            <td> {data.phoneNumber} </td>
                            <td> {data.gender }</td>
                            <td> {data.email} </td>
                        </tr> } )}
                    </tbody>
                </table>
            </div>
        </div>
   

  );
}

export default ViewAttendees;
