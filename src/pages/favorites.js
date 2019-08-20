import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import viewmodel from '../json';
import ButtonGroup from '../components/ButtonGroup';
import Slot from '../components/Slot';
import Content from '../components/Content';
import colors from '../util/colors';
import spacing from '../util/spacing';
import mediaQueries from '../util/mediaQueries';
import SafeLink from '../components/SafeLink';
import DefaultLayout from '../layouts';
import ContentSection from '../components/ContentSection';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { getCookie, setCookie } from '../util/cookieHelper';
import Slots from '../components/Slot/Slots';

const FavoritesPage = () => {
  const favoriteCookies = getCookie('favorites', document.cookie);
  const [favorites, setFavorites] = useState([]);
  const isActive = uniqueSlotIdentifier =>
    !!favorites.find(favorite => favorite === uniqueSlotIdentifier);

  useEffect(() => {
    setFavorites(favoriteCookies ? JSON.parse(favoriteCookies) : []);
  }, []);

  const allCollections = viewmodel.schedules
    .flatMap(schedule =>
      schedule.collections.map(collection => ({
        ...collection,
        date: schedule.date,
      })),
    )
    .filter(({ date, start, time, title }) =>
      isActive(`${date}_${start || time}_${title}`),
    );
  return (
    <DefaultLayout>
      <Content>
        <ContentSection withTopSeperator withBottomSeperator>
          <Slots collections={allCollections} removeFavorite={setFavorites} />
        </ContentSection>
      </Content>
    </DefaultLayout>
  );
};

export default FavoritesPage;
