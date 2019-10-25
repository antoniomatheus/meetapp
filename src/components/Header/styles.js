import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #000;
  padding: 0 30px;
  color: #fff;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    height: 32px;
    width: 32px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const Button = styled.button`
  margin-left: 10px;
  background: #f94d6a;
  font-weight: bold;
  color: #fff;
  border: 0;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  align-self: flex-end;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#f94d6a')};
  }
`;
