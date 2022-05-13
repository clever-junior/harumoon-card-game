import React from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
  }

  // Funções principais

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      this.validate();
    });
  }

  onSaveButtonClick = () => {
    const { cardTrunfo, cardList } = this.state;
    cardList.push(this.getState());
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
    this.ressetState();
  }

  onDeleteButtonClick = ({ target: { name } }) => {
    const { cardList } = this.state;
    const id = Number(name);
    if (cardList[id].cardTrunfo) {
      this.setState({
        hasTrunfo: false,
        cardList: cardList.filter((card, index) => index !== id),
      });
    } else {
      this.setState({
        cardList: cardList.filter((card, index) => index !== id),
      })      
    }
  }

  // Funções auxiliares

  getState = () => Object(this.state);

  validate = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;
    const cardAttrLimit = 90;
    const cardAttrPowerLimit = 210;
    const cardPowerSum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    if (cardName === ''
          || cardImage === ''
          || cardDescription === ''
          || cardAttr1 > cardAttrLimit
          || cardAttr1 < 0
          || cardAttr2 > cardAttrLimit
          || cardAttr2 < 0
          || cardAttr3 > cardAttrLimit
          || cardAttr3 < 0
          || cardPowerSum > cardAttrPowerLimit) {
      return this.setState({
        isSaveButtonDisabled: true,
      });
    }
    return this.setState({
      isSaveButtonDisabled: false,
    });
  }

  ressetState = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cardList,
    } = this.state;
    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }

        />
        <h1>Pré-visualização</h1>
        <Card
          id={ cardName }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isPreview
          onDeleteButtonClick={ this.onDeleteButtonClick }
        />
        <h1>Todas as cartas</h1>
        <CardList
          cardList={ cardList }
          onDeleteButtonClick={ this.onDeleteButtonClick }
        />
      </div>
    );
  }
}

export default App;
