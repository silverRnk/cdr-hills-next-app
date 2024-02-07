import styled from "styled-components";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const SelectionGroup = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const GSIWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
`

const GSContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
`

const GSButton = styled.button`
    all: unset;
    height: 50px;
    width: 300px;
    font-size: 1.05rem;
    text-align: center;
    color: white;
    background-color: ${prop => prop.theme.colors.primary};
    cursor: pointer;
    transition: all 0.25s;
    border-radius: 5px;

    &:active{
        opacity: 0.8;
        /* filter: brightness(0.8); */
    }
`

const Label = styled.label`
`

const UpdateGradeLevelAndSection = () => {

  return (<>
  <GSContainer role="form">
    <GSIWrapper>
      <SelectionGroup>
        <Label htmlFor='section-selection'>Grade</Label>
        <Select id='grade-selection' role='listbox' aria-label="Customized Form Selection">
          <MenuItem>Grade 1</MenuItem>  
        </Select>  
      </SelectionGroup>
      <SelectionGroup>
        <Label htmlFor='section-selection'>Section</Label>
        <Select id='section-selection' role='listbox' aria-label="Customized Form Selection">
          <MenuItem></MenuItem>
        </Select>
      </SelectionGroup>
    </GSIWrapper>
    <GSButton>Update</GSButton>
  </GSContainer>
  </>)
}

export default UpdateGradeLevelAndSection;