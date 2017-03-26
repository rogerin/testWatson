'use strict';

const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
const fs = require('fs');

const visual_recognition = new VisualRecognitionV3({
  api_key: '--',
  version_date: '2016-05-19'
});

const params = {
  // must be a .zip file containing images
  //images_file: fs.createReadStream('./resources/rogerio.jpg')
  images_file: fs.createReadStream('./resources/imagens.zip')

};

visual_recognition.classify(params, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(res, null, 2));
  }
});
