import React from 'react';
import { Link } from 'react-router-dom';

import { getCode } from 'utils/helpers';

/**
 * Represents a single category component.
 */
const Category = ({ item }) => (
  <Link to='#' className="category-list__item col-md-3">
    <div className="category-list__item--empty">
      <div className="code"> { getCode(item.title) } </div>
    </div>
    <div className="name">{ item.title }</div>
  </Link>
);

export default Category;
