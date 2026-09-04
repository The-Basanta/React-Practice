import react from 'react';
const NetflixSeries = () => {
  const name = "Nobody"
  const summary = "A family man is drawn into a dangerous conspiracy after his home is invaded by burglars, leading him to unleash his dark past and skills to protect his loved ones."
  const returnGenre = () => {
    const Genre = "Drama, Thriller";
    return Genre;
  };

  let age = 16;

  // if (age < 18) {
  //   return (
  //     <react.Fragment>
  //       <div className="App">
  //         <h1>{name}</h1>
  //         <h3>Rating : 8.5</h3>
  //         <p>{summary}</p>
  //         <p>Genre : {returnGenre()}</p>
  //         <button>Not Available!</button>
  //       </div>
  //     </react.Fragment>
  //   );
  // }

  return (
    <react.Fragment>
      <div className="App">
      <h1>{name}</h1>
      <h3>Rating : 8.5</h3>
      <p>{summary}</p>
      <p>Genre : {returnGenre()}</p>
      <button> { age >= 18 ? "Watch Now" : "Not Available" }</button>

      </div>
    </react.Fragment>
  );
};


export default NetflixSeries;