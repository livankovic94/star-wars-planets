import React from 'react'
import '../styles/style.css'
import {connect} from 'react-redux'
import { fetchPlanets } from "../actions/Actions";
import DisplayConent from '../components/DisplayContent'
import SearchBar from '../components/SearchBar'

class PlanetInfo extends React.Component {
    constructor() {
        super()
        this.state = {
            searchName:''
        }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    //this.fetchPlanetList = this.fetchPlanetList.bind(this)
    }

    componentDidMount() {
        this.props.fetchPlanetListData('page=1')
    }
    
    componentDidUpdate(prevState){
        this.setState()
        }

    render() {
        const planetData= this.props.planetsData
        const planetList= planetData.results ? planetData.results.map(planet => <DisplayConent  key={planet.url} planet={planet} />)  : "loading..."
        const searchURL = 'https://swapi.co/api/planets/?search=' + this.state.searchName
        // console.log(planetData.next,'3')
        // console.log(this.props.planetsData.next,'4')
        return (
        <div>
            <SearchBar 
                className='navbar' 
                value={this.state.searchName} 
                searchURL={searchURL} 
                previousPage={this.props.planetsData.previous} 
                homePage={'https://swapi.co/api/planets/?page=1'}
                nextPage={this.props.planetsData.next} 
                onClicked={this.handleClick} 
                onChange={this.handleChange}  
            />
            { planetList }
        </div>
        )
    }

    handleClick(url){
        const queryString = url.split("?").pop() // cuts the string at ? beacuse it already hold baseURL in it
        this.props.fetchPlanetListData(queryString)
    }

    handleChange(event){
        const {name,value} = event.target
        this.setState({
            [name]: value
        })
    }

    // fetchPlanetList(url){
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data =>  this.setState({
    //             planetsData: data
    //             })
    //         )
    //}
}

const mapStateToProps = state => {
    return{
         planetsData: state.planetsData
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchPlanetListData: (strURL) => dispatch(fetchPlanets(strURL))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetInfo)