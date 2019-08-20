import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slot from '.';
import { getCookie, setCookie } from '../../util/cookieHelper';

const Slots = ({ slots, removeFavorite }) => {
  const [favorites, setFavorites] = useState([]);
  const favoritesCookies = getCookie('favorites', document.cookie);

  const updateFavorites = newFavorites => {
    setCookie('favorites', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
    removeFavorite && removeFavorite(newFavorites);
  };

  useEffect(() => {
    const currentCookie = favoritesCookies ? JSON.parse(favoritesCookies) : [];
    setFavorites(currentCookie);
  }, []);

  return slots.map((slot, index) => (
    <Slot
      key={`${slot.title}_${index}`}
      slot={slot}
      setFavorites={updateFavorites}
      favorites={favorites}
    />
  ));
};

Slots.propTypes = {
  slots: PropTypes.arrayOf(PropTypes.object),
  removeFavorite: PropTypes.func,
};

export default Slots;
