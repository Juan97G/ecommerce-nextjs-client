import React from 'react';
import {Pagination as PaginationSU} from "semantic-ui-react";
import {useRouter} from "next/router";
import queryString from "query-string";

const Pagination = (props) => {

   /* DESTRUCTURING */
   const {totalGames, page, limitPerPage} = props;

   const totalPages = Math.ceil(totalGames / limitPerPage);


   /* HOOKS */
   const router = useRouter();
   const urlParse = queryString.parseUrl(router.asPath);


   /* FUNCTIONS */
   const goToPage = (newPage) => {
      urlParse.query.page = newPage;
      const url = queryString.stringifyUrl(urlParse);
      router.push(url);
   }

   return (
      <div className="pagination">
         <PaginationSU
            defaultActivePage={page}
            totalPages={totalPages}
            firstItem={null}
            lastItem={null}
            onPageChange={(_, data) => goToPage(data.activePage)}
            boundaryRange={0}
            siblingRange={1}
            ellipsisItem={null}
         />
      </div>
   );
};

export default Pagination;
