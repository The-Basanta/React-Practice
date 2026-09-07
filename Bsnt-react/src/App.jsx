import NetflixSeries from './components.jsx/NetflixSeries';
import { Footer } from './components.jsx/NetflixSeries';
import Profile from './components.jsx/profile';
import './Netflix.css';
export const App = () => {
  return (
    <div className="container">
      <NetflixSeries />
      {/* <Footer />
      <Profile /> */}
      
    </div>
  )
}

export default App;