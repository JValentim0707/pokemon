import React from "react";

const Pagination = (props) => {
    const pageNumbers = props.pageNumbers;

    return(
        <div>
            <ul class="pagination" style={{ justifyContent: "center"}}>
                {pageNumbers.map((number, i) => (
                    <li key={i} className="page-item">
                        <a onClick={e => props.selectPage(i + 1)} href="!#" className="page-link">
                            {i + 1}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Pagination