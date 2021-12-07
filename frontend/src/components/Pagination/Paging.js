import React from 'react';
import './Paging.css';
import Pagination from "react-js-pagination";

const Paging = ({page, count, setPage}) => {

        console.log('page : ' + JSON.stringify(page))
        console.log('count : ' + JSON.stringify(count))
        console.log('setPage : ' + JSON.stringify(setPage))

        return (
            <Pagination activePage={page && page} 
                        itemsCountPerPage={10} 
                        totalItemsCount={count && count[0].COUNT} 
                        pageRangeDisplayed={5} 
                        prevPageText={"‹"} 
                        nextPageText={"›"} 
                        onChange={setPage} 
            />
        );
};

export default Paging;