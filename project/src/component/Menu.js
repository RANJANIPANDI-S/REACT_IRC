import React from "react";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";                                                                         const bull = (
<Box 
      component="span"
        
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
              >
                  
                    </Box>
                    );
export default function Category() {
  return (
    <Box
    sx={{

     backgroundColor:'white',
     backgroundSize: 'cover',
     minHeight: '100vh', 
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
   }}
   

                                                                     >
      <br></br>
<Grid container spacing={12} sx={{
  padding:'100px'
}}>
    
    <h1>BOOKS</h1>

<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7CNnhv7sfgEHBNOym0HFdDBw845UGYOVJoA&usqp=CAU"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
      History of the Art of Music
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹200.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button>
      </CardContent>
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71wsXKHG0ZL._AC_UF1000,1000_QL80_.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
      Science and Technology
        </Typography>
        <Typography variant="body2"  color="black" fontWeight="bold">
        ₹1000.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button>
      </CardContent>
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://5.imimg.com/data5/XN/QP/MY-49186363/information-technology-book.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
       Information Technology
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹1,300.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button>
      </CardContent>
     
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://5.imimg.com/data5/JK/HR/MY-2254382/web-technology-500x500.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        Delights Hanging Planter - Set Of Five
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹1,000.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button>
      </CardContent>
      
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400}}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkfByywRWjRWsSaGhlQhLmWLmX2xNESQFuPg&usqp=CAU"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
       Computer SCience
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹800.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button>
      </CardContent>
      
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4302-0032-1"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
       Java Programming
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹500.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button>
      </CardContent>
      
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR96-VEBe5H7SMo2b3lKtCn-vq6kzLwrF8WCA&usqp=CAU"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
      C++ Programming
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹1,500.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button>
      </CardContent>
      
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://www.madrasshoppe.com/135089-large_default/computer-science-and-engineering-recent-trends-rajesh.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
       Computer Science ang Engineering 
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹500.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button>
      </CardContent>
     
    </Card>
    </Grid>


    <Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJZV3gl1bjResD-8XE-4CZqngP5DM9so1ew&usqp=CAU"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
      Trust Technology
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹900.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button>
      </CardContent>
    </Card>
    </Grid>

    <Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51zR-7tBVxL._AC_UF1000,1000_QL80_.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
    Emerging Technology
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹800.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button>
      </CardContent>
    </Card>
    </Grid>

    <Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://m.media-amazon.com/images/I/515wCikEzqL._SL500_.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
     The Future of Disruptive Technologies
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹700.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button>
      </CardContent>
    </Card>
    </Grid>

    







    </Grid>
    </Box>
  );
}





