import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    span {
      color: rgba(255, 0, 0, 0.5);
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      padding: 0 15px;
      border-radius: 4px;
      font-size: 16px;
      align-self: flex-end;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#f94d6a')};
      }
    }
  }
`;

export const Image = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 120px;
      width: 120px;
      object-fit: cover;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
