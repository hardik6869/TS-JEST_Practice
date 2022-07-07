import "./App.css";
import Counter from "./Counter/Counter";
const App = () => {
  return (
    <div>
      <h1 data-testid="header" className="text-center text-muted m-5">
        Wel-Come
      </h1>
      <Counter />
    </div>
  );
};

export default App;
