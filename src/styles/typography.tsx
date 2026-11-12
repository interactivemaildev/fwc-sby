import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledTypography = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(6),
  '& .MuiTypography-root': {
    fontSize: theme.spacing(13),
    padding: theme.spacing(4, 0, 20, 0),
    fontWeight: 900,
    textAlign: 'center',
    lineHeight: 0.9,
    textFillColor: 'transparent',
    backgroundClip: 'text',
    // transition: `all .2s cubic-bezier(.33,1,.68,1), background-size 0s`,
    textStroke: `1.5px #16724F`,
    WebkitTextStroke: `1.5px #16724F`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 0,
    backgroundImage: 'url(/images/effect.png)',
    '& span': {
      display: 'block',
      maxWidth: theme.spacing(93),
      margin: theme.spacing(0, 'auto'),
    },
  },
  '&:hover': {
    '& .MuiTypography-root': {
      textStroke: `1.5px ${theme.palette.info.light}`,
      WebkitTextStroke: `1.5px ${theme.palette.info.light}`,
      backgroundSize: 400,
    },
  },
}))
