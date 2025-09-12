import { 
  Box, 
  Button, 
  Container, 
  IconButton, 
  Stack,
} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';


function App() {
  return (
    <Container 
    sx = {{ 
      bgcolor: 'gray', 
      height : '100vh', 
      alignItems: 'center', 
      justifyContent: 'center', 
      display: 'flex'
      }}>

      <Box 
      sx = {{ 
        bgcolor: 'skyblue', 
        height : '500px', 
        width : {xs: 1, md: 700 } 
        }}>

      <Stack spacing={4}>
       <Stack spacing={2} direction="row">

          {/* text type button */}
          <Button variant="text" href="https://mui.com/material-ui/react-button/">
          Assign Container
          </Button>

          {/* contained type button filled with color*/}
          <Button variant="contained">
          Contained
          </Button>

          {/* outlined type button with border only*/}
          <Button variant="outlined">
          Outlined
          </Button>
         </Stack>

         <Stack spacing={2} direction="row">

          <Button variant = "contained" color = "primary">
          Primary
          </Button>

          <Button variant = "contained" color = "secondary">
          Secondary
          </Button>

          <Button variant = "contained" color = "error">
          Error
          </Button>

          <Button variant = "contained" color = "warning">
          Warning
          </Button>

          <Button variant = "contained" color = "info">
          Info
          </Button>

          <Button variant = "contained" color = "success">
          Success
          </Button>          
         </Stack>

         <Stack display="block" spacing={2} direction="row">
          
          <Button variant = "contained" size = "small">
            Small
          </Button>

          <Button variant = "contained" size = "medium">
            Medium
          </Button>

          <Button variant = "contained" size = "large">
            Large
          </Button>
          
         </Stack>

          <Stack display="block" spacing={2} direction="row">

            <Button variant="contained" startIcon={<SendIcon />} disableRipple onClick = {() => alert("You clicked the button")}>
            Send
            </Button>

            <Button variant="contained" endIcon={<SendIcon />}>
            Send
            </Button>

            <IconButton aria-label="send" color="success" size="large">
              <SendIcon />
            </IconButton>

          </Stack>

       </Stack>
      </Box>

    </Container>
  )
}

export default App 
