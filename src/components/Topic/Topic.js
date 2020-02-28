import React from 'react';
import { Link } from 'react-router-dom';
import { getCode } from 'utils/helpers';

const Topic = ({ topic, col }) => (
  <React.Fragment>
    <Link to={`/topics/${topic.id}`} className={ `category-list__item ${ col ? 'col-md-3' : '' }` }>
        <div className="category-list__item-show">
        <div className="code"> { getCode(topic.name) } </div>
        </div>
        <div className="category-list__item-title">{ topic.name }</div>
    </Link>
  </React.Fragment>
);

export default Topic;
