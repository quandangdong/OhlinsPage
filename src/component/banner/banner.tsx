import React from "react";
import { MainPic } from "../../img";

class Banner extends React.PureComponent {
  render() {
    return (
      // Flexbox container
      <div>
        <div className="relative">
          {/* Image item */}
          <img
            className="flex w-full mt-9 rounded-lg"
            src={MainPic}
            alt="Banner"
          />
          {/* Text Item */}
          <div className="absolute bottom-52 left-36 w-12">
            <div className="font-semibold text-zinc-100 text-6xl">
              Motocycle product
            </div>
            <button className="w-44 py-2 mt-6 rounded-lg bg-zinc-600 text-2xl text-white font-semibold hover:scale-110">
              Details
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
