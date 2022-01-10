import React from "react";
import { sponsorTeam } from "../../img/index";

class SponsorTeam extends React.PureComponent {
  render() {
    return (
      <div className="mt-20">
        {/* Title */}
        <div className="flex">
          <span className="text-6xl uppercase text-zinc-600 font-semibold border-r-4 pr-2 border-x-zinc-600">
            our sponsor team
          </span>
          <span className="text-3xl text-zinc-600 my-auto pl-2">Yamaha</span>
        </div>
        <div className="mt-3">
          <img className="rounded-lg" src={sponsorTeam} alt="sponsorTeam" />
        </div>
      </div>
    );
  }
}

export default SponsorTeam;
