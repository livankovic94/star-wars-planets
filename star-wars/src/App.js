import React from "react";
import HeaderView from "./components/HeaderView.js";
import PlanetInfo from "./container/PlanetContainer.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderView />
        <PlanetInfo />
      </div>
    );
  }
}

export default App;
