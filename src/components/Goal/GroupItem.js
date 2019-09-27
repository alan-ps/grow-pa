import React, { useState } from 'react';
import GoalItem from 'components/Goal/GoalItem';

/**
 * Represents a single group item component.
 */
export default function GroupItem(props) {
  const [groupState, setGeoupState] = useState(false);
  const groupStateSelector = groupState ? 'active' : 'hidden';

  function handleGroupState(event) {
    setGeoupState(!groupState);
  }

  return (
    <React.Fragment>
      <div className="goal-list__group" onClick={ handleGroupState }>
        { props.name }
      </div>
      <div className={`goal-list__items goal-list__items--${ groupStateSelector }`} >
        {
          props.goals.map(goal => (
            (goal.settings.group == props.id) ? (
              <GoalItem key={ goal.id } name={ goal.value } />
            ) : false
          ))
        } 
      </div>
    </React.Fragment>
  );
}
