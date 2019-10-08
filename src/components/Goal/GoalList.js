import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Throbber from 'components/Basic/Throbber';
import GroupItem from 'components/Goal/GroupItem';

import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

/**
 * Represents a component to render a list of goal/groups.
 */
function GoalList(props) {

  useEffect(() => {
    props.dispatch({
      type: 'ACTION_ITEM_FETCH_ASYNC',
      categoryId: props.categoryId
    });
  }, []);

  let actionItems = props.goals;

  if (!actionItems) {
    // Add a throbber loader before we wait for a response.
    return ( <Throbber /> );
  }
  else {
    // Retriave the group action items.
    const groups = actionItems.filter(item => (item.actionItemType === 'group' || false));
    groups.push({ id: 0, value: 'Default group' });

    // Assign the goals to the associated goals.
    for (let index = 0; index < groups.length; index++) {
      let group = groups[index];

      group['items'] = actionItems.filter(
        item => (
          (item.actionItemType === 'goal' && group.id === item.settings.group) || false
        )
      )
    }

    return (
      <DndProvider backend={HTML5Backend}>
        <div className="goal-list" >
          {
            groups.map(group => (
              <GroupItem
                key={ group.id }
                id={ group.id }
                name={ group.value }
                goals={ group.items }
                categoryId={props.categoryId}
              />
            ))
          }
        </div>
      </DndProvider>
    );
  }
}

const mapStateToProps = state => ({ goals: state.goalReducer.goals });
export default connect(mapStateToProps)(GoalList);
