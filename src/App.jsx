import AuthContainer from "./components/AuthContainer";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./App.css";


function App() {
  return (
    <div>
      <AuthContainer />
      <Dashboard />
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;
