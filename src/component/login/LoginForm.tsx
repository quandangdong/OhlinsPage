import React from "react";

class LoginForm extends React.PureComponent {
  state = {
    formValue: {
      username: "",
      password: "",
    },
  };

  render() {
    return (
      <div>
        {/* form container */}
        <div className="w-2/6 h-128 rounded-lg bg-zinc-50 m-auto py-9">
          <div className="text-center">
            {/* title: welcome and sign in */}
            <div className="text-6xl text-zinc-600 font-light">Welcome !</div>
            <div className="text-4xl text-zinc-600 font-medium">Sign in</div>
          </div>

          {/* Input field */}
          <div>
            <input
              className="focus:outline-none border-b-2 border-zinc-500 flex mx-auto mt-4 w-8/12 text-2xl bg-zinc-50"
              type="text"
              placeholder="username"
            ></input>
            <input
              className="focus:outline-none border-b-2 border-zinc-500 flex mx-auto mt-4 w-8/12 text-2xl bg-zinc-50"
              type="text"
              placeholder="password"
            ></input>
          </div>

          {/* button */}
          <div className="text-center my-8">
            <div>
              <button className="w-72 py-1 rounded-lg text-center bg-zinc-600 text-white text-xl hover:bg-zinc-500 hover:scale-110">
                Sign in
              </button>
            </div>
            <div>
              <button className="w-72 mt-4 py-1 rounded-lg text-center pl-3 bg-zinc-200 text-blue-600 text-xl hover:scale-110 relative">
                <img
                  className="w-7 absolute top-1 left-7"
                  src="https://img.icons8.com/color/48/000000/google-logo.png"
                />
                Sign in with Google
              </button>
            </div>
          </div>

          {/* Create new account */}
          <div className="text-center text-xl mt-24 text-zinc-600">
            <a href="#">
              <span>
                Create new account
                <svg
                  className="w-6 h-6 inline ml-1 fill-zinc-600"
                  fill-rule="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
