import seriesData from "../api/seriesData.json";
const NetflixSeries = () => {
  const name = "Lovely Runner";
  const summary =
    "A young woman with a passion for running discovers her true potential and overcomes obstacles to achieve greatness in the world of competitive athletics.";
  const returnGenre = () => {
    const Genre = "Drama, Thriller";
    return Genre;
  };
  let age = 20;

  return (
    <ul>
    <li>
      <div>
        <img src={seriesData[0].img_url} alt="poster" />
      </div>
      <div className="App">
        <h1>{name}</h1>
        <h3>Rating : {seriesData[0].rating}</h3>
        <p>{seriesData[0].description}</p>
        <p>Genre : {seriesData[0].genre.join(", ")}</p>
        <p>Cast: {seriesData[0].cast.join(", ")}</p>
        <a href={seriesData[0].watch_url} target="_blank" rel="noopener noreferrer">
          <button>{age >= 18 ? "Watch Now" : "Not Available"}</button>
        </a>
      </div>
    </li>



        <li>
      <div>
        <img src={seriesData[1].img_url} alt="poster" />
      </div>
      <div className="App">
        <h1>{seriesData[1].name}</h1>
        <h3>Rating : {seriesData[1].rating}</h3>
        <p>{seriesData[1].description}</p>
        <p>Genre : {seriesData[1].genre.join(", ")}</p>
        <p>Cast: {seriesData[1].cast.join(", ")}</p>
        <a href={seriesData[1].watch_url} target="_blank" rel="noopener noreferrer">
          <button>{age >= 18 ? "Watch Now" : "Not Available"}</button>
        </a>
      </div>
    </li>


            <li>
      <div>
        <img src={seriesData[2].img_url} alt="poster" />
      </div>
      <div className="App">
        <h1>{seriesData[2].name}</h1>
        <h3>Rating : {seriesData[2].rating}</h3>
        <p>{seriesData[2].description}</p>
        <p>Genre : {seriesData[2].genre.join(", ")}</p>
        <p>Cast: {seriesData[2].cast.join(", ")}</p>
        <a href={seriesData[2].watch_url} target="_blank" rel="noopener noreferrer">
          <button>{age >= 18 ? "Watch Now" : "Not Available"}</button>
        </a>
      </div>
    </li>


            <li>
      <div>
        <img src={seriesData[2].img_url} alt="poster" />
      </div>
      <div className="App">
        <h1>{seriesData[2].name}</h1>
        <h3>Rating : {seriesData[2].rating}</h3>
        <p>{seriesData[2].description}</p>
        <p>Genre : {seriesData[2].genre.join(", ")}</p>
        <p>Cast: {seriesData[2].cast.join(", ")}</p>
        <a href={seriesData[2].watch_url} target="_blank" rel="noopener noreferrer">
          <button>{age >= 18 ? "Watch Now" : "Not Available"}</button>
        </a>
      </div>
    </li>


            <li>
      <div>
        <img src={seriesData[3].img_url} alt="poster" />
      </div>
      <div className="App">
        <h1>{seriesData[3].name}</h1>
        <h3>Rating : {seriesData[3].rating}</h3>
        <p>{seriesData[3].description}</p>
        <p>Genre : {seriesData[3].genre.join(", ")}</p>
        <p>Cast: {seriesData[3].cast.join(", ")}</p>
        <a href={seriesData[3].watch_url} target="_blank" rel="noopener noreferrer">
          <button>{age >= 18 ? "Watch Now" : "Not Available"}</button>
        </a>
      </div>
    </li>



            <li>
      <div>
        <img src={seriesData[4].img_url} alt="poster" />
      </div>
      <div className="App">
        <h1>{seriesData[4].name}</h1>
        <h3>Rating : {seriesData[4].rating}</h3>
        <p>{seriesData[4].description}</p>
        <p>Genre : {seriesData[4].genre.join(", ")}</p>
        <p>Cast: {seriesData[4].cast.join(", ")}</p>
        <a href={seriesData[4].watch_url} target="_blank" rel="noopener noreferrer">
          <button>{age >= 18 ? "Watch Now" : "Not Available"}</button>
        </a>
      </div>
    </li>


            <li>
      <div>
        <img src={seriesData[5].img_url} alt="poster" />
      </div>
      <div className="App">
        <h1>{seriesData[5].name}</h1>
        <h3>Rating : {seriesData[5].rating}</h3>
        <p>{seriesData[5].description}</p>
        <p>Genre : {seriesData[5].genre.join(", ")}</p>
        <p>Cast: {seriesData[5].cast.join(", ")}</p>
        <a href={seriesData[5].watch_url} target="_blank" rel="noopener noreferrer">
          <button>{age >= 18 ? "Watch Now" : "Not Available"}</button>
        </a>
      </div>
    </li>
    </ul>
    
  );
};

export const Footer = () => {
  return (
    <footer>
      <p>© 2023 Netflix. All rights reserved.</p>
    </footer>
  );
};

export default NetflixSeries;