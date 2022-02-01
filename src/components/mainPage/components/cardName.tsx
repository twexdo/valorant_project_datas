import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Account } from "../../hooks/useAccount";
import { MMR } from "../../hooks/usePlayerMMR";
import * as React from "react";
import { getTierUrl } from "../../helpers";
type Props = {
  account: Account;
  mmr: MMR;
};

const CardName: React.FC<Props> = ({ account, mmr }) => {
  return (
    <Card sx={{ bgcolor: "primary.main", maxWidth: 500, mb: 4 }}>
      < CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image={account.card.wide}
          alt="account_card"
        />
        <CardContent >
          <Box sx={{ display: 'flex', justifyContent: "space-between" }}>

            <Box>
              <Typography sx={{ fontFamily: "VALORANT" }} gutterBottom variant="h5" color="black" component="div">
                {account.name}#{account.tag}
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ fontFamily: "VALORANT" }} color="black" gutterBottom variant="h6" component="div"> {account.account_level}</Typography>
                <Avatar sx={{ width: 24, height: 24 }} alt="LEVEL" variant="square" src="https://cdn-icons-png.flaticon.com/512/4614/4614145.png" />
              </Box>
            </Box>

            <Avatar
              sx={{
                // position: "absolute",
                // top: "1em",
                // right: "1em",
                height: "5em",
                width: "4em"
              }}
              alt="LEVEL"
              variant="square"
              src={getTierUrl(mmr.currenttierpatched)}
            />
          </Box>
        </CardContent>
      </CardActionArea >
    </Card >
  );
};
export default CardName;
