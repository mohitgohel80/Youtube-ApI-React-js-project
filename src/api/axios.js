import axios from "axios";

export default axios.create(
  { baseURL: 'https://www.googleapis.com/youtube/v3/search', 
    params: { part: 'snippet', maxResults : 12,
    key: 'AIzaSyAS2lAYNz1ieLHYZDpATcmUMSY6rFetxoo'
  }
})
