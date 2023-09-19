// src/pages/Home.js
import React from 'react';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../../components/Auth/Login';

const LoginPage = () => {
    return (
       
           <Login />
        
       
    );
}

export default LoginPage;
