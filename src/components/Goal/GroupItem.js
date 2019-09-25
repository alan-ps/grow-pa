import React from 'react';
import GoalItem from 'components/Goal/GoalItem';

/**
 * Represents a single group item.
 */
const GroupItem = (props) => (
  <details className="goal-list_group" open>
    <summary>{props.name}</summary>
    {
      props.goals.map(goal => (
        goal.settings.group == props.id ? (
          <GoalItem key={ goal.id } name={ goal.value } />
        ) : false
      ))
    }
  </details>
);

export default GroupItem;
