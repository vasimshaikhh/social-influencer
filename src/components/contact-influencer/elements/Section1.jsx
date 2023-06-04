import React, { useEffect, useState } from 'react'
import { Grid, TextField, Button, Card, CardContent, Typography, Container, Paper } from '@mui/material'
import { useConstactInfluMutation } from '../../../services/api';


const Section1 = () => {
    const [firstname, setfirstname] = useState();
    const [lastname	, setlastname	] = useState();
    const [email, setEmail] = useState();
    const [phno, setPhno] = useState();
    const [message, setMessage] = useState();
    const [messagee, setmessagee] = useState();
    const [responseInfo, response] = useConstactInfluMutation();

    const onHandleSubmit = (async (e) => {
        e.preventDefault();
        const ab = JSON.stringify({firstname,lastname	,email,phno,message})
        if (firstname, lastname	, email, phno, message) {
          await responseInfo(ab)
        }
    })

    useEffect(() => {
        if (response) {
            console.log(response)
        }
    },[response])
    
  return (
    <Container sx={{mt:'6rem'}}>
    <Grid container>
          {/* <Grid item lg={6}md={6}sm={12} xs={12}>
        <Container
        maxWidth={"sm"}
          sx={{ mt: { lg: "5rem", md: "5rem", xs: "1rem", sm: "1rem" } }}
        >
        <Paper
            sx={{
            backgroundColor: "#f7fafd",
            height: {lg:"18rem",md:'18rem',xs:'10rem',sm:'10rem'},
            width: "100%",
            }}
        >
            <Typography sx={{ typography: { sm: "h4", xs: "h4",lg:'h2',md:'h2' } }}>
            <strong>
                Hosteller — amazing hostel for the free spirited traveler
            </strong>
            </Typography>
        </Paper>
        </Container>
        </Grid> */}
          <Grid item xs={12}>/
          {/* <Grid item lg={6}md={6}sm={12} xs={12}>/ */}
<Card style={{ maxWidth: '100%', padding: "20px 5px", margin: "0 auto" }}>
  <CardContent>
    <Typography gutterBottom variant="h5">
      Contact Influencer Name 
  </Typography> 
    <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
      Fill up the form and our team will get back to you within 24 hours.
  </Typography> 
    <form>
      <Grid container spacing={1}>
        <Grid xs={12} sm={6} item>
          <TextField placeholder="Enter first name" label="First Name" variant="outlined" value={firstname || ''} onChange={(e)=>{setfirstname(e.target.value)}} fullWidth required />
        </Grid>
        <Grid xs={12} sm={6} item>
          <TextField placeholder="Enter last name" label="Last Name" variant="outlined" value={lastname	 || ''} onChange={(e)=>{setlastname	(e.target.value)}} fullWidth required />
        </Grid>
        <Grid item xs={12}>
          <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" value={email || ''} onChange={(e)=>{setEmail(e.target.value)}} fullWidth required />
        </Grid>
        <Grid item xs={12}>
          <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" value={phno || ''} onChange={(e)=>{setPhno(e.target.value)}} fullWidth required />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined"  value={message || ''} onChange={(e)=>{setMessage(e.target.value)}} fullWidth required />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" onClick={onHandleSubmit} fullWidth>Submit</Button>
        </Grid>
        <Grid item xs={12}>
                <Typography sx={{color:'red'}} variant='body1'>{messagee}</Typography>
              </Grid>

      </Grid>
    </form>
  </CardContent>
</Card>

        </Grid>
        </Grid>
        </Container>
  )
}

export default Section1