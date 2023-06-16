import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

// начальное состояние свойства 'state'
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //обработчик события 'evt' для  фиксации клика
  onLeaveFeedback = event => {
    const object = event.target.name;
    this.setState(state => ({ [object]: state[object] + 1 }));
    // console.log(bill);
  };

  // вычисление суммы  кликов
  totalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };
  //вычисления процента положительной оценки
  positiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.totalFeedback();

    return (Math.round((good * 100) / totalFeedback) || 0) + '%';
  };

  //рендер данных по клику
  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.totalFeedback();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onOptions={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {!totalFeedback ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={this.positiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
