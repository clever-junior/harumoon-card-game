import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  showButton = () => {
    const { isPreview, onDeleteButtonClick, id } = this.props;
    if (!isPreview) {
      return (
        <li>
          <button
            type="button"
            onClick={ onDeleteButtonClick }
            name={ String(id) }
            data-testid="delete-button"
          >
            Excluir
          </button>
        </li>
      );
    }
  };

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
    } = this.props;
    return (
      <form>
        <ul>
          <li data-testid="name-card">{cardName}</li>
          <li>
            <figure>
              <img src={ cardImage } alt={ cardName } data-testid="image-card" />
            </figure>
          </li>
          <li data-testid="description-card">{cardDescription}</li>
          <li data-testid="attr1-card">{cardAttr1}</li>
          <li data-testid="attr2-card">{cardAttr2}</li>
          <li data-testid="attr3-card">{cardAttr3}</li>
          <li data-testid="rare-card">{cardRare}</li>
          {
            cardTrunfo
              ? <p data-testid="trunfo-card"> Super Trunfo</p>
              : <p> Não é trunfo </p>
          }
          {
            this.showButton()
          }
        </ul>
      </form>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isPreview: PropTypes.bool.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};

export default Card;
