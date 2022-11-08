import React from 'react';

const Dataset = ({ data, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <tbody>
        {data.map( (data, index) => {
        return <tr key={index}>
            <td>{index + 1}</td> 
            <td>{data.firstName.toUpperCase()}</td> 
            <td>{data.lastName.toUpperCase()}</td> 
            <td>{data.phoneNumber}</td>
            <td>{data.uuid}</td>
            <td>{data.gender}</td>
            <td>{data.email}</td>
        </tr> } )}
    </tbody>
  );
};

export default Dataset;
