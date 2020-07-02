import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { dinoText } from './../src/dino-text.js';

$(document).ready(function () {

  $('#submit-btn').click(function () {
      const firstName = $('#firstName').val();
      const lastName = $('#lastName').val();

      (async () => {
        let dino = new dinoText();
        const response = await dino.getName();
        getElements(response);
      })();

      function getElements(response) {
        if (response) {
          $('#output').text(`${firstName} ${response[0][0]} ${lastName}`);
        } else {
          $('#output').text(`There was an error handling your request.`);
        }
      }
  });
});