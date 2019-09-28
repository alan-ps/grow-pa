import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CategoryList from 'components/Category/CategoryList';
import CategoryControlPanel from 'components/Category/CategoryControlPanel';

/**
 * Represents a dashboard page component.
 */
function Dashboard(props) {
  useEffect(() => {
    props.dispatch({
      type: 'NAV_INFO_UPDATE',
      title: 'Dashboard',
      back: ''
    })
  })

  return (
    <div className="container">
      <CategoryControlPanel />
      <CategoryList />
    </div>
  )
}

const mapStateToProps = state => ({ ...state.nav });
export default connect(mapStateToProps)(Dashboard);
