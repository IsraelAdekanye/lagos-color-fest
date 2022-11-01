

const ViewAttendees = () => {

    const viewAttendees = async()=> {
        const postParams = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(
            //     {firstName, lastName, email,
            //     phoneNumber, gender
            // })
        }
        await fetch('http://localhost:3033/getAll', postParams)
        .then(res => {
            if (res.status === 200) {
                console.log(res.json())
            }
         })
    }


  return (
      null

  );
}

export default ViewAttendees;
