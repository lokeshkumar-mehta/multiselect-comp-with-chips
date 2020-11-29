import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  box-sizing: border-box;
  width: 300px;
  min-height: 40px;
  position: relative;

  .arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    position: relative;
  }
  
  .up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }
  
  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
`;

export const DropdownSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  height: auto;
  box-sizing: border-box;
`;

export const DropdownSelectedValueContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DropdownTrigger = styled.div`
  float: right;
  height: 100%;
  padding-left: 10px;
`;

export const DropdownContainer = styled.div`
  display: block;
  position: absolute;
  z-index: 1;
  top: 100%;
  border: 1px solid black;
  max-height: 200px;
  overflow-y: scroll;
  width: 100%;
`;


