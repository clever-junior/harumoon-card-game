import React, { Component } from 'react';
import Input from '../Input';
import Select from '../Select';

class Form extends Component {
  render() {
    /* const {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props; */
    return (
      <form>
        <Input
          type="text"
          testId="name-input"
          name="cardName"
          title="Nome"
        />
        <textarea
          data-testid="description-input"
        />
        <Input
          type="number"
          testId="attr1-input"
          name="cardAttr1"
          title="Attr01"
        />
        <Input
          type="number"
          testId="attr2-input"
          name="cardAttr2"
          title="Attr02"
        />
        <Input
          type="number"
          testId="attr3-input"
          name="cardAttr3"
          title="Attr03"
        />
        <Input
          type="text"
          testId="image-input"
          name="cardImage"
          title="Nome"
        />
        <Select
          testId="rare-input"
          name="cardRare"
          title="Raridade"
        />
        <Input
          type="checkbox"
          testId="trunfo-input"
          name="cardTrunfo"
          title="Super Trybe Trunfo"
        />
        <button
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
