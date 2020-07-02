export class giphyPic {
  async getGiphyPic() {
    try {
      let response = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=dinosaur&rating=g`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}