const Button = ({onClickFunc, incrementBy}) => {
  const clickHandler = () => onClickFunc(incrementBy);
  return (
      <button onClick={clickHandler}> + {incrementBy} </button>
  )
}
const Display = ({message}) => {
  return(
      <div> {message} </div>
  );
}
const App = () => {
  const [counter, setState] = useState(0);
  const incrementCounter = (val) => setState(counter+val);
  return(
      <div>
        <Button onClickFunc={incrementCounter} incrementBy={1}/>
        <Button onClickFunc={incrementCounter} incrementBy={10}/>
        <Button onClickFunc={incrementCounter} incrementBy={100}/>
        <Button onClickFunc={incrementCounter} incrementBy={1000}/>
        <Display message={counter}/>
      </div>
  )
}
ReactDOM.render(
    <App/>,
    document.getElementById('mountNode'),
)