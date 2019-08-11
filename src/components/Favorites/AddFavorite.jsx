import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { heartRed } from '../../util/colors';
import Button from '../Button';
import css from '@emotion/css';
import spacing from '../../util/spacing';
import { getCookie } from '../../util/cookieHelper';

const AddFavorite = ({ title }) => {
  getCookie(title, dd);
  return (
    <Button
      appearance="stripped"
      css={css`
        margin-right: ${spacing.small};
      `}>
      <FavoriteIcon color="red" fontSize="large" />
    </Button>
  );
};

export default AddFavorite;
