import { Box, TextField } from '@mui/material'
import hexToRgba from 'hex-to-rgba'
import { styled } from '@mui/material/styles'

export const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.spacing(3),
  marginRight: theme.spacing(3),
  '& .MuiOutlinedInput-root': {
    height: '100%',
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&:hover': {
      border: 'none',
    },
    '&.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
    '&.Mui-disabled': {
      '& input': {
        textFillColor: hexToRgba(theme.palette.text.primary, 0.8),
      },
    },
    '& input': {
      padding: theme.spacing(0, 3),
      '&:focus::placeholder': {
        color: 'transparent',
      },
    },
  },
}))

export const StyledButton = styled(Box)(({ theme }) => ({
  '& a': {
    display: 'block',
    textDecoration: 'none',
  },
  '& .MuiButton-root': {
    textTransform: 'none',
    lineHeight: 'inherit',
    padding: theme.spacing(0, 4.5),
    height: theme.spacing(4),
    borderRadius: theme.spacing(3),
    fontWeight: 600,
    '&.MuiButton-containedPrimary': {
      '&.MuiButton-contained': {
        backgroundColor: theme.palette.grey[200],
        color: theme.palette.primary.main,
        '&.selected, &:hover': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        },
      },
    },
    '&.MuiButton-outlinedPrimary': {
      '&.MuiButton-outlined': {
        border: `1px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        '&.selected, &:hover': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        },
      },
    },
    '&.MuiButton-containedSecondary': {
      '&.MuiButton-contained': {
        backgroundColor: theme.palette.grey[300],
        color: theme.palette.text.primary,
        '&.selected, &:hover': {
          backgroundColor: theme.palette.warning.main,
          color: theme.palette.info.main,
        },
      },
    },
    '&.MuiButton-outlinedSecondary': {
      '&.MuiButton-outlined': {
        border: `1px solid ${theme.palette.warning.main}`,
        color: theme.palette.warning.main,
        '&.selected, &:hover': {
          backgroundColor: theme.palette.warning.main,
          color: theme.palette.common.white,
        },
        '&.info:hover': {
          color: theme.palette.info.light,
        },
      },
    },
  },
}))
