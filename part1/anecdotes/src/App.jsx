import {useState} from "react";

const Button = ({click, text}) => (
    <button onClick={click}>{text}</button>
);

const MaxVotes = ({votes, anecdotes}) => {
    let maxVote = 0;
    let index;

    for (const vote in votes) {
        if (votes[vote] > maxVote) {
            maxVote = votes[vote];
            index = vote;
        }
    }

    if (maxVote === 0) {
        return (<p>No votes</p>);
    } else return (
        <div>
            <p>{anecdotes[index]}</p>
            <p>has {maxVote} votes</p>
        </div>
    );

};

const App = ({anecdotes}) => {

    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);

    const vote = (selectedAnecdote) => {
        setVotes(() => {
            const copy = [...votes];
            copy[selectedAnecdote]++;
            return copy;
        });


    };
    const random = () => {
        const randomNumber = Math.round(Math.random() * 5);
        setSelected(randomNumber);
    };

    return (
        <div>
            <h1>Current Anecdote</h1>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <Button click={random} text={'next anecdote'}/>
            <Button click={() => vote(selected)} text={'vote'}/>
            <h1>Anecdote with most votes</h1>
            <MaxVotes votes={votes} anecdotes={anecdotes}/>
        </div>
    );

};

export default App;
