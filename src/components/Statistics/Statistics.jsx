import PropTypes from 'prop-types';
import Notification from 'components/Notification';
function Statistics({ good, neutral, bad, total }) {
  function countPositiveFeedbackPercentage() {
    const percent = 100 * (good / total);
    return ` ${percent}%`;
  }
  return (
    <>
      {total ? (
        <div>
          <h2>Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>
            Positive feedback:{' '}
            {total ? countPositiveFeedbackPercentage() : '0%'}
          </p>
        </div>
      ) : (
        <Notification />
      )}
    </>
  );
}
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
