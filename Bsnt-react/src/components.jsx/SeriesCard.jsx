export const SeriesCard = ({ series }) => {
  const { name, rating, description, genre, cast, watch_url, img_url } = series;
  const btn_watch = {
    fontweight: 'bold',
    padding: '8px 10px',
    backgroundColor: '#e50914',
    cursor: 'pointer',
     
  }
  const ratingClass = rating >= 8.5 ? "superhit" : "average";

  return (
    <li>
      <div>
        <img src={img_url} alt={name} />
      </div>
      <div className="card-content">
        <h1 className="card-heading">{name}</h1>
        Rating : 
        <span className={`card-rating ${ratingClass}`}>
           {rating}
        </span>
        <p className="card-description">{description}</p>
        <p className="card-info">Genre : {genre.join(", ")}</p>
        <p className="card-info">Cast: {cast.join(", ")}</p>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <button className="watch-button" style={btn_watch}>
            Watch Now
          </button>
        </a>
      </div>
    </li>
  );
};