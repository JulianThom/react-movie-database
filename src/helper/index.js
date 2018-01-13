const rating = (vote_average) => {
  return (
    Math.round(vote_average)/2
  )
};

const randomPage = () => {
  return (
    Math.floor(Math.random() * 100)
  )
};

export {
  rating,
  randomPage
};
