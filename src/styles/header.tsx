import { AppBar, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import hexToRgba from 'hex-to-rgba'
import { boxShadow, heightHeader } from 'src/styles/theme'

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  zIndex: theme.zIndex.drawer - 1,
  boxShadow,
  backgroundColor: theme.palette.common.white,
  '& .MuiContainer-root': {
    minHeight: heightHeader,
    display: 'flex',
    alignItems: 'center',
    '& .MuiToolbar-root': {
      alignItems: 'stretch',
      '& a': {
        margin: theme.spacing(0, 2),
        padding: theme.spacing(0, 2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.grey[600],
        fontWeight: 700,
        textTransform: 'capitalize',
        transition: `all 0.15s ease-out`,
        '&:hover': {
          color: theme.palette.text.primary,
        },
        '& span': {
          position: 'relative',
          padding: theme.spacing(0.5, 0),
          '&:before': {
            content: `''`,
            position: 'absolute',
            top: '100%',
            left: 0,
            width: 0,
            height: 2,
            backgroundColor: theme.palette.primary.main,
            transition: `all 0.15s ease-out`,
          },
        },
        '&.selected': {
          color: theme.palette.primary.main,
          '& span:before': {
            width: theme.spacing(3),
          },
        },
      },
    },
    '& a': {
      textDecoration: 'none',
      '&.logo': {
        position: 'relative',
        display: 'block',
        height: 60,
        width: theme.spacing(16),
        '& img': {
          height: 'auto !important',
          top: '50% !important',
          transform: 'translateY(-50%)',
        },
      },
    },
    '& .right': {
      display: 'flex',
      alignItems: 'center',
    },
  },
}))

const height = 4
export const StyledHeaderButton = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.spacing(3),
  position: 'relative',
  height: theme.spacing(height),
  '& .MuiTypography-root': {
    color: theme.palette.primary.main,
    fontWeight: 700,
    textAlign: 'center',
    padding: theme.spacing(0, 1, 0, 2),
  },
  '& .MuiButtonBase-root': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: 0,
    width: theme.spacing(height),
    height: theme.spacing(height),
    // '& svg.MuiSvgIcon-root': {
    //   width: theme.spacing(height),
    //   height: theme.spacing(height),
    // },
    '&:hover': {
      backgroundColor: hexToRgba(theme.palette.primary.main, 0.9),
    },
    '&.language-button': {
      position: 'absolute',
      right: 0,
      top: 0,
    },
  },
  '&.language': {
    marginLeft: theme.spacing(4),
    '& .MuiTypography-root': {
      '&.first': {
        padding: theme.spacing(0, 0, 0, 2),
        opacity: 1,
      },
      '&.last': {
        padding: theme.spacing(0, 2, 0, 0),
        opacity: 0,
      },
    },
    '&.check': {
      '& .MuiTypography-root': {
        '&.first': {
          opacity: 0,
        },
        '&.last': {
          opacity: 1,
        },
      },
      '& .MuiButtonBase-root': {
        '&.language-button': {
          right: 'inherit',
          left: 0,
        },
      },
    },
  },
}))
