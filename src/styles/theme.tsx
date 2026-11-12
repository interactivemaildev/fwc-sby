import { createTheme } from '@mui/material/styles'

export const heightHeader = 70
export const borderRadius = 1.5
export const layoutBorderRadius = 8
export const boxShadow = `0 6px 9px 0 rgba(0, 0, 0, 0.05)`
export const mediumFontSize = 2.2

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#CB0001',
      dark: '#A10203',
    },
    secondary: {
      main: '#052451',
    },
    info: {
      light: '#A52F76',
      main: '#60033B',
    },
    grey: {
      '100': '#f7f9f9',
    },
    error: {
      main: '#AE1818',
    },
    success: {
      main: '#4B7F52',
    },
    warning: {
      main: '#FCD32B',
    },
    text: {
      primary: '#575757',
    },
  },
  typography: {
    fontSize: 13,
    fontFamily: [
      'Lato',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    allVariants: {
      color: '#575757',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1270,
      xl: 1536,
    },
  },
})

export default theme
