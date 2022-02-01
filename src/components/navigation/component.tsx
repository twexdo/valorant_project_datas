import { AppBar, SelectChangeEvent, Typography } from "@mui/material";
import * as React from "react";
import CustomDropdown from '../_shared/dropdown'
type Props = {
    changeTheme: (theme: "dark" | "light") => void
}

const Navigation: React.FC<Props> = ({ changeTheme }) => {

    const handleChange = (value: string) => {
        changeTheme((value as "dark" | "light"));
    };

    return <AppBar sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} position="sticky">
        <Typography color="secondary.main" variant="h3" sx={{ ml: 1, mt: 1, fontFamily: "VALORANT" }} >Valorant</Typography>
        <CustomDropdown items={["dark", "light"]} onChange={handleChange} />
    </AppBar >
}




export default Navigation