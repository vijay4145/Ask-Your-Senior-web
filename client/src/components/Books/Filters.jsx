import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import { FormControlLabel } from '@mui/material';
import { useLocation } from 'react-router-dom';

export const Filters = (props) => {
  const [open, setOpen] = React.useState(false);
  const [semester, setSemester] = useState(null);
  const [branch, setBranch] = useState(null);

  const handleRadioChange = (event) => {
    setSemester(event.target.value);
  };

  const handleClickOpen = (branch) => {
    setOpen(true);
    setBranch(branch)
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  useEffect(()=>{
    if(semester !== null){
      const url = `${window.location.origin + window.location.pathname}?college=${props.college_param}&branch=${branch}&sem=${semester}`
      window.location.href = url;
    }

  },[semester])
  return (
    <>
    <div id='branch' className='flex gap-2 flex-wrap px-3 py-1'>
      <div className={`${props.branch === 'computer-engineering' ? 'bg-blue-100 rounded-lg':''}`}>
        <Button onClick={()=>handleClickOpen('computer-engineering')} className='bg-gray-200 hover:bg-gray-300 px-3 rounded-lg py-2 '>Computer Engineering</Button>
      </div>
      <div className={`${props.branch === 'it-engineering' ? 'bg-blue-100 rounded-lg':''}`}>
          <Button onClick={()=>handleClickOpen('it-engineering')} className='bg-gray-200 hover:bg-gray-300 px-3 rounded-lg py-2'>IT Engineering</Button>
      </div>
      <div className={`${props.branch === 'mechanical-engineering' ? 'bg-blue-100 rounded-lg':''}`}>
        <Button onClick={()=>handleClickOpen('mechanical-engineering')} className='bg-gray-200 hover:bg-gray-300 px-3 rounded-lg py-2'>Mechanical Engineering</Button>
      </div>
      <div className={`${props.branch === 'electrical-engineering' ? 'bg-blue-100 rounded-lg':''}`}>
        <Button onClick={()=>handleClickOpen('electrical-engineering')} className='bg-gray-200 hover:bg-gray-300 px-3 rounded-lg py-2'>Electrical Engineering</Button>
      </div>
        

        <div>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Select Semester</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                onChange={handleRadioChange}
              >
              <FormControlLabel value="1" control={<Radio />} label="Semester 1" />
              <FormControlLabel value="2" control={<Radio />} label="Semester 2" />
              <FormControlLabel value="3" control={<Radio />} label="Semester 3" />
              <FormControlLabel value="4" control={<Radio />} label="Semester 4" />
              <FormControlLabel value="5" control={<Radio />} label="Semester 5" />
              <FormControlLabel value="6" control={<Radio />} label="Semester 6" />
              <FormControlLabel value="7" control={<Radio />} label="Semester 7" />
              <FormControlLabel value="8" control={<Radio />} label="Semester 8" />
              </RadioGroup>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>

    </div>
    </>
  )
}
