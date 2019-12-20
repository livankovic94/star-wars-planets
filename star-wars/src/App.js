import React from 'react';
import Header from './components/HeaderView.js'
import PlanetInfo from './container/PlanetContainer.js'

class App extends React.Component {
 
  render(){
    return(
    <div >
      <Header />
      <PlanetInfo />
    </div>
    )
  }
}

export default App;
