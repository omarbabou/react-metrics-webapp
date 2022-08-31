import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosArrowForward, IoIosPin } from 'react-icons/io';
import { BiSearchAlt2 } from 'react-icons/bi';
import { v4 as uuid } from 'uuid';
import { getData } from '../../redux/reducer/reducers';
import weathe from '../../graphics/mweathe.png';

const Locations = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const CountryCapitols = ['Kinshasa', 'Matadi', 'Kisangani', 'Tanganyika', 'Lualaba', 'Kolwezi', 'Lodja', 'Businga', 'Fizi', 'Uvira', 'Kamituga', 'Beni', 'Butembo', 'Bunia', 'Kalemie', 'Ituri', 'Boende', 'Bosobolo', 'Kabinda', 'Boma', 'Gbadolite', 'Likasi', 'Gemena', 'Bandundu', 'kananga'];
  const searchedCountriesCapitols = searchQuery.trim().length
   > 0 ? CountryCapitols.filter((c) => c.toLowerCase().includes(searchQuery.toLowerCase()))
    : CountryCapitols;

  return (
    <>
      <div className="container">
        <div className="location-table">
          <div className="location-input">
            <input type="loc-text" onChange={handleChange} value={searchQuery} id="input-data" placeholder="search here" />
            <BiSearchAlt2 id="search" />
          </div>
          <div className="capitols-table">

            {searchedCountriesCapitols.map((loc) => (
              <Link className="link" key={uuid()} to="/details">
                <div
                  className="location-town"
                  id={loc}
                  onClick={() => { dispatch(getData(`${loc}`)); }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={() => { dispatch(getData(`${loc}`)); }}
                >
                  <div className="my-link"><IoIosArrowForward className="loc-arrow" /></div>
                  <img src={weathe} alt="weather-icons" />
                  <div className="loc-city">
                    <IoIosPin />
                    {loc}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
