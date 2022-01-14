import React from "react";
import { whyOhlins1, whyOhlins2, whyOhlins3 } from "../../img/index";
import ImageAndText from "./Reasons/ImageAndText";

interface reason {
  explain: string;
  img: string;
}

const reasonList: reason[] = [
  {
    explain: "Advanced Trackday",
    img: whyOhlins1,
  },
  {
    explain: "",
    img: whyOhlins2,
  },
  {
    explain: "Road & Track",
    img: whyOhlins3,
  },
];

class WhyOhlins extends React.PureComponent {
  state = {
    reasonList: reasonList,
  };

  render() {
    return (
      <div className="mt-20">
        {/* flex container */}
        <div className="flex gap-7 justify-evenly ">
          {/* Why Ohlins text */}
          <div className="text-8xl text-zinc-600 ">
            Why OHLINS better than other ?
          </div>
          <div>
            <ImageAndText reasonData={this.state.reasonList[0]} />
          </div>
          <div className="mt-40">
            <ImageAndText reasonData={this.state.reasonList[1]} />
          </div>
          <div>
            <ImageAndText reasonData={this.state.reasonList[2]} />
          </div>
        </div>
      </div>
    );
  }
}

export default WhyOhlins;
