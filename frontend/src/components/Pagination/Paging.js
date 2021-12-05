import React, { useState } from 'react';
import './Paging.css';
import Pagination from "react-js-pagination";

const Paging = ({total}) => {
    const [page, setPage] = useState(1);
    const handlePageChange = (page) => { setPage(page); console.log('click') };
    const handlePageChange2 = (page) => { setPage(page); console.log('no!!!') };

    if(total !== 0) {
        console.log('count5 : ' + JSON.stringify(total))
        console.log(typeof parseInt(JSON.stringify(total)))
        console.log('success!!!!!')
        return (
            <Pagination activePage={page} 
                        itemsCountPerPage={10} 
                        totalItemsCount={parseInt(JSON.stringify(total[0].COUNT))} 
                        pageRangeDisplayed={5} 
                        prevPageText={"‹"} 
                        nextPageText={"›"} 
                        onChange={handlePageChange} 
            />
        );

    } else {
        console.log('fail.....')
        return (
            <Pagination activePage={page} 
                        itemsCountPerPage={10} 
                        totalItemsCount={10} 
                        pageRangeDisplayed={5} 
                        prevPageText={"‹"} 
                        nextPageText={"›"} 
                        onChange={handlePageChange2} 
            />
        );
    }
   

    
};

export default Paging;