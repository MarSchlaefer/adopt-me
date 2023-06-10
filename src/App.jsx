import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchParams from './SearchParams';
import Details from './Details';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  )
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

