import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import update from 'immutability-helper';
import Throbber from 'components/Basic/Throbber';
import GroupItem from 'components/Goal/GroupItem';
import GoalItem from 'components/Goal/GoalItem';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

/**
 * Represents a component to render a list of goal/groups.
 */
function GoalList(props) {
  let actionItems = props.goals;

  useEffect(() => {
    props.dispatch({
      type: 'ACTION_ITEM_FETCH_ASYNC',
      categoryId: props.categoryId
    });
  }, []);

    const moveGoal = useCallback(
      (dragIndex, hoverIndex) => {
        const dragGoal = actionItems[dragIndex];
        const newData = update(actionItems, {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragGoal]],
        });



        // setGoals(
        //   update(goals, {
        //     $splice: [[dragIndex, 1], [hoverIndex, 0, dragGoal]],
        //   }),
        // )
      },
      [actionItems],
  )



  if (!actionItems) {
    // Add a throbber loader before we wait for a response.
    return ( <Throbber /> );
  }
  else {
    // Retriave the group action items.
    // const groups = actionItems.filter(item => (item.actionItemType === 'group' || false));
    // groups.push({ id: 0, value: 'Default group' });

    // // Assign the goals to the associated goals.
    // for (let index = 0; index < groups.length; index++) {
    //   let group = groups[index];

    //   group['items'] = actionItems.filter(
    //     item => (
    //       (item.actionItemType === 'goal' && group.id === item.settings.group) || false
    //     )
    //   )
    // }

    let myIndex = 0;

    return (
      <DndProvider backend={HTML5Backend}>
        <div className="goal-list" >
          {
            props.groups.map((group) => {
              return (
                <React.Fragment>
                  <GroupItem
                    key={group.id}
                    group={group}
                    categoryId={props.categoryId}
                  />
                  {
                    actionItems.map((goal) => (
                      (group.id === goal.settings.group) ? (
                        <GoalItem
                        key={goal.id}
                        id={goal.id}
                        index={myIndex++}
                        name={goal.value}
                        moveGoal={moveGoal}
                        // doTest={doTest}
                        groupId={goal.settings.group}
                      />
                      ) : false

                    ))
                  }
                </React.Fragment>
              )
            })
          }
        </div>
      </DndProvider>
    );
  }
}

const mapStateToProps = state => ({ goals: state.goalReducer.goals, groups: state.goalReducer.groups});
export default connect(mapStateToProps)(GoalList);
