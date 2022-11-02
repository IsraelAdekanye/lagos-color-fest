import axios from "axios";
import { useEffect } from "react";

const ViewAttendees = () => {

    const loadAttendees = async () => {
        await axios.get(`https://lagos-color-fest-server.herokuapp.com/getAll`)
        .then(res =>{
            if(!res.status===200)return;
            console.log(res.data);
        })
        .catch(err=>{
            console.error(err.error);
        })
    }
    useEffect(loadAttendees, []);

    // const viewAttendees = async()=> {
    //     const postParams = {
    //         method: 'GET',
    //         headers: { 'Content-Type': 'application/json' },
    //         // body: JSON.stringify(
    //         //     {firstName, lastName, email,
    //         //     phoneNumber, gender
    //         // })
    //     }
    //     await fetch('http://localhost:3033/getAll', postParams)
    //     .then(res => {
    //         if (res.status === 200) {
    //             console.log(res.json())
    //         }
    //      })
    // }


  return (
      null

  );
}

export default ViewAttendees;
