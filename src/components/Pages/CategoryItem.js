import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import GoalControlPanel from 'components/Goal/GoalControlPanel';
import GoalList from 'components/Goal/GoalList';

function CategoryItem(props) {
  const category = props.match.params.id;

  useEffect(() => {
    props.dispatch({
      type: 'NAV_INFO_UPDATE',
      title: category,
      back: '/dashboard'
    })
  })

  return (
    <React.Fragment>
      <GoalControlPanel category={category} test={category}/>
      <GoalList categoryId={ category } />
    </React.Fragment>
  )
}

const mapStateToProps = state => ({ ...state.nav });
export default connect(mapStateToProps)(CategoryItem);

