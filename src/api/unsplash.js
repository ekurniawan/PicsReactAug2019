import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 4525193718da2d9f4ef7759f4fad0909c2a523a8dc62135d82721e72ed7ac71f"
  }
});
