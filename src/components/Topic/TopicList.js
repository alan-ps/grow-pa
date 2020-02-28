import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';

import Throbber from 'components/Basic/Throbber';
import Topic from './Topic';
import { fetchTopics } from 'actions';

const TopicList = () => {
  const dispatch = useDispatch()
  const action = useSelector(state => state.actionReducer)
  const rest = useSelector(state => state.restReducer)

  useEffect(() => dispatch(fetchTopics()), []);

  return rest.fetching ?
    <Throbber /> :
    <Row className={ `category-list category-list-${ action.display }` }>
      {
        rest.topics.map(topic => (
          <Topic key={ topic.id } topic={ topic } col={ action.display === 'bars' }/>
        ))
      }
    </Row>
};

export default TopicList;
