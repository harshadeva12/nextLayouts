import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button } from "antd";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange}>
            <Tab label="Ironing" value="1" />
            <Tab label="laundry" value="2" />
            <Tab label="instide windows" value="3" />
            <Tab label="instide fridge" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Button>Item One</Button> <Button>Item One</Button>
        </TabPanel>
        <TabPanel value="2">
          <Button>Item Two</Button>
        </TabPanel>
        <TabPanel value="3">
          <Button>Item Three</Button>
        </TabPanel>
        <TabPanel value="4">
          <Button>Item Four</Button>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
