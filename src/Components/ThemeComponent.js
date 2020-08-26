import React from "react";
import Button from "@material-ui/core/Button";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const themeExample = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  }
});

export default function ThemeComponent() {
  return (
    <ThemeProvider theme={themeExample}>
      <div >
        <Button color="primary">foo</Button>
        <Button color="secondary">bar</Button>
      </div>
    </ThemeProvider>
  );
}