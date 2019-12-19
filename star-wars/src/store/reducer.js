import {
    FETCH_PLANETS_SUCCESS,
    FETCH_PLANETS_FAILURE
  } from '../actions/Actions.js';
  
  const initialState = {
    planetsData: [],
    loading: false,
    error: null
  };
  
  export default function planetsReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_PLANETS_SUCCESS:
          console.log(action)
        return {
          ...state,
          loading: false,
          planetsData: action.payload.planets
        };
  
      case FETCH_PLANETS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          planetsData: []
        };
  
      default:
        return state;
    }
  }