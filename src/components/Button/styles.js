import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  margin: 5px 0 0;
  height: 44px;
  width: 140px;
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
`;
