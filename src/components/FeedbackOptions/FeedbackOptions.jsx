import { Button, OptionsList } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onOptions, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {onOptions.map(property => (
        <li key={property}>
          <Button name={property} type="button" onClick={onLeaveFeedback}>
            {property}
          </Button>
        </li>
      ))}
    </OptionsList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
