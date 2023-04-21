/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Box,
  Button,
  Container,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddDialog from "./Dialog";
import request from "../request";
// eslint-disable-next-line react/jsx-key, react/prop-types
export default function Searchtoolbar({
  placeholder,
  state,
  setState,
  afterAdd,
}) {
  const [isClick, setIsclicked] = useState(false);
  const [values, setValues] = useState({
    title: "",
    description: "demke",
    language: "",
    code: "",
  });
  return (
    <>
      <TextField
        fullWidth
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={placeholder}
        variant="standard"
      />
      <div>
        <Button variant="contained" onClick={() => setIsclicked(true)}>
          Add Code
        </Button>
      </div>

      <AddDialog
        open={isClick}
        title="Upload Code"
        handleClose={() => {
          setIsclicked(false);
        }}
        loading={false}
        msg={{}}
      >
        <Box>
          <Container>
            <form>
              <TextField
                fullWidth
                name="title"
                type="text"
                id="outlined-basic"
                label="Enter Title"
                variant="outlined"
                onChange={({ target }) =>
                  setValues((val) => ({ ...val, title: target.value }))
                }
                value={values.title}
                error={Boolean(!values.title)}
                required
              />

              <TextField
                fullWidth
                name="language"
                type="text"
                id="outlined-basic"
                sx={{ mt: 2 }}
                label="Enter Language"
                variant="outlined"
                onChange={({ target }) =>
                  setValues((val) => ({ ...val, language: target.value }))
                }
                value={values.language}
                error={Boolean(!values.language)}
                required
              />
              <TextField
                id="outlined-basic"
                variant="standard"
                sx={{ mt: 2 }}
                fullWidth
                multiline
                type="text"
                error={Boolean(!values.code)}
                label="Code"
                onChange={({ target }) =>
                  setValues((val) => ({ ...val, code: target.value }))
                }
                name="code"
                value={values.code}
                maxRows={5}
                InputProps={{ inputProps: { maxLength: 500 } }}
              />
              <Button
                color="primary"
                style={{ height: "3em", margin: "10px 0px" }}
                fullWidth
                margin="normal"
                size="large"
                type="submit"
                onClick={(e) => UploadCode(e)}
                variant="contained"
              >
                Submit
              </Button>
            </form>
          </Container>
        </Box>
      </AddDialog>
    </>
  );

  async function UploadCode(e) {
    e.preventDefault();
    let [err, res] = await request("POST", "/codes", { ...values });
    if (res.success) afterAdd();
  }
}
