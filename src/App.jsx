import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Grid, Paper, Box, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, People, Groups, Event, Settings, BarChart } from '@mui/icons-material';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#FF6B35' }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Dubai Communities Admin
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              {['Dashboard', 'Users', 'Communities', 'Meetups', 'Analytics', 'Settings'].map((text, index) => (
                <ListItem button key={text} component={Link} to={index === 0 ? '/' : `/${text.toLowerCase()}`}>
                  <ListItemIcon>
                    {index === 0 && <Dashboard />}
                    {index === 1 && <People />}
                    {index === 2 && <Groups />}
                    {index === 3 && <Event />}
                    {index === 4 && <BarChart />}
                    {index === 5 && <Settings />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
                  <Typography component="h2" variant="h6" color="primary" gutterBottom>
                    Admin Dashboard
                  </Typography>
                  {/* Dashboard content */}
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
                  <Typography component="h2" variant="h6" color="primary" gutterBottom>
                    Quick Stats
                  </Typography>
                  {/* Stats content */}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Router>
  );
}

export default App;