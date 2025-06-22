import { useState, useMemo } from "react";
import { Box, Stack, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ list, filterList }) {
  const [searchText, setSearchText] = useState("");

  // Filter the hospital list whenever the search text changes
  const matchedHospitals = useMemo(() => {
    if (!searchText.trim()) return list;

    return list.filter((hospital) =>
      hospital["Hospital Name"]
        .toLowerCase()
        .includes(searchText.trim().toLowerCase())
    );
  }, [searchText, list]);

  // Trigger filter function on form submit
  const handleSearch = (e) => {
    e.preventDefault();
    filterList(matchedHospitals);
  };

  return (
    <Box component="form" onSubmit={handleSearch}>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Search Hospital"
          variant="outlined"
          fullWidth
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          inputProps={{ maxLength: 100 }} // Limit max characters
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<SearchIcon />}
          sx={{ py: "15px", px: 8, flexShrink: 0 }}
          disableElevation
        >
          Search
        </Button>
      </Stack>
    </Box>
  );
}
