import { Info } from "./Statistics.styled";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <Info>Good: {good}</Info>
      <Info>Neutral: {neutral}</Info>
      <Info>Bad: {bad}</Info>
      <Info>Total: {total}</Info>
      <Info>Positive feedback: {positivePercentage}%</Info>
    </div>
  );
};