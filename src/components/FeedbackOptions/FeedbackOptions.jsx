import PropTypes from 'prop-types';
import { ButtonContainer } from './FeedbackOptions.styled';
function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonContainer>
      {options.map(option => (
        <button
          type="button"
          value={option}
          key={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </ButtonContainer>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
