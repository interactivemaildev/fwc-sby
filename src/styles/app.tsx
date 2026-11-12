import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import hexToRgba from 'hex-to-rgba'
import { heightHeader, layoutBorderRadius } from 'src/styles/theme'

export const StyledLayoutBody = styled(Box)(() => ({
  paddingTop: heightHeader,
  overflow: 'hidden',
}))

export const StyledVideo = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  '& video': {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
  '& .MuiButtonBase-root': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 9,
    transform: 'translate(-50%, -50%)',
    opacity: 0,
    transition: 'all 0.3s ease-out',
    pointerEvent: 'none',
    '& svg.MuiSvgIcon-root': {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    '&:hover': {
      backgroundColor: hexToRgba(theme.palette.primary.main, 0.9),
    },
  },
  '&.move': {
    '& .MuiButtonBase-root': {
      opacity: 1,
      pointerEvent: 'all',
    },
  },
}))

export const StyledTitle = styled(Box)(({ theme }) => ({
  '& .MuiTypography-root': {
    fontWeight: 900,
    '&.large': {
      fontSize: theme.spacing(2.7),
    },
    '&.small': {
      fontSize: theme.spacing(2.1),
    },
    '&.white': {
      color: theme.palette.common.white,
    },
  },
}))

export const SecondText = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& .second-text': {
    position: 'absolute',
    bottom: '100%',
    left: 0,
    color: theme.palette.primary.main,
  },
}))

export const StyledTicket = styled(Box)(({ theme }) => ({
  '& img': {
    position: 'relative !important',
    width: '100% !important',
    height: 'auto !important',
    marginBottom: theme.spacing(2),
  },
}))

export const StyledLayout = styled(Box)(({ theme }) => ({
  borderTopLeftRadius: theme.spacing(layoutBorderRadius),
  borderTopRightRadius: theme.spacing(layoutBorderRadius),
  '&.black': {
    backgroundColor: '#121820',
    '&.dark': {
      backgroundColor: '#0B1119',
    },
  },
  '&.info': {
    backgroundColor: theme.palette.info.main,
    '&.light': {
      backgroundColor: theme.palette.info.light,
    },
  },
  '&.secondary': {
    backgroundColor: theme.palette.secondary.main,
  },
  '&.default': {
    backgroundColor: theme.palette.common.white,
  },
  '&.todo': {
    backgroundColor: '#3689C1',
  },
  '&.with-margin': {
    marginTop: theme.spacing(-layoutBorderRadius),
    position: 'relative',
    zIndex: 2,
  },
}))

export const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  '& .logo': {
    position: 'relative',
    display: 'block',
    height: 40,
    marginBottom: theme.spacing(2),
    '& img': {
      width: 'auto !important',
      position: 'relative !important',
    },
  },
  '& hr.MuiDivider-root': {
    margin: theme.spacing(3.5, 0),
    borderColor: `rgba(255, 255, 255, 0.1)`,
  },
  '& .MuiTypography-root': {
    color: theme.palette.common.white,
  },
  '& .MuiIconButton-root': {
    marginLeft: theme.spacing(1),
    padding: 0,
    '& .MuiSvgIcon-root': {
      color: theme.palette.common.white,
      width: theme.spacing(3.5),
      height: theme.spacing(3.5),
    },
  },
}))

export const StyledLanding = styled(Box)(({ theme }) => ({
  height: `calc(100vh - ${heightHeader}px)`,
  minHeight: theme.spacing(73),
  paddingBottom: theme.spacing(layoutBorderRadius),
  '& .MuiContainer-root': {
    height: '100%',
    '& .MuiGrid-container': {
      height: '100%',
      '& .MuiGrid-item': {
        height: '100%',
        '& .content': {
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          paddingRight: theme.spacing(4),
          '& .MuiTypography-root': {
            fontSize: theme.spacing(4),
            fontWeight: 900,
            lineHeight: 1.3,
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
      },
    },
  },
  '&.light': {
    '& .MuiTypography-root': {
      color: theme.palette.common.white,
    },
  },
  '&.dark': {
    '& .MuiTypography-root': {
      color: theme.palette.common.black,
    },
  },
  '&.red': {
    backgroundColor: theme.palette.error.main,
  },
  '&.black': {
    backgroundColor: theme.palette.common.black,
  },
  '&.yellow': {
    backgroundColor: theme.palette.warning.main,
  },
  '&.purple': {
    backgroundColor: theme.palette.info.light,
  },
}))

export const StyledText = styled(Box)(({ theme }) => ({
  fontSize: theme.spacing(2.2),
}))

export const StyledPagination = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& .MuiButtonBase-root': {
    '&.next, &.prev': {
      padding: 0,
      margin: theme.spacing(0, 2.5),
      '&.next': {
        '& .wrapper-svg': {
          transform: 'rotate(180deg)',
        },
      },
      '&.Mui-disabled': {
        '& svg circle': {
          fill: theme.palette.grey[600],
        },
      },
    },
  },
  '& .MuiPagination-root': {
    '& .MuiTypography-root': {
      height: theme.spacing(4),
      width: theme.spacing(4),
      margin: theme.spacing(0.5),
      borderRadius: '50%',
      textAlign: 'center',
      paddingBottom: 2,
      cursor: 'pointer',
      fontWeight: 700,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: theme.spacing(1.5),
      color: theme.palette.grey[600],
      border: `1px solid ${theme.palette.grey[600]}`,
      '&.ellipsis': {
        cursor: 'default',
        border: 'none',
        '&:hover': {
          backgroundColor: 'transparent',
          color: theme.palette.grey[600],
          border: 'none',
        },
      },
      '&:hover': {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.common.white,
      },
      '&.selected, &.selected:hover': {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
      },
    },
  },
  '&.dark': {
    '& .MuiPagination-root': {
      '& .MuiTypography-root': {
        '&.ellipsis': {
          '&:hover': {
            border: 'none',
          },
        },
        '&:hover': {
          border: `1px solid ${theme.palette.common.white}`,
        },
        '&.selected:hover': {
          border: `1px solid ${theme.palette.primary.main}`,
        },
      },
    },
  },
}))
