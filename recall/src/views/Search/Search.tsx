import PetsIcon from "@mui/icons-material/Pets"
import "./Search.sass"
import { TextField } from "@mui/material"
import { Box } from "@mui/system"

const Search = () => {
  return (
    <Box className="search-container">
      <Box className="circle">
        <Box className="header">
          <div className="logo-wrapper">
            <PetsIcon className="logo" />
          </div>
        </Box>
        <Box className="input-wrapper">
          <TextField
            label="search"
            variant="standard"
            className="search-input"
            fullWidth
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Search
