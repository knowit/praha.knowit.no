import React, { useState, useEffect } from 'react';
import viewmodel from '../json';
import Content from '../components/Content';
import DefaultLayout from '../layouts';
import ContentSection from '../components/ContentSection';
import { getCookie } from '../util/cookieHelper';
import Slots from '../components/Slot/Slots';

const FavoritesPage = () => {
  const favoriteCookies = getCookie('favorites', document.cookie);
  const [favorites, setFavorites] = useState([]);
  const isActive = uniqueSlotIdentifier =>
    !!favorites.find(favorite => favorite === uniqueSlotIdentifier);

  useEffect(() => {
    setFavorites(favoriteCookies ? JSON.parse(favoriteCookies) : []);
  }, []);

  const allCollections = viewmodel.schedules.filter(
    ({ date, start, time, title }) =>
      isActive(`${date}_${start || time}_${title}`),
  );
  return (
    <DefaultLayout>
      <Content>
        <ContentSection withTopSeperator withBottomSeperator>
          <Slots slots={allCollections} removeFavorite={setFavorites} />
        </ContentSection>
      </Content>
    </DefaultLayout>
  );
};

export default FavoritesPage;
