import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeScreen from "./Components/HomeScreen";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { GlobalProvider } from "./Components/AuthState/GlobalContext";
import SignUp from "./Components/Signup";

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
          <Footer />
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
