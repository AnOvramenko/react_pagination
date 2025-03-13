import React from 'react';
import { getNumbers } from '../../utils';
import cn from 'classnames';

interface Props {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages: number[] = getNumbers(1, Math.ceil(total / perPage));

  return (
    <ul className="pagination">
      <li
        className={cn('page-item active', {
          disabled: currentPage === 1,
        })}
        // className={`page-item ${currentPage === 1 ? 'disabled' : 'active'}`}
      >
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          aria-disabled={currentPage === 1}
          onClick={() => currentPage !== 1 && onPageChange(currentPage - 1)}
        >
          «
        </a>
      </li>

      {/* //---------------------------------------- */}

      {totalPages.map(elem => {
        return (
          <li
            className={cn('page-item', {
              active: currentPage === elem,
            })}
            key={elem}
          >
            <a
              data-cy="pageLink"
              className="page-link"
              href="#2"
              onClick={() => {
                onPageChange(elem);
              }}
            >
              {elem}
            </a>
          </li>
        );
      })}
      {/* //---------------------------------------- */}

      {/* //---------------------------------------- */}
      <li
        className={cn('page-item active', {
          disabled: currentPage === totalPages.length,
        })}
      >
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled={currentPage !== totalPages.length ? 'false' : 'true'}
          onClick={() =>
            currentPage !== totalPages.length && onPageChange(currentPage + 1)
          }
        >
          »
        </a>
      </li>
    </ul>
  );
};
/*
/* <li className="page-item active">
        <a data-cy="pageLink" className="page-link" href="#1">
          1
        </a>
      </li> */

/* <li className="page-item active">
        <a data-cy="pageLink" className="page-link" href="#1">
          1
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#2">
          2
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#3">
          3
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#4">
          4
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#5">
          5
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#6">
          6
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#7">
          7
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#8">
          8
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#9">
          9
        </a>
      </li> */
