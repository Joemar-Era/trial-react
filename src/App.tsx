import { Box, Container} from "@mui/material"


function App() {
  return (
    <Container 
    sx = {{ 
      bgcolor: 'tomato', 
      height : '100vh', 
      alignItems: 'center', 
      justifyContent: 'center', 
      display: 'flex'
      }}>

      <Box 
      sx = {{ 
        bgcolor: 'skyblue', 
        height : '100px', 
        width : {xs: 1, md: 200 } 
        }}>
      </Box>
      
    </Container>
  )
}

export default App
