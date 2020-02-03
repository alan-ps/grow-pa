import React from 'react';
import { Link } from 'react-router-dom';

import { getCode } from 'utils/helpers';

/**
 * Represents a single category component.
 */
const Category = ({ item, col }) => (
  <Link to={`/categories/${ item.key }`} className={ `category-list__item ${ col ? 'col-md-3' : '' }` }>
    <div className="category-list__item-show">
      <div className="code"> { getCode(item.title) } </div>
    </div>
    <div className="category-list__item-title">{ item.title }</div>
  </Link>
);

export default Category;
