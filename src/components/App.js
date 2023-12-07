import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Wraper } from './App.styled';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const updateClicks = target => {
    switch (target) {
      case 'Good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'Bad':
        setBad(prevBad => prevBad + 1);
        break;
      case 'Neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positive = (good / total) * 100;
    return Math.round(positive);
  };
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  return (
    <Wraper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Bad', 'Neutral']}
          onLeaveFeedback={updateClicks}
        />
      </Section>
      {total > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
      <GlobalStyle />
    </Wraper>
  );
};
