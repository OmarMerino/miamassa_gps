import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import FrontPage from './pages/FrontPage'
import Administrador from './pages/Administrador';
import { AuthProvider } from "./context/AuthContext";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" Component={FrontPage} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/administrador"
            element={
              <ProtectedRoute>
                <Administrador/>
                <Home/>
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;