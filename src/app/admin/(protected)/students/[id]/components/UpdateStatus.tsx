import styled from "styled-components";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: 300px;
`;

const Form = styled.div``

const UpdateButton = styled.button`
  all: unset;
  background-color: ${prop => prop.theme.colors.primary};
  font-size: 1.05rem;
  color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 1px lightgray;
  transition: all 0.25s;
  padding: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 3px 3px 3px lightgray;
  }

  &:active {
    opacity: 0.8;
  }
`;

const Label = styled.label``

const UpdateStatusForm = () => {
    return (
    <>
    <Form role="form">
      <Label htmlFor="status-select">
          Update Status
      </Label>
      <FormWrapper>
         <Select
            id="status-select"
            aria-label="Update Status"
            style={{height: '50px', width: '100%', flex: 1 }}>
                  <MenuItem value={'old'}>Old</MenuItem>
                  <MenuItem value={'new'}>New</MenuItem>
                  <MenuItem value={'transferee'}>Transferee</MenuItem>
          </Select>
                <UpdateButton>Update</UpdateButton>
      </FormWrapper>
    </Form>
      
    </>)
  }

  export default UpdateStatusForm;