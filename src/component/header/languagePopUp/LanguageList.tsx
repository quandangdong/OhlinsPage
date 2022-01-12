import React from "react";

class LanguageList extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="bg-zinc-100 rounded-lg ">
          <ul className="text-center w-44 px-3 text-2xl font-normal text-zinc-500">
            <li className="py-3 border-b-2">
              <a href="/">Japan</a>
            </li>
            <li className="py-3 border-b-2">
              <a href="/">Rusia</a>
            </li>
            <li className="py-3 border-b-2">
              <a href="/">France</a>
            </li>
            <li className="py-3">
              <a href="/">Thailand</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LanguageList;
