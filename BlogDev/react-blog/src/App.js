import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import DefaultLayout from './pages/DefaultLayout';
import SigupPage from './pages/SigupPage/SigupPage';
import ArtigosEdicao from './pages/ArtigosEdicao/ArtigosEdicao';
import Home from './pages/Home/Home';
import SocialBar from './components/SocialBar/SocialBar';
import LoginPage from './pages/LoginPage/LoginPage';
import ProtectedRoute from './routes/ProtectedRoute';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (

    <div className="App">
      {/* <Login /> */}
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SigupPage />} />
          <Route element={<DefaultLayout />} >
            <Route index element={<Home />} />
            {/* {/* <Route path="/about" element={<AboutPage />} /> */}
            <Route path="/article/:id" element={<PostDetail/>} />
            <Route element={<ProtectedRoute />}>
              <Route path="/articleEdicao" element={<ArtigosEdicao />} />

            </Route>
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
