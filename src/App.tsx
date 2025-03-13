import React, { useState } from 'react';
import './App.css';
import { getNumbers } from './utils';
import { Pagination } from './components/Pagination';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const items = getNumbers(1, 42).map(n => `Item ${n}`);

enum ItemsPerPageSelector {
  THREE = 3,
  FIVE = 5,
  TEN = 10,
  TWENTY = 20,
}

interface Queries {
  itemsPerPage: number;
  currPage: ItemsPerPageSelector;
}

const getCurrentItems = (
  totalItems: string[],
  { itemsPerPage, currPage }: Queries,
) => {
  return totalItems.slice(
    (currPage - 1) * itemsPerPage,
    currPage * itemsPerPage,
  );
};

export const App: React.FC = () => {
  const [currPage, setCurrPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(ItemsPerPageSelector.FIVE);

  const currItems = getCurrentItems(items, { itemsPerPage, currPage });

  return (
    <div className="container">
      <h1>Items with Pagination</h1>

      <p className="lead" data-cy="info">
        {`Page ${currPage} (items ${items.indexOf(currItems[0]) + 1} - ${items.indexOf(currItems[currItems.length - 1]) + 1} of ${items.length})`}
      </p>

      <div className="form-group row">
        <div className="col-3 col-sm-2 col-xl-1">
          <select
            data-cy="perPageSelector"
            id="perPageSelector"
            value={itemsPerPage}
            className="form-control"
            onChange={event => {
              setCurrPage(1);
              setItemsPerPage(+event.target.value);
            }}
          >
            <option value={ItemsPerPageSelector.THREE}>
              {ItemsPerPageSelector.THREE}
            </option>
            <option value={ItemsPerPageSelector.FIVE}>
              {ItemsPerPageSelector.FIVE}
            </option>
            <option value={ItemsPerPageSelector.TEN}>
              {ItemsPerPageSelector.TEN}
            </option>
            <option value={ItemsPerPageSelector.TWENTY}>
              {ItemsPerPageSelector.TWENTY}
            </option>
          </select>
        </div>

        <label htmlFor="perPageSelector" className="col-form-label col">
          items per page
        </label>
      </div>

      <Pagination
        total={items.length}
        perPage={itemsPerPage}
        currentPage={currPage}
        onPageChange={setCurrPage}
      />

      <ul>
        {currItems.map((item, index) => (
          <li key={index} data-cy="item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
