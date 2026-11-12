import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledTodo = styled(Box)(({ theme }) => ({
  '& .content': {
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    '& .MuiTypography-root': {
      marginBottom: theme.spacing(2),
      fontSize: theme.spacing(3.3),
      color: theme.palette.common.white,
      fontWeight: 900,
    },
    '& .MuiButtonBase-root': {
      width: '100%',
      '&:hover': {
        color: '#3689C1 !important',
      },
    },
  },
  '& .img': {
    position: 'relative',
    height: '100%',
    width: '100%',
    padding: theme.spacing(4, 6, 4, 0),
    '& img': {
      position: 'relative !important',
      width: 'auto !important',
      height: '100% !important',
      margin: '0 auto',
      display: 'block',
    },
  },
}))

export const StyledTodoDetail = styled(Box)(({ theme }) => ({
  '& .MuiTypography-root': {
    '&.main-title': {
      margin: theme.spacing(5, 0, 4),
      fontSize: theme.spacing(3.6),
      fontWeight: 900,
      lineHeight: 1.3,
    },
  },
}))
