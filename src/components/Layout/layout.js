// Layout.js
import React from 'react';
import Sidebar from '../Sidebar/sidebar';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '200px', padding: '20px', width: '100%' }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
