import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from '@mui/material/Unstable_Grid2';
import Indicator from './components/Indicator';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Grid container spacing={5}>
      <Grid>1</Grid>
      <Grid>2</Grid>
      <Grid>3</Grid>
      <Grid>4</Grid>
      <Grid>5</Grid>
      <Grid>6</Grid>
    </Grid>
  )
}

export default App
