import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 32px;
  color: #fff;
`;

export const Meetup = styled.div`
  background: rgba(0, 0, 0, 0.1);
  padding: 25px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const MeetupTitle = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const DateText = styled.span`
  font-size: 16px;
  color: #ddd;
`;
