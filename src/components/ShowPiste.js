import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
export default function ShowPiste({ handleClose, open, row }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle textAlign={"center"}>Piste Details</DialogTitle>
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
          value={row.piste}
          disabled
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
          disabled
          value={row.length}
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
          disabled
          value={row.slope}
        />
        <FormControl sx={{ my: "15px" }} fullWidth>
          <InputLabel id="demo-simple-select-label">Color</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="color"
            label="Color"
            disabled
            value={row.color}
          >
            <MenuItem value="GREEN">GREEN</MenuItem>
            <MenuItem value="BLUE">BLUE</MenuItem>
            <MenuItem value="RED">RED</MenuItem>
            <MenuItem value="BLACK">BLACK</MenuItem>
          </Select>
        </FormControl>
        <TextField
          autoFocus
          //  margin="dense"
          id="nb"
          label="Skier's Number"
          name="slope"
          type="number"
          fullWidth
          variant="standard"
          disabled
          value={row.nbLengthSkier}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
