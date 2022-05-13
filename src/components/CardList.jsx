import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
  render() {
    const { cardList, onDeleteButtonClick } = this.props;
    return (
      cardList.map((card, index) => (<Card
        id={ String(index) }
        key={ index }
        cardName={ card.cardName }
        cardImage={ card.cardImage }
        cardDescription={ card.cardDescription }
        cardAttr1={ card.cardAttr1 }
        cardAttr2={ card.cardAttr2 }
        cardAttr3={ card.cardAttr3 }
        cardRare={ card.cardRare }
        cardTrunfo={ card.cardTrunfo }
        isPreview={ false }
        onDeleteButtonClick={ onDeleteButtonClick }
      />))
    );
  }
}

CardList.propTypes = {
  onDeleteButtonClick: PropTypes.func.isRequired,
  cardList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
