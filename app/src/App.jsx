import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import PrivateRoute from './routes/PrivateRoute';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import CollectionsPage from './pages/CollectionsPage';

function Nav() {
  const { user } = useAuth();
  return (
    <nav style={{display:'flex', gap:12, padding:12, borderBottom:'1px solid #eee'}}>
      <Link to="/">Dashboard</Link>
      <Link to="/collections">Collections</Link>
      {!user && <Link to="/login">Login</Link>}
    </nav>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/collections" element={<PrivateRoute><CollectionsPage /></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
