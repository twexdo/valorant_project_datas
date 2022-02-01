import { makeStyles } from "@material-ui/core"
import { FormControl, MenuItem, Select, styled } from "@mui/material"
import * as React from "react"

type Props = {
    items: string[],
    onChange: (value: string) => void
}



const CustomDropdown: React.FC<Props> = ({ items, onChange }) => {
    const [value, setValue] = React.useState(items[0])
    const handleChange = (event: any) => {
        setValue(event.target.value)
        onChange(event.target.value)
    }
    return (
        <FormControl color="secondary" variant="outlined" >
            <Select
                sx={{
                    margin: "1em 1em!important",
                    "&>div:nth-of-type(1)": {
                        padding: "0.5em!important",
                        paddingRight: "2em!important",
                    }
                }}
                value={value}
                onChange={handleChange}
            >
                {items.map(item => <MenuItem key={item} value={item}>{item.toUpperCase()}</MenuItem>)}
            </Select>
        </FormControl>
    )
}

export default CustomDropdown