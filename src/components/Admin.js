import axios from "axios";

const ViewAttendees = () => {

    let data = [];

        axios.get(`https://lagos-color-fest-server.herokuapp.com/getAll`)
        .then(res =>{
            if(!res.status===200)return;
            //console.log(res)
            data = res.data
            console.log(data)
        })
        .catch(err=>{
            console.error(err.error);
        })

  return (
    <div>
      {data.map((data, index) =>{
            return <tr key={index}>
            <td>{index} </td> 
            <td>{data.firstname.toUpperCase()}</td> 
            <td>{data.lastname.toUpperCase()}</td> 
            <td> {data.phoneNumber} </td>
            <td> {data.gender }</td>
            <td> {data.email} </td>
        </tr>
          })}
    {data[0].firstname}
      </div>

  );
}

export default ViewAttendees;
