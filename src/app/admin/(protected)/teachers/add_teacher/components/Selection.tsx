import { IsRequiredIndicator, Label, ValidationFeedback } from "@/styled-component/form-components"
import { styled as styleMUI } from '@mui/material/styles';
import { FormControl, InputBase, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import styled from "styled-components";
import { AddTeacherInput } from "../type";
import { Path, UseControllerProps, UseFormRegister, useController } from "react-hook-form";
import { useEffect } from "react";
import {theme as UITheme} from "@/styled-component/theme"

const InputItem = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
  `;

const BootstrapInput = styleMUI(InputBase)(({ theme, error }) => ({
    '& .MuiInputBase-input': {
      innerHeight: 10,
      borderRadius: 2,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid black',
      fontSize: 15,
      padding: '6px 26px 6px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      '&:focus': {
        borderRadius: 2,
        borderColor: UITheme.colors.primary,
        boxShadow: `0 0 0 1px ${UITheme.colors.primary}`,
      },
    },
    '& .Mui-error': {
      borderRadius: 2,
      borderColor: UITheme.colors.red,
    }
  }));

type FieldRegProp = {
    name: Path<AddTeacherInput>,
    register: UseFormRegister<AddTeacherInput>,
    control: UseControllerProps<AddTeacherInput>,
    required?: boolean,
    isValid?: boolean,
    message?: string
  }

  interface IItems {
    value: string | number,
    label: string | number,
    
  }

  interface SelectionPropsExtension {
    label:string,
    items: Array<IItems>,
    onSelect: (value: any) => void,
  }

  type SelectionOptionsProps = FieldRegProp & SelectionPropsExtension

  const SelectionOptions = (prop: SelectionOptionsProps) => {
    const {register, name, control} = prop
    const {fieldState, formState, field} = useController(control)

    useEffect(() => {

      // register(name, {required: prop.required})
    })

    const handleSelect = (event: SelectChangeEvent) => {
      field.onChange(event.target.value)
    }

    return (
      <>
        <InputItem>
          <Label htmlFor='item-selection'>{prop.label}<IsRequiredIndicator/></Label>
          <FormControl error={fieldState.invalid}>
          <Select 
            role="listbox" 
            id='item-selection' 
            onChange={handleSelect} 
            input={<BootstrapInput/>}
            style={{height: "35px", width: "100%"}}>
            {/* {prop.items.length != 0 ? 
            <>
              {prop.items.map((value, index) => <MenuItem key={`${value.value}-${index}`} value={index}>{value.label}</MenuItem>)}
            </>: <>
            <MenuItem value={""}>--- No Item in the Selection ---</MenuItem>
            </>} */}
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </Select>  
          </FormControl>
          <ValidationFeedback 
            isInvalid={fieldState.invalid} 
            isVisible={fieldState.invalid}>{prop?.message}</ValidationFeedback>
        </InputItem>
      </>
    )
  }

export default SelectionOptions