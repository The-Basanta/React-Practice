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

};

export default NetflixSeries;