export const searchImages = (search) =>
  fetch(
    `https://api.unsplash.com/search/photos?client_id=TGo_XWpf-N1kxq2hbfSHjEpAaIjtLJ7NJIEiZk4Jstk&query=${search}&page=1&orientation=landscape&per_page=12`
  ).then((res) =>
    res
      .json()
      .then((images) => images.results.map((val) => val.id).slice(0, 12))
      .catch((err) => console.error(err))
  );

export const genImageUrl = (id, w, h) =>
  `https://source.unsplash.com/${id}/${w}x${h}`;
