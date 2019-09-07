import React from 'react';

import CategoryList from './Category/CategoryList';
import CategoryControlPanel from './Category/CategoryControlPanel'

/**
 * Represents a dashboard component.
 */
const Dashboard = () => (
  <div className="container">
    <CategoryControlPanel />
    <CategoryList />
  </div>
);

export default Dashboard;
