import React from "react";
import { ohlinsLogo } from "../../img/index";
import LoginForm from "../login/LoginForm";
import LanguageList from "./languagePopUp/LanguageList";

class Navbar extends React.PureComponent {
  state = {
    isLanguagePopUpOpen: false,
    isLoginFormOpen: false,
  };

  handleShowLanguagePopUp = (): void => {
    this.setState({ isLanguagePopUpOpen: !this.state.isLanguagePopUpOpen });
  };

  handleShowLoginForm = (values: boolean): void => {
    this.setState({ isLoginFormOpen: values });
  };
  render() {
    return (
      <div>
        {/* // Navbar container */}
        <div className="flex justify-between">
          <ul className="inline-flex justify-items-center gap-10 text-3xl">
            {/* Logo */}
            <li>
              <a href="/">
                <img className="w-40 m-0" src={ohlinsLogo} alt="Logo" />
              </a>
            </li>
            {/* Navigate */}
            <li className="my-auto text-zinc-600 hover:scale-110 hover:text-shadow-md">
              <a href="/">Overview</a>
            </li>
            <li className="my-auto text-zinc-600 hover:scale-110 hover:text-shadow-md">
              <a href="/">Products</a>
            </li>
            <li className="my-auto text-zinc-600 hover:scale-110 hover:text-shadow-md">
              <a href="/">Support</a>
            </li>
            <li className="my-auto text-zinc-600 hover:scale-110 hover:text-shadow-md">
              <a href="/">About</a>
            </li>
          </ul>

          {/* Language and Sign in */}
          <div className="my-auto">
            <ul className="flex justify-items-center gap-10 text-3xl">
              <li
                className="my-auto flex text-zinc-600 relative hover:cursor-pointer"
                onClick={this.handleShowLanguagePopUp}
              >
                <svg
                  className="w-6 h-6 my-auto mr-2 fill-zinc-600"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                English
                <div className="absolute top-11 z-50 right-0">
                  {this.state.isLanguagePopUpOpen ? <LanguageList /> : null}
                </div>
              </li>
              <li>
                <button
                  className="px-10 py-2 mx-2 rounded-lg bg-zinc-600 text-white text-2xl hover:bg-zinc-500 hover:scale-110"
                  onClick={() => this.handleShowLoginForm(true)}
                >
                  Sign in
                </button>
              </li>
            </ul>
          </div>
        </div>

        {this.state.isLoginFormOpen ? (
          <LoginForm onCloseClick={this.handleShowLoginForm} />
        ) : null}
      </div>
    );
  }
}

export default Navbar;
