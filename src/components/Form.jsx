import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Form/Input';
import Select from './Form/Select';
import Textarea from './Form/Textarea';

class Form extends Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <Input
          type="text"
          testId="name-input"
          name="cardName"
          title="Nome"
          value={ cardName }
          onInputChange={ onInputChange }
        />
        <Textarea
          testId="description-input"
          name="cardDescription"
          title="Descrição"
          value={ cardDescription }
          onInputChange={ onInputChange }
        />
        <Input
          type="number"
          testId="attr1-input"
          name="cardAttr1"
          title="Attr01"
          value={ cardAttr1 }
          onInputChange={ onInputChange }
        />
        <Input
          type="number"
          testId="attr2-input"
          name="cardAttr2"
          title="Attr02"
          value={ cardAttr2 }
          onInputChange={ onInputChange }
        />
        <Input
          type="number"
          testId="attr3-input"
          name="cardAttr3"
          title="Attr03"
          value={ cardAttr3 }
          onInputChange={ onInputChange }
        />
        <Input
          type="text"
          testId="image-input"
          name="cardImage"
          title="Nome"
          value={ cardImage }
          onInputChange={ onInputChange }
        />
        <Select
          testId="rare-input"
          name="cardRare"
          title="Raridade"
          value={ cardRare }
          onInputChange={ onInputChange }
        />
        {
          hasTrunfo ? <p> Você já tem um Super Trunfo em seu baralho </p> : <Input
            type="checkbox"
            testId="trunfo-input"
            name="cardTrunfo"
            title="Super Trybe Trunfo"
            value={ cardTrunfo }
            onInputChange={ onInputChange }
          />
        }
        <button
          type="button"
          data-testid="save-button"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
