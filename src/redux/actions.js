export const addMovies = (payload) => {
  console.log('hello je passe dans mon action')
  return {
    type: 'ADD_MOVIES',
    payload
  }
}
