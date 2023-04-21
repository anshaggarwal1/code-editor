import { useEffect, useState } from "react";
import "./App.css";
import Searchtoolbar from "./components/SearchToolbar";
import { Grid, Box } from "@mui/material";
import request from "./request";
import CodeCard from "./components/CodeCard";

function App() {
  const [value, setValue] = useState("");
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    getCodesList();
  }, []);
  return (
    <>
      <Searchtoolbar
        name={"search "}
        placeholder={"Search Code"}
        state={value}
        setState={setValue}
        afterAdd={getCodesList}
      />
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          {codes.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <Grid item align="center" xs={12} md={4}>
              <CodeCard
                title={item.title}
                color={item.background}
                description={item.description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );

  async function getCodesList() {
    let [err, res] = await request("GET", "/codes/list");
    let colors = [
      "linear-gradient(99deg, #5474ED, #1BB8FC)",
      "linear-gradient(99deg, #df335f, #e97a54)",
      "linear-gradient(315deg,#3bb78f,#0bab64 74%)",
      "linear-gradient(90deg,#ff8008ba 0,#ffc837 51%,#ff8008d4)",
    ];
    let arr = [];
    if (!err) {
      let index = 0;
      // eslint-disable-next-line no-unused-vars
      arr = res.data.map((item, i) => {
        if (index >= colors.length) {
          index = 0;
        }
        item.background = colors[index];
        index++;
        const obj = { ...item, ...item.projectId };
        delete item["projectId"];
        return obj;
      });
      setCodes(arr);
    }
  }
}

export default App;
