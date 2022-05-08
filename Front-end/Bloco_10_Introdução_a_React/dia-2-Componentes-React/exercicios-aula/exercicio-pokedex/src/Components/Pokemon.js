import React from "react";
import PropTypes from "prop-types";
import './Pokemon.css'

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    const { value, measurementUnit } = averageWeight;

    return (
      <section className="pokemon">
        <img src={image} alt="Imagem do pokemon" />
        <div className="description">
          <span>{name}</span>
          <span>{type}</span>
          <span>
            Avarage Weight: {value}
            {measurementUnit}
          </span>
        </div>
      </section>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
  }),
};

export default Pokemon;
