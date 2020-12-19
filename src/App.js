import react from "react";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./pages/Home";
//Router
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
      <h1>Hello Ignite</h1>
    </div>
  );
}

export default App;
