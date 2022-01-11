import React from "react";
import { NewsPic1, NewsPic2, NewsPic3 } from "../../img/index";
import Post from "./eachPost/Post";

interface PostDetail {
  time: string;
  title: string;
  imgSrc: string;
}

const PostList: PostDetail[] = [
  {
    time: "OCTOBER 29, 2021",
    title: "MOTOGP IS BACK THIS NOVEMBER",
    imgSrc: NewsPic1,
  },
  {
    time: "JANUARY 1, 2021",
    title: "HAPPY NEW YEAR 2022!",
    imgSrc: NewsPic2,
  },
  {
    time: "JANUARY 2, 2021",
    title: "NEW ACCESSORIES FOR MTB",
    imgSrc: NewsPic3,
  },
];

class LastestHighlight extends React.PureComponent {
  state = {
    postList: PostList,
  };
  render() {
    return (
      <div className="mt-20">
        <div className="">
          <div className="text-6xl uppercase text-zinc-600 font-semibold text-center">
            Lastest highlights
          </div>

          <div>
            {/* post 1 */}
            <div className="flex justify-center gap-20 mt-3">
              <Post PostData={this.state.postList[0]} />
              <Post PostData={this.state.postList[1]} />
              <Post PostData={this.state.postList[2]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LastestHighlight;
