import styled from 'styled-components';
import { colors } from '../utils/vars';
export const StatisticsList = styled.ul`
  margin-top: 20px;
  margin-left: 55px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const StatisticsItem = styled.li`
  font-size: 18px;
  font-weight: 500;
  color: ${colors.boxShadow};
`;
