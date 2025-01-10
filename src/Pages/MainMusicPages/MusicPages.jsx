import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const SongPage = () => {
  return (
    <Box sx={{ backgroundColor: "#121212", color: "#fff", p: 3, width: "100vw", minHeight: "100vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Box
          component="img"
          src="https://i.scdn.co/image/ab67616d0000b2731b699e06674e367eff84ccd8" 
          alt="Album Cover"
          sx={{ width: 120, height: 120, borderRadius: 2, mr: 2 }}
        />
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Deviatve
          </Typography>
          <Typography variant="subtitle1">Мініальбом • 2018</Typography>
          <Typography variant="subtitle2">5 пісень • 17 хвилин</Typography>
        </Box>
      </Box>

      <List>
        <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
          <ListItemText primary="You Drive My Four Wheel Coffin" />
          <Typography>5:01</Typography>
        </ListItem>
        <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
          <ListItemText primary="Wonderland" />
          <Typography>3:12</Typography>
        </ListItem>
        <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
          <ListItemText primary="Fantastic" />
          <Typography>3:23</Typography>
        </ListItem>
        <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
          <ListItemText primary="Denise" />
          <Typography>2:28</Typography>
        </ListItem>
        <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
          <ListItemText primary="People All Around" />
          <Typography>3:50</Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default SongPage;
