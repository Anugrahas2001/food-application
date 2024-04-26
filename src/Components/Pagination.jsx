import React from "react";

const Pagination = (props) => {
  let noOfPages = [];
  for (
    let i = 1;
    i <= Math.ceil(props.totalDishes.length / props.itemPerPage);
    i++
  ) {
    noOfPages.push(i);
  }

  const showNextImages = (e) => {
    return props.setCurrentPage(e.target.id);
  };

  let pages = noOfPages.map((item) => {
    return (
      <div>
        <li id={item} onClick={showNextImages}>
          {item}
        </li>
      </div>
    );
  });

  return (

      <ul className="pagination">{pages}</ul>

  );
};

export default Pagination;
