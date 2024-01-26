import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        새로운 PR 이 올라왔습니다~~!
        {process.env.REACT_APP_ENV}
      </header>
    </div>
  );
}

export default App;
