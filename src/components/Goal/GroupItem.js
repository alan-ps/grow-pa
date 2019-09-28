import React, { useState, useCallback } from 'react';
import GoalItem from 'components/Goal/GoalItem';
import update from 'immutability-helper';

/**
 * Represents a single group item component.
 */
export default function GroupItem(props) {
  const [goals, setGoals] = useState(props.goals);

  const moveGoal = useCallback(
    (dragIndex, hoverIndex) => {
      const dragGoal = goals[dragIndex]
      setGoals(
        update(goals, {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragGoal]],
        }),
      )
    },
    [goals],
  )

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
          goals.map((goal, index) => (
            (goal.settings.group == props.id) ? (
              <GoalItem
                key={goal.id}
                id={goal.id}
                index={index}
                name={goal.value}
                moveGoal={moveGoal}
              />
            ) : false
          ))
        } 
      </div>
    </React.Fragment>
  );
}
