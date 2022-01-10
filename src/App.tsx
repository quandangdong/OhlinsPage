import "./App.css";
import Banner from "./component/banner/banner";
import Navbar from "./component/header/Navbar";
import Paterners from "./component/parterners/Paterners";
import SponsorTeam from "./component/sponsorTeam/Sponsor";
import WhyOhlins from "./component/whyOhlins/WhyOhlins";
function App() {
  return (
    <div className="mx-12 my-3">
      <Navbar />
      <Banner />
      <WhyOhlins />
      <SponsorTeam />
      <Paterners />
    </div>
  );
}

export default App;
