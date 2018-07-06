import React from 'react';
import styled from 'styled-components';

const Preview = styled.div`
  display: flex;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  max-height: 225px;
  margin-top: 5px;
`;

const Image = styled.img`
  width: 126px;
  height: 126px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 12px;
`;

const WebSite = styled.span`
  color: #707e88;
  font-size: 12px;
`;

export default ({
  id, image, title, description, url,
}) => (
  <Preview key={id}>
    {image && <Image src={image} />}
    <Text>
      <Title>
        {title}
      </Title>
      <Description>
        {description}
      </Description>
      <WebSite>
        {url}
      </WebSite>
    </Text>
  </Preview>
);
