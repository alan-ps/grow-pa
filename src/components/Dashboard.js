import React from 'react';

import CategoryList from './Categories/CategoryList';
import CategoryControlPanel from './Categories/CategoryControlPanel'

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
