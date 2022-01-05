import React from 'react';
import './Paging.css';
import Pagination from "react-js-pagination";

const Paging = ({page, count, setPage}) => {

        return (
            <Pagination activePage={page && page.page} 
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