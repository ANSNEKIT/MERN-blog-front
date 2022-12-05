import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#3C5EF1'
        }
    },
    typography: {
        button: {
            textTransform: 'none',
            fontWeight: 400
        }
    }
})

export default theme
