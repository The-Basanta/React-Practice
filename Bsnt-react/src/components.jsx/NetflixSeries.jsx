import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <ul className="grid grid-three-columns">
      {seriesData.map((series) => (
        <SeriesCard key={series.id} series={series} />
      ))}
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