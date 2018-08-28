import React, { Component } from 'react';

export default class GifAnimation extends Component {
  render () {
    return (
        <iframe src="https://giphy.com/embed/18hwXXbrTpDws" width="480" height="480" frameBorder="0"
                className="giphy-embed" allowFullScreen title="time-to-be-productive"></iframe>
    );
  }

  componentDidMount () {
    console.log('It did mount !');
    fetch('https://api.giphy.com/v1/gifs/random?api_key=jfMEpPrComeMggE8RROdHEYEFggsGEIe')
    .then(res => {
      console.log('fetched !', res);
    })
    .catch(err => {
      console.error(err);
    })
  }
}