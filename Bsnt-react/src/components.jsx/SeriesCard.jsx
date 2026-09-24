export const SeriesCard = ({ series }) => {
  const { name, rating: seriesRating, description, genre, cast, watch_url, img_url } = series;
  const btn_watch = {
    fontWeight: 'bold',
    padding: '8px 10px',
    backgroundColor: 'black',
    cursor: 'pointer',
  };

  const rating = styled.rating`
    fontSize: '14px',
    margin: '0 0 6px',
    color: '#555',
  `;

  const ratingClass = seriesRating >= 8.5 ? "superhit" : "average";

  return (
    <li>
      <div>
        <img src={img_url} alt={name} />
      </div>
      <div className="card-content">
        <h1 className="card-heading">{name}</h1>
        Rating : 
        <rating>{rating}</rating>
           
        <p className="card-description">{description}</p>
        <p className="card-info">Genre : {genre.join(", ")}</p>
        <p className="card-info">Cast: {cast.join(", ")}</p>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <btn_watch>Watch Now</btn_watch>
        </a>
      </div>
    </li>
  );
};