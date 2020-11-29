import React from 'react';
import {
  OptionWrapper
} from './OptionCompStyle'

const OptionComp = ({
  checked, dropdownOption, onSelect
}) => {

  return (
    <OptionWrapper onClick={() => onSelect(dropdownOption.props.value)}>
      <input type="checkbox" name={dropdownOption.props.value} checked={checked} readOnly />
      {dropdownOption}
    </OptionWrapper>
  );
};

export default OptionComp;
