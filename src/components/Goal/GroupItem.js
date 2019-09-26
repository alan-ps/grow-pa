import React from 'react';
import GoalItem from 'components/Goal/GoalItem';

/**
 * Represents a single group item.
 */
class GroupItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visibility: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({visibility: !this.state.visibility})
  }

  render() {
    const groupVisibility = this.state.visibility ? 'hidden' : 'active';

    return (
      <React.Fragment>
        <div className="goal-list__group" onClick={this.handleClick}>
          {this.props.name}
        </div>
        <div className={`goal-list__items goal-list__items--${groupVisibility}`} >
          {
            this.props.goals.map(goal => (
              goal.settings.group == this.props.id ? (
                <GoalItem key={ goal.id } name={ goal.value } />
              ) : false
            ))
          } 
        </div>
      </React.Fragment>
    )
  }
}

export default GroupItem;
