import React from "react";

import {
  Grid,
  Typography,
  Container,
  Button,
  Stack,
  Box,
} from "@mui/material";

import PageContainer from "../components/PageContainer";
import SimplePaper from "../components/SimplePaper";

const Dashboard = ({setLoggedIn}) => {
  return (
    <PageContainer>
      <Container maxWidth="lg" sx={{ marginTop: 5 }}>
        <Grid container flex={1} alignItems="center" justifyContent="right">
          <Grid item xs={9}>
            <Typography variant="h1" color="primary.dark">
              Dashboard
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="primary" sx={{ paddingX: 4 }}>
              Create New
            </Button>
          </Grid>
          <Grid item xs={1}>
            {/* TEMPORARY LOGOUT BUTTON */}
            <Button variant="contained" color="primary" sx={{ paddingX: 4 }}
              onClick={()=> setLoggedIn(false)}>
              Logout
            </Button>
          </Grid>
        </Grid>
      </Container>
      <MainContent />
    </PageContainer>
  );
};


const MainContent = () => {
  return (
    <Grid container sx={{ marginTop: 2 }} spacing={4}>
      <Grid item xs={5}>
        <Stack spacing={4}>
          <SimplePaper style={{ display: 'flex', flexDirection: 'column' }} height={350}>
            <Typography variant="h4" gutterBottom sx={{ alignSelf: 'flex-start' }}>
              Pending Requests
              <h2 align='center'> 34 </h2>
              <h6 text-align = 'left'> Frequent Reasons for Return:</h6>
            </Typography>
          </SimplePaper>
          <SimplePaper sx={{ backgroundColor: 'lightgrey' }} height={200}>
  <Typography variant="h4" gutterBottom sx={{ alignSelf: 'flex-start'}}>
    Awaiting Review
    <Box sx={{ 
 width: '100%', 
 height: '60px', 
 justifyContent: 'flex-start', 
 display: 'flex', 
 borderRadius: 5, 
 border: '3px solid #000', 
 padding: 1, 
 alignItems: "center",
 marginTop: 2
}}>
 <h6>Order 1</h6>
</Box>
<Box sx={{ 
 width: '100%', 
 height: '60px', 
 justifyContent: 'flex-start', 
 display: 'flex', 
 borderRadius: 5, 
 border: '3px solid #000', 
 padding: 1, 
 alignItems: "center",
 marginTop: 2
}}>
 <h6>Order 2</h6>
</Box>
  </Typography>
</SimplePaper>
        </Stack>
      </Grid>
      <Grid item xs={7}>
        <Stack spacing={4}>
        <SimplePaper height={200} sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ width: '50%', height: '200px', backgroundColor: 'lavender', padding: 2 }}>
        <Typography variant="h6" gutterBottom sx={{selfAlign: 'flex-start'}}>
          Deliveries En Route
          <h1> 2 </h1>
        </Typography>
        {/* Add your content for deliveries on route here */}
      </Box>
      <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginRight: 2, marginLeft: 2}}>
        <Box sx={{ backgroundColor: '#98FF98', padding: 2, borderRadius: 5, 
 border: '3px solid #000', marginBottom: 2}}>
          <Typography variant="body1">Order Number 1: Delayed by 3 days</Typography>
        </Box>
        <Box sx={{ backgroundColor: '#98FF98', padding: 2, borderRadius: 5, 
 border: '3px solid #000', }}>
          <Typography variant="body1">Order Number 2: Early by 3 days</Typography>
        </Box>
        {/* Add more boxes for order numbers as needed */}
      </Box>
    </SimplePaper>
          <SimplePaper height={350}>
            <Typography variant="h4" gutterBottom sx={{alignSelf: 'flex-start',}}>
              Total Returns
              <select id="Time of Request">
              <option value="This Week" selected>This Week</option>
              <option value="This Month">This Month</option>
              <option value="This Year">This Year</option>
              </select>
            </Typography>
          </SimplePaper>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Dashboard;