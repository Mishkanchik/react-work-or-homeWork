import React from "react";
import { Container, Card, CardContent, Typography } from "@mui/material";
import HeaderComponent from "../HeadersComponent/headers.jsx"

const SongPage = () => {
  const posterUrl = "https://images.genius.com/e1955b769800c183c03b5832d398333a.1000x1000x1.jpg"; 

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", height: "100vh" }}>
      <HeaderComponent />
      <Container maxWidth="md" style={{ marginTop: "20px", textAlign: "center" }}>
        <Card style={{ backgroundColor: "#121212", color: "#fff" }}>
          <img 
            src={posterUrl} 
            alt="The Unsleeping - Wonderland" 
            style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }} 
          />
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              The Unsleeping - Wonderland
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Ласкаво просимо на сторінку пісні "The Unsleeping - Wonderland".
              Тут ви можете переглянути постер та інформацію про пісню.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default SongPage;
