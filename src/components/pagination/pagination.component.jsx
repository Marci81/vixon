import React from "react";
import {PaginationContainer} from "./pagination.style";

const Pagination = props => (
  <div className="mt-5">
    <nav>
      <PaginationContainer className="pagination justify-content-center">
        <li className="page-item PageItem">
          <a className="page-link PageLink" href="#" aria-label="Previous">
            <span aria-hidden="true">«</span>
          </a>
        </li>
        <li className="page-item PageItem">
          <a className="page-link PageLink" href="#">
            1
          </a>
        </li>
        <li className="page-item PageItem">
          <a className="page-link PageLink" href="#">
            2
          </a>
        </li>
        <li className="page-item PageItem">
          <a className="page-link PageLink" href="#">
            3
          </a>
        </li>
        <li className="page-item PageItem">
          <a className="page-link PageLink" href="#">
            4
          </a>
        </li>
        <li className="page-item PageItem">
          <a className="page-link PageLink" href="#">
            5
          </a>
        </li>
        <li className="page-item PageItem">
          <a className="page-link PageLink" href="#" aria-label="Next">
            <span aria-hidden="true">»</span>
          </a>
        </li>
      </PaginationContainer>
    </nav>
  </div>
);

export default Pagination;
