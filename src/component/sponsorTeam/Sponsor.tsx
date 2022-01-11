import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import { sponsorTeam } from "../../img/index";

class SponsorTeam extends React.PureComponent {
  render() {
    return (
      <div className="mt-20">
        {/* Title */}
        <div className="flex">
          <Slide direction="left">
            <span className="text-6xl uppercase text-zinc-600 font-semibold border-r-4 pr-2 border-x-zinc-600">
              our sponsor team
            </span>
            <div className="text-3xl text-zinc-600 py-3 pl-2">Yamaha</div>
          </Slide>
        </div>
        <Zoom duration={1500}>
          <div className="mt-5">
            <img className="rounded-lg" src={sponsorTeam} alt="sponsorTeam" />
          </div>
        </Zoom>
      </div>
    );
  }
}

export default SponsorTeam;
