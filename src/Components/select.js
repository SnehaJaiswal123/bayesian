import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/system';

const CustomSelect = styled(Select)(({ theme }) => ({
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'black',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'black',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'black',
  },
  '& .MuiSelect-select': {
    color: 'white',
    backgroundColor: 'black',
  },
  '& .MuiSvgIcon-root': {
    color: 'white',
  },
  '& .Mui-focused .MuiSvgIcon-root': {
    color: 'black',
  }
}));

// const options = [
//   { value: 'option1', label: 'Option 1' },
//   { value: 'option2', label: 'Option 2' },
//   { value: 'option3', label: 'Option 3' },
// ];

const SelectItem = ({options,name,sendData}) => {
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    sendData(event.target.value)
  };

  return (
    <FormControl variant="outlined" sx={{minWidth:200, margin:"1em"}}>
      <InputLabel style={{ color: 'white' }}>{name}</InputLabel>
      <CustomSelect
        value={selectedOption}
        onChange={handleChange}
        label={name}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </CustomSelect>
    </FormControl>
  );
};

export default SelectItem;
