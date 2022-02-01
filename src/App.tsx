
import { createTheme, ThemeProvider } from '@mui/material';
import * as React from 'react';
import MainPage from './components/mainPage/component';
import Navigation from './components/navigation/component';


const dark = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: "#1F1A39"
        },
        primary: {
            main: "#616161",
            dark: "#373737",
            light: "#8e8e8e"
        },
        secondary: {
            main: "#ff5722",
            dark: "#c41c00",
            light: "#ff8a50"
        },
        text: {
            primary: "#ff5722",
            secondary: "#ff8a50"
        }

    },
});
const light = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: "#ECE8E1"
        },
        primary: {
            main: "#ff7043",
            dark: "#c63f17",
            light: "#ffa270"
        },
        secondary: {
            dark: "#000a12",
            light: "#4f5b62",
            main: "#263238"
        }
    },
});

const App: React.FC = () => {

    React.useEffect(() => {
        console.log("Theme LIGHT", light)
        console.log("Theme DARK", dark)
    }, [])
    const [_theme, setTheme] = React.useState(dark);
    const changeTheme = (theme: "dark" | "light") => {
        switch (theme) {
            case "dark": setTheme(dark); break;
            case "light": setTheme(light); break;
            default: setTheme(light); break;

        }
    }

    return (
        <ThemeProvider theme={_theme}>
            <Navigation changeTheme={changeTheme} />
            <MainPage />
            {/* <Button variant="contained">this is a material UI button</Button> */}
        </ThemeProvider>
    );
}

export default App;
