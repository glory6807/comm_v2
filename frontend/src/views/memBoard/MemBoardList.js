import React, { useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import AxiosData from "utils/MemberAxios.js"

import {
 Card,
 CardHeader,
 Container,
 Row,
} from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import MemBoardCntn from "./MemBoardCntn.js";
import Paging from "components/Pagination/Paging.js";

const MemBoard = () => {
 const dispatch = useDispatch();
 const { memDatas, count, page } = useSelector((state) => ({ memDatas : state.mem.memDatas,
                                                              count : state.mem.count,
                                                              page : state.mem.page }));
 
 //setTotal(count)
 function MemList() {
    AxiosData.getList().then(
      function(result){
       dispatch(result);
      }
    )
   
 }
 
 useEffect(MemList, []);

 const setPage = useCallback( (page) => { 
   AxiosData.getList(page).then(
     function(result){
      dispatch(result);
     }
   )
  }, [dispatch] );







 //scroll
 const mainContent = useRef(null);
 const location = useLocation();

 useEffect(() => {
   document.body.classList.add("bg-default");
   return () => {
     document.body.classList.remove("bg-default");
   };
 }, []);
 useEffect(() => {
   document.documentElement.scrollTop = 0;
   document.scrollingElement.scrollTop = 0;
   mainContent.current.scrollTop = 0;
 }, [location]);

 return (
   
   <>
     <div className="main-content" ref={mainContent}>
     <AuthNavbar />
     <div className="header bg-gradient-info py-7 py-lg-8">
       <Container>  
         <Row>
           <div className="col">
             <Card className="shadow">
               <CardHeader className="border-0">
                 <h3 className="mb-0">회원 게시판</h3>
               </CardHeader>                
                 <MemBoardCntn memDatas={memDatas}/>
                 <Paging page={page} count={count} setPage={setPage}/>
             </Card>
           </div>
         </Row>
       </Container>
     </div>
     </div>
     <AuthFooter />
   </>
 );
};

export default MemBoard;
