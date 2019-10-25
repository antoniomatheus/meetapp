import styled from 'styled-components';
import { darken } from 'polished';
import Button from '~/components/Button';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  img {
    margin-bottom: 20px;
    height: 300px;
    object-fit: cover;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Control = styled.div`
  & button {
    margin-left: 20px;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 32px;
  color: #fff;
`;

export const EditButton = styled(Button)`
  background: #4dbaf9;

  &:hover {
    background: ${darken(0.15, '#4dbaf9')};
  }
`;

export const Text = styled.span`
  color: #fff;
  font-size: 18px;
`;

export const InfoContainer = styled.div`
  display: flex;
`;

export const Info = styled.span`
  font-size: 16px;
  margin: 40px 0 0 40px;
  color: rgba(255, 255, 255, 0.4);
`;
