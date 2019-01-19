import React, { Component } from "react";

export default class Videolist extends Component {
  render() {
    return (
      <div>
        {this.props.video.map(video => {
          return (
            
            <iframe width="1125" title="videolist" height="400" frameBorder="0"  key={video.id}  allowFullScreen src={`https://www.youtube.com/embed/${video.id.videoId}`} />
          );
        })}
      </div>
    );
  }
}
