import React, { useState, useCallback } from 'react';
import GoalItem from 'components/Goal/GoalItem';
import update from 'immutability-helper';
import { useDrag, useDrop } from 'react-dnd'

/**
 * Represents a single group item component.
 */
export default function GroupItem(props) {

  // const [goals, setGoals] = useState(props.group.items);
  // // const [status, setStatus] = useState('no');

  // const moveGoal = useCallback(
  //   (dragIndex, hoverIndex) => {
  //     const dragGoal = goals[dragIndex]

  //     setGoals(
  //       update(goals, {
  //         $splice: [[dragIndex, 1], [hoverIndex, 0, dragGoal]],
  //       }),
  //     )
  //   },
  //   [goals],
  // )
  // const doTest = useCallback(
  //   (moveFrom, moveTo, index) => {
  //     const newData = update(goals, {
  //       [index]: {settings: {group: {$set: moveTo}}}
  //     })

  //     setGoals(newData)
  //   },
  //   [goals]
  // )


  const [groupState, setGeoupState] = useState(false);
  const groupStateSelector = groupState ? 'open' : 'closed';

  function handleGroupState(event) {
    setGeoupState(!groupState);
  }

  return (
    <div className="goal-list__item">
      <div className={`goal-list__group goal-list__group--${ groupStateSelector }` } onClick={ handleGroupState }>
        { props.group.value + " (x)"}
      </div>
      {/* <div className={`goal-list__items`} >
        {
          goals.map((goal, index) => (

              <GoalItem
                key={goal.id}
                id={goal.id}
                index={index}
                name={goal.value}
                moveGoal={moveGoal}
                doTest={doTest}
                groupId={goal.settings.group}
              />
          ))
        } 
      </div> */}
    </div>
  );
}
