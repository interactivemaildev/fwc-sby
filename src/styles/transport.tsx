import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { borderRadius } from 'src/styles/theme'

export const StyledTransport = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  '& .content': {
    width: '50%',
    '& .MuiTypography-root': {
      color: '#052451',
      '&.tag': {
        fontSize: theme.spacing(3.3),
        fontWeight: 900,
      },
      '&.title': {
        marginBottom: theme.spacing(2),
        fontSize: theme.spacing(2.6),
        fontWeight: 900,
      },
      '&.subtitle': {
        marginBottom: theme.spacing(1),
      },
    },
    '& .MuiButtonBase-root': {
      backgroundColor: theme.palette.common.white,
      textTransform: 'none',
      width: '100%',
      minHeight: 'inherit',
      maxWidth: theme.spacing(34),
      padding: theme.spacing(3),
      margin: theme.spacing(14, 0),
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'column',
      borderRadius: theme.spacing(borderRadius),
    },
  },
  '& .img': {
    width: '50%',
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
  },
}))
