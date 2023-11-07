import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export default function AddPiste({ open, handleClose, refresh }) {
  const [dataForm, setDataForm] = useState({
    pisteName: "",
    length: null,
    slope: null,
    color: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/add`, {
      namePiste: dataForm.pisteName,
      length: dataForm.length,
      slope: dataForm.slope,
      color: dataForm.color,
    });
    refresh(false);
    console.log("collected data", dataForm);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle textAlign={"center"}>ADD PISTE</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          //  margin="dense"
          id="name"
          label="Piste Name"
          type="text"
          name="pisteName"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          autoFocus
          //  margin="dense"
          id="length"
          label="Length"
          type="number"
          name="length"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          autoFocus
          //  margin="dense"
          id="slope"
          label="Slope"
          name="slope"
          type="number"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
        <FormControl sx={{ my: "15px" }} fullWidth>
          <InputLabel id="demo-simple-select-label">Color</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="color"
            label="Color"
            onChange={handleChange}
            value={dataForm.color}
          >
            <MenuItem value="GREEN">GREEN</MenuItem>
            <MenuItem value="BLUE">BLUE</MenuItem>
            <MenuItem value="RED">RED</MenuItem>
            <MenuItem value="BLACK">BLACK</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
