import React from "react";
import {
  technical1,
  technical2,
  technical3,
  technical4,
  technical5,
} from "../../img/index";

class Paterners extends React.PureComponent {
  render() {
    return (
      <div className="mt-20">
        <div className="flex">
          <span className="text-6xl uppercase text-zinc-600 font-semibold border-r-4 pr-2 border-x-zinc-600">
            official technical parterners
          </span>
          <span className="text-3xl text-zinc-600 my-auto pl-2">
            5 parterners
          </span>
        </div>
        <div className="bg-zinc-50 rounded-lg">
          <div className="mt-3 py-10">
            <div className=" flex justify-evenly">
              <img className="w-60 rounded-lg" src={technical1} alt="tech1" />
              <img className="w-60 rounded-lg" src={technical2} alt="tech2" />
              <img className="w-60 rounded-lg" src={technical3} alt="tech3" />
            </div>

            <div className="flex justify-evenly mt-7">
              <img className="w-60 rounded-lg" src={technical4} alt="tech4" />
              <img className="w-60 rounded-lg" src={technical5} alt="tech5" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Paterners;
