import React from "react";
import {Typography,AppBar,Button,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from '@material-ui/core'
import {PhotoCamera} from '@material-ui/icons'


const App=()=>{
return(
   <>
    <CssBaseline/>
    <AppBar position="relative">
        <Toolbar>
            <PhotoCamera/>
            <Typography variant ="h6">Photo album</Typography>
        </Toolbar>

    </AppBar>
   <main>
        <div>
             <Container maxWidth="sm">
                <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                    Photo album
                </Typography>
                <Typography variant='h5' align='center' color='textSecondary' paragraph>
                    Hello evreryone this is a photo album and this sentence
                     is long because i want to make it long
                </Typography>
                <div>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                        <Button variant='contained' color='primary'>
                            See my photos
                        </Button>
                        </Grid>
                        <Grid item>
                        <Button variant='outlined' color='primary'>
                            Secondary action
                        </Button>
                        </Grid>
                    </Grid>
                    
                </div>
             </Container>
        </div>

   </main>
   
   
   
   </>
    
)
}




export default App