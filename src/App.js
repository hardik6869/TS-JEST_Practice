import "./App.css";
import SignUp from "./Signup/Signup";

const App = () => {
  return (
    <div>
      <h1 data-testid="header" className="text-center text-muted m-5">
        Wel-Come
      </h1>
      <SignUp />
    </div>
  );
};

export default App;
