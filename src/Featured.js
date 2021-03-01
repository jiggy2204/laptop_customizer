import React, { Component } from "react";
import FeaturedName from "./FeatureName";

export default class Featured extends Component {
  render() {
    const { features, itemHash, getFeature } = this.props;
    return features.map((feature, idx) => {
      const options = features[feature].map((item) => {
        <div id={idx} key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name === this.state.selected[feature].name}
            onChange={(e) => getFeature(feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({USCurrencyFormat.format(item.cost)})
          </label>
        </div>;
      });

      <FeaturedName options={options} />;
    });
  }
}
