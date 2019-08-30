import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import groupBy from 'lodash/groupBy';
import Slot from '.';
import { getCookie, setCookie } from '../../util/cookieHelper';

const Slots = ({ slots, removeFavorite }) => {
  const [favorites, setFavorites] = useState([]);

  const updateFavorites = newFavorites => {
    setCookie('favorites', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
    removeFavorite && removeFavorite(newFavorites);
  };

  useEffect(() => {
    const favoritesCookies = getCookie('favorites', document.cookie);
    const currentCookie = favoritesCookies ? JSON.parse(favoritesCookies) : [];
    setFavorites(currentCookie);
  }, []);

  const groupedByStart = groupBy(slots, slot => slot.start);
  return Object.keys(groupedByStart).map(startKey => (
    <div>
      <h3>{startKey}</h3>
      {groupedByStart[startKey].map((slot, index) => (
        <Slot
          key={`${slot.title}_${index}`}
          slot={slot}
          setFavorites={updateFavorites}
          favorites={favorites}
        />
      ))}
    </div>
  ));
};

Slots.propTypes = {
  slots: PropTypes.arrayOf(PropTypes.object),
  removeFavorite: PropTypes.func,
};

export default Slots;
