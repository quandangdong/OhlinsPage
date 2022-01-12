import React from "react";
import { footerLogo } from "../../img/index";

class Footer extends React.PureComponent {
  render() {
    return (
      <div className="bg-zinc-600 text-zinc-300 mt-20 rounded-t-lg ">
        <div className="flex justify-center gap-14 px-28 py-11">
          {/* column 1 */}
          <div className="mt-6">
            <span className="uppercase text-3xl font-semibold">follow us</span>
            <ul className="flex">
              <li>
                <img
                  className="w-11"
                  src="https://img.icons8.com/material-rounded/24/000000/facebook.png"
                  alt="facebook"
                />
              </li>
              <li>
                <img
                  className="w-11"
                  src="https://img.icons8.com/ios/50/000000/instagram-new--v3.png"
                  alt="instagram"
                />
              </li>
              <li>
                <img
                  className="w-12"
                  src="https://img.icons8.com/ios/50/000000/youtube-play--v1.png"
                  alt="youtube"
                />
              </li>
            </ul>
          </div>
          {/* column 2 */}
          <div className="mt-6">
            <span className="uppercase text-3xl font-semibold">Quick Link</span>
            <ul className="list-disc px-7 text-lg">
              <li>
                <a className="hover:underline text-zinc-300" href="/">
                  Overview
                </a>
              </li>
              <li>
                <a className="hover:underline text-zinc-300" href="/">
                  Product
                </a>
              </li>
              <li>
                <a className="hover:underline text-zinc-300" href="/">
                  Support
                </a>
              </li>
              <li>
                <a className="hover:underline text-zinc-300" href="/">
                  About
                </a>
              </li>
            </ul>
          </div>
          {/* column 3 */}
          <div className="mt-6">
            <span className="uppercase text-3xl font-semibold">
              Policy and Term
            </span>
            <ul className="list-disc px-7 text-lg">
              <li>
                <a className="hover:underline text-zinc-300" href="/">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a className="hover:underline text-zinc-300" href="/">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* column 4 */}
          <div>
            <img
              className="h-64 w-64 object-cover"
              src={footerLogo}
              alt="footerLogo"
            />
          </div>
        </div>
        {/* Copy right */}
        <div className="h-14 w-full p-0 bg-zinc-700 uppercase text-center pt-4">
          COPYRIGHT 2022 © OHLINS (DONGQUAN)
        </div>
      </div>
    );
  }
}

export default Footer;
