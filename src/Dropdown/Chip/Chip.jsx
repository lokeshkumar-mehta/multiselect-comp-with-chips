import React from 'react';
import {
  ChipWrapper
} from './ChipStyle';
import { ReactComponent as ClearICon } from './clear-icon.svg';

const Chip = ({
  value, onClear
}) => {
  return (
    <ChipWrapper>
      <span>
        {value}
      </span>
      <ClearICon onClick={() => onClear(value)}>
        X
      </ClearICon>
    </ChipWrapper>
  );
};

export default Chip;
