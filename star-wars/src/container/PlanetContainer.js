import React from "react";
import "../styles/style.css";
import { connect } from "react-redux";
import { fetchPlanets } from "../actions/Actions";
import PlanetListItem from "../components/PlanetListItem";
import NavBar from "../components/NavBar";

class PlanetInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      searchName: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlanetListData("page=1");
  }

  render() {
    const planetData = this.props.planetsData;
    const planetList = planetData.results
      ? planetData.results.map(planet => (
          <PlanetListItem key={planet.url} planet={planet} />
        ))
      : "loading...";
    const searchURL =
      "https://swapi.co/api/planets/?search=" + this.state.searchName;
    return (
      <div>
        <NavBar
          className="navbar"
          value={this.state.searchName}
          searchURL={searchURL}
          previousPage={this.props.planetsData.previous}
          homePage={"https://swapi.co/api/planets/?page=1"}
          nextPage={this.props.planetsData.next}
          onClicked={this.handleClick}
          onChange={this.handleChange}
        />
        {planetList}
      </div>
    );
  }

  handleClick(url) {
    const queryString = url.split("?").pop(); // cuts the string at ? beacuse it already hold baseURL in it
    this.props.fetchPlanetListData(queryString);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
}

const mapStateToProps = state => {
  return {
    planetsData: state.planetsData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlanetListData: strURL => dispatch(fetchPlanets(strURL))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetInfo);
