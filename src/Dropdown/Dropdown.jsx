import React from 'react';
import Chip from './Chip/Chip';

import {
  DropdownWrapper,
  DropdownContainer,
  DropdownSelect,
  DropdownSelectedValueContainer,
  DropdownTrigger
} from './DropdownStyle';
import OptionComp from './Option/OptionComp';

class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hideDropdownContainer: true
    };

    this.showDropdownContainer = this.showDropdownContainer.bind(this);
    this.handleChildSelect = this.handleChildSelect.bind(this);
    this.handleChildClear = this.handleChildClear.bind(this);
    this.handleAwayClick = this.handleAwayClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  showDropdownContainer(event) {
    event.stopPropagation();
    event.preventDefault();

    this.setState(prevState => ({
      hideDropdownContainer: !prevState.hideDropdownContainer
    }));
  }

  handleAwayClick(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      this.setState({
        hideDropdownContainer: true
      });
    }
  }

  handleKeyDown(event) {
    if (event.which === 27) {
      this.setState({
        hideDropdownContainer: true
      });
    }
  }

  handleChildSelect(optionValue) {
    const { value, onChange } = this.props;

    let newValue = [];

    if (value.indexOf(optionValue) > -1) {
      newValue = value.filter(v => v !== optionValue);
    } else {
      newValue = value.concat(optionValue);
    }

    onChange(newValue);
  }

  handleChildClear(clearValue) {
    const { onChange, value } = this.props;

    onChange(value.filter(v => v !== clearValue));
  }

  render() {
    const { hideDropdownContainer } = this.state;
    const { children, value } = this.props;

    return (
      <DropdownWrapper tabIndex="-1" onKeyDown={this.handleKeyDown} onBlurCapture={this.handleAwayClick}>
        <DropdownSelect>
          <DropdownSelectedValueContainer>
            {value.map(v => (
              <Chip
                key={v}
                value={v}
                onClear={this.handleChildClear}
              />
            ))}
          </DropdownSelectedValueContainer>
          <DropdownTrigger
            role="button"
            onClick={this.showDropdownContainer}
            className="dropdown-btn"
          >
            <i className={`arrow ${!hideDropdownContainer ? 'up' : 'down'}`}></i>
          </DropdownTrigger>
        </DropdownSelect>
        {
          !hideDropdownContainer &&
          <DropdownContainer className="dropdown-container">
            {(children || []).map(child => (
              <OptionComp
                key={child.props.value}
                checked={value.indexOf(child.props.value) !== -1}
                dropdownOption={child}
                onSelect={this.handleChildSelect}
              />
            ))}
          </DropdownContainer>
        }
      </DropdownWrapper>
    );
  }
}

export default Dropdown;

