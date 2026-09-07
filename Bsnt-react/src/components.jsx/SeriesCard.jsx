export const SeriesCard = ({ series }) => {
  const { name, rating, description, genre, cast, watch_url, img_url } = series;

  return (
    <li>
      <div>
        <img src={img_url} alt={name} />
      </div>
      <div className="App">
        <h1>{name}</h1>
        <h3>Rating : {rating}</h3>
        <p>{description}</p>
        <p>Genre : {genre.join(", ")}</p>
        <p>Cast: {cast.join(", ")}</p>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <button>Watch Now</button>
        </a>
      </div>
    </li>
  );
};