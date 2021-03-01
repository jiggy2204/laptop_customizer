import React, { Compont } from "react";

export default class FeatureName extends Component {
  render() {
      const { options } = this.props
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}
