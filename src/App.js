import React from 'react';
import Form from './components/Form/Form';

class App extends React.Component {
/*  constructor() {
    super();

    state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      cardTrunfo: false,
    };
  } */

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

export default App;
