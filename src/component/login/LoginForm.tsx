import React from "react";

interface formAttribute {
  username: string;
  password: string;
}

class LoginForm extends React.PureComponent<{
  onCloseClick(values: boolean): void;
}> {
  constructor(props: any) {
    super(props);
  }

  state = {
    username: "",
    password: "",
    formError: {
      username: "",
      password: "",
    },
  };

  handleInputChange = (args: any) => (e: any) => {
    this.setState({
      [args]: e.target.value,
    });

    // console.log("state ne: ", this.state);
  };

  handleSubmitForm = (e: any) => {
    e.preventDefault();
    this.setState({ formError: this.validate(this.state) });
  };

  validate(state: formAttribute): formAttribute {
    const error: formAttribute = {
      username: "",
      password: "",
    };
    console.log("state validate ne : ", state);
    if (!state.username) {
      error.username = "Username is required";
    }
    if (!state.password) {
      error.password = "Password is required";
    }

    return error;
  }

  render() {
    return (
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-zinc-800 bg-opacity-40">
        <form onSubmit={this.handleSubmitForm}>
          {/* form container */}
          <div className="w-100 h-128 rounded-lg bg-zinc-50 m-auto py-9 relative">
            <svg
              onClick={() => this.props.onCloseClick(false)}
              className="w-6 h-6 absolute top-3 right-3 cursor-pointer fill-zinc-600"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div className="text-center">
              {/* title: welcome and sign in */}
              <div className="text-6xl text-zinc-600 font-light">Welcome !</div>
              <div className="text-4xl text-zinc-600 font-medium">Sign in</div>
            </div>

            {/* Input field */}
            <div>
              {/* username */}
              <input
                className="focus:outline-none border-b-2 border-zinc-500 flex mx-auto mt-4 w-8/12 text-xl bg-zinc-50"
                type="text"
                placeholder="username"
                name="username"
                onChange={this.handleInputChange("username")}
              ></input>
              {this.state.formError.username === "" ? null : (
                <p className="text-red-500 w-8/12 flex mx-auto">
                  Username is required !
                </p>
              )}

              {/* password */}
              <input
                className="focus:outline-none border-b-2 border-zinc-500 flex mx-auto mt-4 w-8/12 text-xl bg-zinc-50"
                type="password"
                autoComplete="on"
                placeholder="password"
                name="password"
                onChange={this.handleInputChange("password")}
              ></input>
              {this.state.formError.password === "" ? null : (
                <p className="text-red-500 w-8/12 flex mx-auto">
                  Password is required !
                </p>
              )}
            </div>

            {/* button */}
            <div className="text-center my-8">
              <div>
                <button
                  type="submit"
                  className="w-72 py-1 rounded-lg text-center bg-zinc-600 text-white text-xl hover:bg-zinc-500 hover:scale-110"
                >
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
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
