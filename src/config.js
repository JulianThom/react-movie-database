export default {
  categories: {
    tv: 'tv',
    person: 'person',
    movie: 'movie'
  },
  types: {
    season: 'season',
    episode: 'episode'
  },
  tmdb: {
    apiKey: 'a8ccc2c614a1931b007aa9a92c8afb41',
    baseUrlApi: 'https://api.themoviedb.org/3/',
    assets: {
      baseUrlBackdropW780: 'http://image.tmdb.org/t/p/w780/',
      baseUrlBackdropW1280: 'http://image.tmdb.org/t/p/w1280/',
      baseUrlPosterW342: 'http://image.tmdb.org/t/p/w342/',
      baseUrlPosterW780: 'http://image.tmdb.org/t/p/780/',
      baseUrlProfileW185: 'http://image.tmdb.org/t/p/w185/'
    },
    sortMovie: {
      popularity: 'Popularity',
      release_date: 'Release Date',
      revenue: 'Revenue',
      primary_release_date: 'Primary Release Date',
      original_title: 'Original title',
      vote_average: 'Vote Average',
      vote_count: 'Vote Count'
    },
    sortTv: {
      popularity: 'Popularity',
      vote_average: 'Vote Average',
      first_air_date: 'First air date'
    }
  },
  trailer: {
    opts: {
      width: '1000',
      height: '563',
      playerVars: {
        autoplay: 1
      }
    }
  },
  icons: {
    play: 'fa fa-play-circle',
    close: 'fa fa-window-close',
    season: 'fa fa-folder-open',
    person: 'fa fa-user-circle',
    similar: 'fa fa-chain',
    movie: 'fa fa-ticket',
    tv: 'fa fa-television',
    ratingFilled: 'fa fa-star',
    ratingEmpty: 'fa fa-star-o',
    review: 'fa fa-commenting',
    sortDesc: 'fa fa-sort-amount-desc',
    sortAsc: 'fa fa-sort-amount-asc',
    spinner: 'fa fa-spinner fa-pulse fa-5x fa-fw '

  }
}
