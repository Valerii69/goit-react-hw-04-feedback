import styled from 'styled-components';
import { colors } from '../utils/vars';
export const OptionsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  margin-left: 55px;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  font-family: 'Verdana';
  font-weight: 400;
  font-size: 14px;
  font-style: bold;
  /* background: transparent; */
  border: ${colors.border};
  border-radius: 18px;
  outline: 0;
  text-align: center;
  text-decoration: none;
  background-color: ${colors.secondColor};
  margin: 0 0.25em;
  padding: 0.25em 1em;
  color: ${colors.background};
  box-shadow: ${colors.boxShadow};
  transition: ${colors.boxShadow};
  text-transform: capitalize;
  :hover {
    color: ${colors.textSecond};
    font-size: 14px;
    opacity: 0.75;
    transform: scale(1.2);
  }
`;
