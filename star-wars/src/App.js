import React from 'react';
import Header from './components/Header.js'
import PlanetInfo from './container/PlanetInfo.js'


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
