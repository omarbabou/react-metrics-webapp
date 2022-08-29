import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from '../details/DetailsPage';
import Header from '../header/Header';
import Locations from '../locations/Locations';

const WelcomePage = () => {
  const city = useSelector((state) => state.reducerReducer);
  return (
    <div className="home-page">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Locations />} />
          <Route path="/details" element={<Details city={city} />} />
        </Routes>
      </Router>
    </div>

  );
};
export default WelcomePage;
