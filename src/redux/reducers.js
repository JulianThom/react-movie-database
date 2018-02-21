const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      console.log('ADD_MOVIES', action.payload)
      // action.payload.id = Date.now();
      // const newState = [...state, action.payload];
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}

const personsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PERSONS':
      console.log('ADD_PERSONS')
      return state;
    case 'REMOVE_PERSON':
      console.log('REMOVE_PERSON')
      return state;
    default:
      return state;
  }
}

export {
  moviesReducer,
  personsReducer
}
