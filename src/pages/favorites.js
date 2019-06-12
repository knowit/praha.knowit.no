import React from 'react';
import { css } from '@emotion/core';
import Favorite from '@material-ui/icons/Favorite';
import Content from '../components/Content';
import Layout from '../layouts';
import ContentSection from '../components/ContentSection';
import HeaderTwoWithIcon from '../components/HeaderTwoWithIcon';
import colors from '../util/colors';
import spacing from '../util/spacing';
/*
        {Object.keys(viewmodel.talks).map(key => (
          <Speakers key={key} talk={viewmodel.talks[key]} talkKey={key} />
        ))}
*/

const SpeakersPage = () => {
  return (
    <Layout>
      <Content>
        <ContentSection withBottomSeperator minHeight="100vh">
          <HeaderTwoWithIcon>
            <Favorite
              css={css`
                margin-right: ${spacing.small};
                color: ${colors.heartRed};
              `}
            />
            Favoritter
          </HeaderTwoWithIcon>
          <p>Kommer...</p>
        </ContentSection>
      </Content>
    </Layout>
  );
};

export default SpeakersPage;
