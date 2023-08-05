import { React, Component } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import { Container } from 'components/Section/Section.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = e => {
    const name = e.target.value;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => (acc += value), 0);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const buttons = Object.keys(this.state);

    return (
      <>
        <Section title={'Please leave feedback'}>
          <Container>
            <FeedbackOptions
              options={buttons}
              onLeaveFeedback={this.onBtnClick}
            />
            <Statistics good={good} neutral={neutral} bad={bad} total={total} />
          </Container>
        </Section>
      </>
    );
  }
}

export default App;
