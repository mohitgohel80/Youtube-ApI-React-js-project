import React, { Component } from "react";
import axios from "../api/axios";
import "antd/dist/antd.css";
import Search from "./Search";
import Videolist from "./Videolist";

export default class App extends Component {
  state = { video: [] };
  
  onSearchSubmit = async term => {
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            q: term,
            part: 'snippet', 
            maxResults : 12,
            key:"AIzaSyAS2lAYNz1ieLHYZDpATcmUMSY6rFetxoo"
          },
        })
        .then(response => {
          console.log(response);
          this.setState({ video: response.data.items});
        })
        .catch(error => {
          console.log(error);
        });
    };
  

  render() {  
    return (
      <div style={{ marginTop: "20px" }} className="ui container">
      
        <Search onSearchSubmit={this.onSearchSubmit} />
        <Videolist video={this.state.video} />
        
      </div>
    );
  }
}
