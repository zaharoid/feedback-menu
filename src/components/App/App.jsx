import { useState } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import { Container } from 'components/Section/Section.styled';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onBtnClick(e) {
    const name = e.target.value;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  }

  const buttons = [good, neutral, bad];

  function countTotalFeedback() {
    return buttons.reduce((acc, value) => (acc += value), 0);
  }

  return (
    <>
      <Section title={'Please leave feedback'}>
        <Container>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onBtnClick}
          />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
          />
        </Container>
      </Section>
    </>
  );
}

export default App;
