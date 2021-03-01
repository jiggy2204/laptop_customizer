import React, { Component } from "react";

export default class SummaryTotal extends Component {
  render() {
    const { total, usCurrency } = this.props;

    return (
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">{usCurrency.format(total)}</div>
      </div>
    );
  }
}
