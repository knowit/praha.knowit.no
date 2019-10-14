import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styled from '@emotion/styled';
import Content from '../components/Content';
import DefaultLayout from '../layouts';
import ContentSection from '../components/ContentSection';
import { getCookie } from '../util/cookieHelper';
import Slots from '../components/Slot/Slots';
import { fetchSlots } from '../graphql/airtable';
import colors from '../util/colors';
import { Link } from 'gatsby';

const StyledEmptyFavorites = styled.div`
  text-align: center;
`;
const StyledFavoriteIcon = styled(FavoriteIcon)`
  color: ${colors.heartRed};
  display: block;
  font-size: 2rem;
`;
const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const isActive = uniqueSlotIdentifier =>
    !!favorites.find(favorite => favorite === uniqueSlotIdentifier);

  useEffect(() => {
    const favoriteCookies = getCookie('favorites', document.cookie);
    setFavorites(favoriteCookies ? JSON.parse(favoriteCookies) : []);
  }, []);

  const slots = fetchSlots();
  const allCollections = slots.filter(({ date, start, time, title }) =>
    isActive(`${date}_${start || time}_${title}`),
  );
  return (
    <DefaultLayout>
      <Content>
        <ContentSection minHeight="100vh" withTopSeperator withBottomSeperator>
          {allCollections && allCollections.length > 0 ? (
            <Slots
              slots={allCollections}
              removeFavorite={setFavorites}
              isFavourites
            />
          ) : (
            <StyledEmptyFavorites>
              <StyledFavoriteIcon fontSize="large" />
              <p>
                Du har foreløig ikke lagret noen favoritter. <br />
                Gå til <Link to="/schedule">programmet</Link> dersom du vil
                finne innhold du vil huske til senere.
              </p>
            </StyledEmptyFavorites>
          )}
        </ContentSection>
      </Content>
    </DefaultLayout>
  );
};

export default FavoritesPage;
