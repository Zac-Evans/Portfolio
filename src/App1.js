import PageContainer from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import HomeContainer from "./HomeContainer";
import FooterNavigation from "./FooterNavigation";
import SiteNavBar from "./SiteNavbar";

function App() {
  return (
    <div className="App">
      <PageContainer />
      {/* <FooterNavigation /> */}
    </div>
  );
}

export default App;
