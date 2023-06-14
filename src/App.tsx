
import React from 'react';
import { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchParams from './SearchParams';
import Details from './Details';
import AdoptedPetContext from './AdoptedPetContext';
import { Link } from 'react-router-dom';
import { Pet } from "./APIResponsesTypes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
});

const App = () => {
  const adoptedPet = useState(null as Pet | null)
;  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  )
};

const container = document.getElementById('root');

if (!container) {
  throw new Error("no container")
}
const root = ReactDOM.createRoot(container);
root.render(<App />);

