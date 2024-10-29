import { BrowserRouter } from "react-router-dom";
import Component from "./Component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Component/>
      </BrowserRouter>
    </div>
  );
}

export default App;
