export const FETCH_PLANETS_SUCCESS = 'FETCH_PLANETS_SUCCESS'
export const FETCH_PLANETS_FAILURE = 'FETCH_PLANETS_FAILURE'

const baseURL='https://swapi.co/api/planets/?'

export function fetchPlanets(url) {
    return dispatch => {
        fetch(baseURL + url)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchPlanetsSuccess(json))
        })
        .catch(error => dispatch(fetchPlanetsFailure(error)));
    };
  }

export const fetchPlanetsSuccess = planets => ({
  type: FETCH_PLANETS_SUCCESS,
  payload: { planets }
})

export const fetchPlanetsFailure = error => ({
  type: FETCH_PLANETS_FAILURE,
  payload: { error }
})