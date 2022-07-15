import "./App.css";
import NavigationBar from "./Components/Navigator";
import Trending from "./Components/Trending";
import Anime from "./Components/Anime"
import Intro from "./Components/Intro";
import "./style/landingPage.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* Navbar */}

      <div className="trendingBG">
          <Trending />
      </div>

      <div className="trendingBG">
          <Anime />
      </div>
    </div>
  );
}

export default App;
