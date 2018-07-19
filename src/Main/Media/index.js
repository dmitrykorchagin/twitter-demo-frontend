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

// const photos = [
//   {
//     photos: `${process.env.PUBLIC_URL}/img/photos1.jpg`,
//     to: '/photos1',
//   },
//   {
//     photos: `${process.env.PUBLIC_URL}/img/photos2.jpg`,
//     to: '/photos2',
//   },
//   {
//     photos: `${process.env.PUBLIC_URL}/img/photos3.jpg`,
//     to: '/photos3',
//   },
//   {
//     photos: `${process.env.PUBLIC_URL}/img/photos4.jpg`,
//     to: '/photos4',
//   },
//   {
//     photos: `${process.env.PUBLIC_URL}/img/photos5.jpg`,
//     to: '/photos5',
//   },
//   {
//     photos: `${process.env.PUBLIC_URL}/img/photos6.jpg`,
//     to: '/photos6',
//   },
// ];

export default ({ data }) => (
  <Media>
    <SidebarHeading icon={mediaIcon} to="/media">
      522 Photos and Video
    </SidebarHeading>
    <MediaBox>
      <List>
        {data.map(photo => <MediaPhotos photos={photo.photos} to={photo.to} />)}
      </List>
    </MediaBox>
  </Media>
);
