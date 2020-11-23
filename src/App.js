import PageContainer from "./PageContainer";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import HomeContainer from "./HomeContainer";

function App() {
  return (
    <div className="App">
      <PageContainer />
    </div>
  );
}

export default App;
