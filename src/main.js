import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { dinoText } from './../src/dino-text.js';
import { giphyPic } from './../src/giphy.js';

$(document).ready(function () {

  $('#submit-btn').click(function () {
      const firstName = $('#firstName').val();
      const lastName = $('#lastName').val();
      $(".header").hide();

      (async () => {
        let dino = new dinoText();
        const response = await dino.getName();
        getElements(response);
      })();

      (async () => {
        let giphy = new giphyPic();
        const response = await giphy.getGiphyPic();
        getElements2(response);
      })();

      function getElements(response) {
        if (response) {
          $('#output').text(`${firstName} ${response[0][0]} ${lastName}`);
        } else {
          $('#output').text(`There was an error handling your request.`);
        }
      }

      function getElements2(response) {
        if (response) {
          $('#giphyOutput').html(`<img src="${response.data.images.fixed_height.url}">`);
        } else {
          $('#giphyOutput').text(`There was an error handling your request.`);
        }
      }
  });
});