import Profile from './components.jsx/profile';
import './App.css';
import { SeriesCard } from './components.jsx/SeriesCard';


export const App = () => {
  return (
    <div className="container">
      <Profile />
      <SeriesCard />
    </div>
  )
}

export default App;