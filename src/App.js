import react from "react";
//Styles
import GlobalStyle from "./components/GlobalStyle";
//Router
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
      <h1>Hello Ignite</h1>
    </div>
  );
}

export default App;
