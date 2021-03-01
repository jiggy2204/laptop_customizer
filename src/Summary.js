import React, { Component } from "react";

export default class Summary extends Component {
  render() {
    const { summary, usCurrency, featureHash, selectedOption } = this.props;

    return summary.map((feature, idx) => {
      <div id="summary_area" key={idx}>
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {usCurrency.format(selectedOption.cost)}
          </div>
        </div>
      </div>;
    });
  }
}
