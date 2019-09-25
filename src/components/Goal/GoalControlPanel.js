import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * Represents a form to create new goal/group.
 */
class GoalControlPanel extends React.Component {
  constructor(props) {
    super(props);

    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGoal = this.handleGoal.bind(this);
  }

  handleSwitch(event, actionItemType) {
    this.props.dispatch({
      type: 'SWITCH_FORM',
      actionItemType: actionItemType,
      value: this.props.value
    });
  }

  handleGoal(event, type) {
    const {name, value} = event.target;

    this.props.dispatch({
      type: 'SWITCH_FORM',
      actionItemType: type,
      value: value
    });
  }

  handleSubmit(event, actionItemType) {
    event.preventDefault();

    let action = {
      actionItemType: actionItemType,
      value: this.props.value,
      category: this.props.category
    };

    // Assign the values in accordance with the selected type.
    Object.assign(action, (actionItemType === 'goal') ? { settings: {group: 0, parent: 0 } } : {});

    // Save new action item and refresh a list.
    this.props.dispatch({ type: 'ACTION_ITEM_PUT_ASYNC', ...action });
    this.props.dispatch({ type: 'ACTION_ITEM_FETCH_ASYNC', categoryId: this.props.category })

    this.props.dispatch({ type: 'REFRESH_FORM' });
  }

  render() {
    const actionItemTypes = {
      goal: 'Create new goal',
      group: 'Create new category'
    };

    return (
      <div className="goal-cp">
        <div>
          <ul className="nav nav-tabs">
            {
              Object.keys(actionItemTypes).map(
                item => <li key={ item } className="nav-item">
                  <Link
                    to="#"
                    className={ `nav-link  ${ (this.props.actionItemType == item) && 'active'}` }
                    onClick = { event => this.handleSwitch(event, item) }
                  > { actionItemTypes[item] } </Link>
                </li>
              )
            }
          </ul>
        </div>
        <div>
        <Form onSubmit={event => this.handleSubmit(event, this.props.actionItemType)} >
          <Form.Row>
            <Form.Group as={Col} xs='10'>
              <Form.Control
                name="category"
                type="text"
                placeholder={ "Name of  " + this.props.actionItemType }
                onChange={ event => this.handleGoal(event, this.props.actionItemType) }
                value={this.props.value}
              />
            </Form.Group>
            <Form.Group as={Col} xs='2'>
              <Button variant="primary" type="submit">Add</Button>
            </Form.Group>
          </Form.Row>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.goalReducer });
export default connect(mapStateToProps)(GoalControlPanel);
