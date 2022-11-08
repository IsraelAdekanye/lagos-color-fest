import React from 'react';

const Pagination = ({ dataPerPage, totalData, paginate, setDataPerPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className='pagination'>
        {pageNumbers.map( (number) => {
          return ( <span key={number} className='page-item'>
            <a onClick={() => paginate(number)} href className='page-link'>
              {number}
            </a>
          </span>
          )
        })}
      </div>
      <div className=''>
                <label>Rows</label>
                <select onChange={e=> setDataPerPage(e.target.value)} >
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='15'>15</option>
                    <option value='20'>20</option>
                </select>
            </div>
    </nav>
  );
};

export default Pagination;