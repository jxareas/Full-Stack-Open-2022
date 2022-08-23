import {useState} from "react";

const Header = ({title}) => (
    <h1>
        {title}
    </h1>
);

const FeedbackButton = ({text, onClick}) => (
    <button onClick={onClick}>
        {text}
    </button>
);

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad;
    let average = all === 0 ? 0 : ((good - bad) / all);
    let positive = all === 0 ? '0%' : `${((good / all) * 100)}%`;

    if(all === 0)
        return(<p>No Feedback given</p>)
    else return(
      <table>
          <tbody>
          <StatisticLine text="good" counter={good}></StatisticLine>
          <StatisticLine text="neutral" counter={neutral}></StatisticLine>
          <StatisticLine text="bad" counter={bad}></StatisticLine>
          <StatisticLine text="all" counter={all}></StatisticLine>
          <StatisticLine text="average" counter={average}></StatisticLine>
          <StatisticLine text="positive" counter={positive}></StatisticLine>
          </tbody>
      </table>
    )
}
const StatisticLine = ({text, counter}) => (
    <>
        <p>
            {text} {counter}
        </p>
    </>
)


const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
           <div>
               <Header title="give feedback"></Header>
               <FeedbackButton text="good" onClick={() => setGood(good + 1)}/>
               <FeedbackButton text="neutral" onClick={() => setNeutral(neutral + 1)}/>
               <FeedbackButton text="bad" onClick={() => setBad(bad + 1)}/>
               <Header title="statistics"></Header>
                <Statistics good={good} neutral={neutral} bad={bad}/>
           </div>


    );
};

export default App;
