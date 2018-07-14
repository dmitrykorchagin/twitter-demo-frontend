import React from 'react';
import styled from 'styled-components';
import SidebarHeading from '../SidebarHeading';
import MediaPhotos from './MediaPhotos';
import mediaIcon from '../img/media.svg';

const Media = styled.div`
  display: flex;
  flex-direction: column;
`;

const MediaBox = styled.div`
  display: flex;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 8px;
`;

const processEnv = process.env.PUBLIC_URL || '';

const mediaData = [
  {
    photos: `${processEnv}/img/photos1.jpg`,
    to: '/photos1',
  },
  {
    photos: `${processEnv}/img/photos2.jpg`,
    to: '/photos2',
  },
  {
    photos: `${processEnv}/img/photos3.jpg`,
    to: '/photos3',
  },
  {
    photos: `${processEnv}/img/photos4.jpg`,
    to: '/photos4',
  },
  {
    photos: `${processEnv}/img/photos5.jpg`,
    to: '/photos5',
  },
  {
    photos: `${processEnv}/img/photos6.jpg`,
    to: '/photos6',
  },
];

export default () => (
  <Media>
    <SidebarHeading icon={mediaIcon} to="/media">
      {`${mediaData.length} Photos and videos`}
    </SidebarHeading>
    <MediaBox>
      <List>
        {mediaData.slice(0, 6).map(photo => <MediaPhotos photos={photo.photos} />)}
      </List>
    </MediaBox>
  </Media>
);
