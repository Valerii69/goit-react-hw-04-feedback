import { StatisticsList, StatisticsItem } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const statList = [
    { statLine: good, title: 'Good' },
    { statLine: neutral, title: 'Neutral' },
    { statLine: bad, title: 'Bad' },
    { statLine: total, title: 'Total' },
    { statLine: positivePercentage, title: 'Positive feedbacks' },
  ];

  return (
    <StatisticsList>
      {statList.map(({ statLine, title }) => (
        <StatisticsItem key={title}>
          <p>
            {title} : <span>{statLine}</span>
          </p>
        </StatisticsItem>
      ))}
    </StatisticsList>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.node.isRequired,
};
