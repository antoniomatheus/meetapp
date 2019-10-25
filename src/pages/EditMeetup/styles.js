import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

export const Container = styled.div`
  align-items: stretch;
  max-width: 900px;
  margin: 10px auto;

  form {
    display: flex;
    flex-direction: column;

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

    textarea {
      height: 200px;
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      padding: 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
`;

export const Image = styled.div`
  align-self: center;
  margin: 30px 0 30px;
  width: 100%;
  height: 300px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;

  label {
    cursor: pointer;
    transition: all 0.2s;
    display: inline-block;
    width: 100%;
    height: 100%;

    span {
      font-size: 20px;
      position: relative;
      left: 43%;
      top: 45%;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.3);
    }

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 4px;
    }

    input {
      display: none;
    }
  }
`;

export const DateTime = styled(Input)`
  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  &::-webkit-inner-spin-button {
    display: none;
  }
`;
