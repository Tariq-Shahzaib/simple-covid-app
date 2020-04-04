import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline" color="inherit">
          Covid 19 Patients Tracking System
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);
