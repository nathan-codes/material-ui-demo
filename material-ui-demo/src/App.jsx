import "./App.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function App() {
  return (
    <>
      <Button
        variant="text"
        onClick={() => {
          alert("Yess");
        }}
      >
        Contained
      </Button>``
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Contained</Button>

      <IconButton color="secondary" aria-label="add an alarm">
        <AddShoppingCartIcon />
      </IconButton>
    </>
  );
}

export default App;
