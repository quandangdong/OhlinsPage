import "./App.css";
import Banner from "./component/banner/banner";
import Footer from "./component/footer/Footer";
import Navbar from "./component/header/Navbar";
import LastestHighlight from "./component/news/LastestHighlight";
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
      <LastestHighlight />
      <Footer />
    </div>
  );
}

export default App;
