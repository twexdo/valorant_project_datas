import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, LinearProgress, Typography } from "@mui/material";
import * as React from "react";
import { getTierUrl } from "../helpers";
import { Account, useAccount } from './../hooks/useAccount';
import { MMR, usePlayerMMR } from './../hooks/usePlayerMMR';
import CardName from "./components/cardName";



const MainPage = () => {
    const account = useAccount()
    const mmr = usePlayerMMR()

    if (account == false || mmr == false)
        return <LinearProgress />


    return <Container maxWidth={false} sx={{
        flex: 1,
        bgcolor: 'background.paper',
        padding: "1em"
    }} >
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <CardName mmr={mmr} account={account} />
                {/* <img style={{ height: "3em" }} src="https://cdn-icons-png.flaticon.com/512/4614/4614145.png" /> */}

            </Grid>
            <Grid item xs={8}>
                <Typography color="text.primary" gutterBottom variant="h5" component="div"> Some shit</Typography>
            </Grid>
        </Grid>
    </Container >
}
export default MainPage