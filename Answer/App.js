import './App.css';

function App() {
  return (
    <div className="App">
      <Person name="Elijah Simpson" age="29" role="Student"/>
      <Person name="Terra Taylor" age="None Of Your Business" role="Teacher"/>
    </div>
  );
}

function Person(props) {
    return (
    <ul>
        <li>{props.name} - {props.age} - {props.role}</li>
    </ul>
    )
}


export default App;