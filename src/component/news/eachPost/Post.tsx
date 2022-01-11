import React from "react";

interface PostDetail {
  time: string;
  title: string;
  imgSrc: string;
}

class Post extends React.PureComponent<{ PostData: PostDetail }> {
  render() {
    console.log(this.props.PostData);

    return (
      <div>
        <div>
          {/* image */}
          <div className="relative">
            <img
              className="w-80 h-80 rounded-lg object-cover"
              src={this.props.PostData.imgSrc}
              alt="post"
            />

            <div className="text-zinc-50 font-semibold absolute bottom-5 left-3">
              <div>{this.props.PostData.time}</div>
              <div>{this.props.PostData.title}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;