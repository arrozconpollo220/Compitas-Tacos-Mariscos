// importing React from the react module
import React from 'react';

// importing ReactDom from 'react-dom';
import ReactDom from 'react-dom/client';

// importing createdBrowserRouter and RouterProvider functions from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// importing bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing the App component and the Error, Home and Menu
import App from './App'; 
import Error from './pages/Error';
import Home from './pages/Home';
import Menu from './pages/Menu';

// Creating a new router using BrowserRouter from 'react-router-dom'
const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

ReactDom.createRoot(document.getElementById('root')).render(<Main />);