import { Slide, Zoom } from "react-awesome-reveal";
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
    <div>
      <div className="mx-12 mt-3">
        <Navbar />
        <Banner />
        <Slide direction="left" duration={2000}>
          <WhyOhlins />
        </Slide>
        <SponsorTeam />
        <Zoom duration={2000}>
          <Paterners />
        </Zoom>
        <LastestHighlight />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
