import { Button, Container, Typography } from "@mui/material";
import AllPistes from "./components/AllPistes";
import { useState } from "react";
import AddPiste from "./components/AddPiste";
function App() {
  const [open, setOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container
      fixed
      sx={{
        backgroundColor: "#f7f4f4",
        my: "25px",
        py: "25px",
        borderRadius: "0.5em",
      }}
    >
      <Typography sx={{ textAlign: "center" }} variant="h5">
        Piste Management
      </Typography>
      <Button sx={{ my: "10px" }} variant="contained" onClick={handleClickOpen}>
        Add Piste
      </Button>
      <AddPiste
        refresh={() => setRefresh()}
        open={open}
        handleClose={handleClose}
      />
      <AllPistes refresh={refresh} />
    </Container>
  );
}

export default App;
