import React from 'react';
import { connect } from 'react-redux';

import Throbber from 'components/Basic/Throbber';
import GroupItem from 'components/Goal/GroupItem';

import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

/**
 * Represents a component to render a list of goal/groups.
 */
class GoalList extends React.Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'ACTION_ITEM_FETCH_ASYNC',
      categoryId: this.props.categoryId
    });
  }

  render() {
    // @TODO: replace the goals name
    let actionItems = this.props.goals;

    if (!actionItems) {
      // Add a throbber loader before we wait for a response.
      return ( <Throbber /> );
    }
    else {
      // @TODO: actionItemType ?
      this.groups = actionItems.filter(item => (item.actionItemType === 'group' || false));
      this.goals = actionItems.filter(item => (item.actionItemType === 'goal' || false));

      // The default group.
      this.groups.push({ id: 0, value: 'Default group' });

      return (
        <DndProvider backend={HTML5Backend}>
          <div className="goal-list">
            {
              this.groups.map(group => (
                <GroupItem
                  key={ group.id }
                  id={ group.id }
                  name={ group.value }
                  goals={ this.goals }
                />
              ))
            }
          </div>
        </DndProvider>
      );
    }
  }
}

const mapStateToProps = state => ({ goals: state.goalReducer.goals });
export default connect(mapStateToProps)(GoalList);
