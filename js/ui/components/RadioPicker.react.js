const React = require('React');

// props:
// options: Array<string>
// selected: string
// onChange: (option) => void

class Button extends React.Component {

  render() {
    const optionToggles = [];
    for (const option of this.props.options) {
      // HACK alert:
      if (option == 'Foreman') {
        optionToggles.push(
          <div className="radioDivider" />
        );
      }
      optionToggles.push(
        <div className="radioOption">
          {option}
          <input type="radio"
            className="radioCheckbox"
            key={'radio_option_'+ option}
            value={option}
            checked={option === this.props.selected}
            onChange={() => this.props.onChange(option)}
          />
        </div>
      );
    }

    return (
      <div>
        {optionToggles}
      </div>
    );
  }
}

module.exports = Button;
