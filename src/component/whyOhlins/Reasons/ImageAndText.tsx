import React from "react";

// image and explain are transfered from parent component

interface reason {
  explain: string;
  img: string;
}

class ImageAndText extends React.PureComponent<{ reasonData: reason }> {
  render() {
    const reason = this.props.reasonData;
    return (
      <div>
        {/* Image */}
        <div className="w-64 relative">
          <img className="rounded-xl" src={reason.img} alt="image1" />
          {/* Text */}
          <span className="absolute text-4xl w-full text-center break- text-zinc-100 bottom-7">
            {reason.explain}
          </span>
        </div>
      </div>
    );
  }
}

export default ImageAndText;
