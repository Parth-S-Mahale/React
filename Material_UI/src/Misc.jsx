import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send"
import { Alert } from "@mui/material";

export default function Misc() {

  let handleClick = () => {
    console.log("Clicked");
  };

  return (
    <>
    <h1 className="mainHeader">Material UI</h1>
    
    <Stack spacing={2} direction="row">
      <Button onClick={handleClick} variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined" color="success">Success</Button>
      <Button variant="outlined" color="error">Error!</Button>
      <Button variant="outlined" color="warning" size="large">Error!</Button>
    </Stack>

    <br /><br />

    <Stack className="midBtn" spacing={2} direction="row">
      <Button variant="outlined" startIcon={<DeleteIcon/>}>Error!</Button>
      <Button variant="contained" startIcon={<SendIcon/>}>Error!</Button>
    </Stack>

    <br /><br />

      <Alert severity="error">Delete option is given</Alert>
    
    </>
  );
}
