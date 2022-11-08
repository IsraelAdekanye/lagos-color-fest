import axios from "axios";
import React, { useEffect, useState } from "react";
import Dataset from "./Dataset";
import Pagination from "./Paginate";


const ViewAttendees = () => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(5);


      
  useEffect(()=>{
    const getData = async() => {  
      setLoading(true);
      await axios.get(process.env.REACT_APP_GET_DATA_URL)
      .then(res =>{
          if(!res.status===200)return;
          //console.log(res)
          setData(res.data)
          setLoading(false)
          //console.log(data)
      })
      .catch(err=>{
          //console.error(err.error);
      })
    };
    getData();
  }, [])

  // Get current Dataset
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div  style={{display : "flex",minHeight : "100vh" }}>
    <div className="students">
        <h1>Attendees</h1>
        <h5>Total {data.length}</h5>

        {/* <input type="search" placeholder="Search for Attendees" ></input> */}
        <table>
            <thead>
                <tr className="studentsThead">
                    <th>S/N</th>
                    <th> First Name</th> 
                    <th>Last Name</th> 
                    <th>Phone Number</th> 
                    <th>Reg. ID</th> 
                    <th>Gender</th> 
                    <th>Email</th>
                </tr>
            </thead>
           <Dataset data={currentData} loading={loading} /> 
        </table>
        
            <Pagination dataPerPage={dataPerPage} totalData={data.length} 
            paginate={paginate} setDataPerPage={setDataPerPage} />
    </div>
</div>
    
   

  );
}

export default ViewAttendees;
