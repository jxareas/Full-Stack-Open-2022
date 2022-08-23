const Header = ({courseName}) => {
    return (<h1>{courseName}</h1>);
};

const Total = ({numberOfExercises}) => {
    return (<p>Number of exercises {numberOfExercises}</p>);
};

const Part = ({exercise, part}) => (
    <p>{part} {exercise}</p>
);

const Content = ({exercises1, part1, exercises2, part2, exercises3, part3}) => (
    <>
        <Part part={part1} exercise={exercises1}></Part>
        <Part part={part2} exercise={exercises2}></Part>
        <Part part={part3} exercise={exercises3}></Part>
    </>
);

const App = () => {
    const course = {
        name: "Half stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10
            },
            {
                name: "Using props to pass data",
                exercises: 7
            },
            {
                name: "State of a component",
                exercises: 14
            }
        ]
    };

    const {part1, exercises1} = course.parts[0];
    const {part2, exercises2} = course.parts[1];
    const {part3, exercises3} = course.parts[2];

    return (<div>
        <Header courseName={course}/>
        <Content exercises1={exercises1} part1={part1}
                 exercises2={exercises2} part2={part2}
                 exercises3={exercises3} part3={part3}/>
        <Total numberOfExercises={exercises1 + exercises2 + exercises3}/>
    </div>);

};

export default App;
