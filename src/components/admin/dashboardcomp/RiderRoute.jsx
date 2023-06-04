import React from "react";
import { city } from "../../home/citynames";
import { Card, Container, FormControl, Grid,Stack,Button,Typography,DialogActions, InputLabel, MenuItem, Select } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

import { TimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { useUploadRiderPathMutation } from "../../../services/adminapi";
import { useEffect } from "react";
import { useDepToDesRidesMutation } from "../../../services/api";
import { useMemo } from "react";

const RiderRoute = () => {
    //   const navigate = useNavigate();
    const [departure, setdeparture] = useState();
    const [destination, setdestination] = useState();
    const [dt, setDt] = useState();
    const [tim, setTim] = useState("10:00:00");
    const [respInfo, res] = useUploadRiderPathMutation();
    //   const [respInfo, res] = useDepToDesRidesMutation();
    const [detaResp, setResponse] = useState();
    const formattedDate = new Date(dt);
    const date = formattedDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    });

    var dateWithouthSecond = new Date(tim);
    const time = dateWithouthSecond.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
    });

    
    
    // const argss = JSON.stringify({date: '12/12/2001', time: '12:12', departure: 'Adoni', destination: 'Adoor' });
    const argss = JSON.stringify({ date, time, departure, destination });

    const onHandleCheck = (async (e) => {
                // e.preventDefault();

        console.log(argss,'argsd')

        if (date && time  && departure && destination !== undefined || null) {
            // await respInfo(argss);
          await respInfo({ date, time, departure, destination });
            
            // console.log(res, "resonse");
        }
        console.log(res, "response");
    });

   

    useMemo(() => {
        if (res.isSuccess) {
           alert('success')
       } 
    },[res])
    
  useEffect(() => {
    console.log(res, "resonse");
      if (res.isSuccess === true) {
        console.log(res, "resonse");

    //   console.log(res.data.success, "response.data");
    //   setResponse(res.data.success);
    }
  }, [res]);
    // console.log(res, "sdsdskd");
    
  return (
    <Container
      maxWidth="md"
      sx={{
        mt: "7rem",
        display: "flex",
        justifyContent: "center",
          alignItems: "center",
      }}
    >
      <Card
        sx={{
          display: "block",
          justifycontent: "center",
          textAlign:'center',          height: { md: "55vh" },
          width: { md: "60rem", xs: "100%" },
        }}
          >
              <Typography>Add Your Route Details</Typography>
        <Container>
          <Grid
            container
            spacing={2}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: "flex",
                  justifyContent: {md:"end",xs:'center'},
                  aligntems: "center",
                }}
              >
                <DatePicker
                  format="DD/MM/YYYY"
                  label="Basic date picker"
                  value={dt || ""}
                  onChange={(newValue) => setDt(newValue)}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: "flex",
                  justifyContent: {md:"start",xs:'center'},
                  aligntems: "center",
                }}
              >
                <DemoContainer components={["TimePicker"]}>
                  <TimePicker
                    // defaultValue={dayjs('2022-04-17T15:30')}
                    views={["hours", "minutes", "seconds"]}
                    label="Pick Time"
                    onChange={(newValue) => {
                      setTim(newValue);
                    }}
                    // value={tim || ""}
                  />
                </DemoContainer>
              </Grid>
            </LocalizationProvider>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                aligntems: "center",
              }}
            >
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Select departureture
                </InputLabel>
                <Select
                  sx={{ backgroundColor: "#fff" }}
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={departure || ""}
                  label="--Blood Group--"
                  onChange={(e) => setdeparture(e.target.value)}
                >
                  {city.map((el, i) => {
                    return (
                      <MenuItem key={i} value={el}>
                        {el}{" "}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                aligntems: "center",
              }}
            >
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Select destinationination
                </InputLabel>
                <Select
                  sx={{ backgroundColor: "#fff" }}
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={destination || ""}
                  label="--Blood Group--"
                  onChange={(e) => setdestination(e.target.value)}
                >
                  {city.map((el, i) => {
                    return (
                      <MenuItem key={i} value={el}>
                        {el}{" "}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                aligntems: "center",
              }}
            >
              <Stack spacing={1}>
                <Button variant="contained" onClick={onHandleCheck}>
                  Upload Route
                </Button>
                <Button
                  sx={{ display: detaResp > 0 ? "flex" : "none" }}
                  onClick={() => {
                    navigate("/availableriders");
                  }}
                  variant="contained"
                >
                  View Available Riders
                </Button>
                <Typography
                  variant="h6"
                  sx={{
                    color: "red",
                    display: detaResp === 0 ? "flex" : "none",
                  }}
                >
                  Sorry No Rides Available for the Given Date and time
                </Typography>
              </Stack>
            </Grid>

            {/* <Stack
              direction={{ sm: "row", xs: "column" }}
              spacing={2}
              justifyContent={"center"}
              sx={{ mt: "1rem", mb: { xs: "2rem", md: 0 } }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/availablerides");
                }}
              >
                Available Rides
              </Button>
              <Button
                onClick={() => navigate("/completedrides")}
                variant="contained"
              >
                Completed Rides{" "}
              </Button>
            </Stack> */}
          </Grid>
        </Container>
      </Card>

      <DialogActions></DialogActions>
    </Container>
  );
};

export default RiderRoute;
