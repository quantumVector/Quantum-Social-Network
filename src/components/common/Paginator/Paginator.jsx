import React from 'react';
import classes from './Paginator.module.css';

const Paginator = ({ totalFriendsCount, pageSize, currentPage, onPageChanged }) => {
  let pagesCount = Math.ceil(totalFriendsCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div className={classes.selectPage}>
    {
      pages.map(p => {
        return <span className={currentPage === p && classes.selected} onClick={(e) => { onPageChanged(p) }}>{p}</span>
      })
    }
  </div>
}

export default Paginator;