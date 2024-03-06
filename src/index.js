// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/login';
import Dashboard from './views/Dashboard';

// Import Bootstrap Dashboard React styles and components
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import Bootstrap Dashboard React layouts and components
import AdminLayout from "./layouts/Admin";

// Use createRoot instead of ReactDOM.render
const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
);
