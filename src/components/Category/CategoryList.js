import React from 'react';
import { connect } from 'react-redux';

import Row from 'react-bootstrap/Row';

import Throbber from 'components/Basic/Throbber';
import Category from './Category';
import CategoryNew from './CategoryNew';

/**
 * Represents a component to render a list of categories.
 */
class CategoryList extends React.Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_CATEGORIES',
      payload: { ...this.props.restReducer }
    });
  }

  render() {
    let render = [];

    if (!this.props.restReducer.categories) {
      // Add a throbber loader before we wait for a response.
      render.push(<Throbber />);
    }
    else {
      render.push((
        <Row className={ `category-list category-list-${ this.props.actionReducer.display }` }>
          {
            this.props.restReducer.categories.map(item => (
              <Category item = { item } col= { this.props.actionReducer.display === 'bars' }/>
            ))
          }
          <CategoryNew />
        </Row>
      ));
    }

    return render;
  }

}

const mapStateToProps = state => ({ ...state });
export default connect(mapStateToProps)(CategoryList);
