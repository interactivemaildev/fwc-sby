import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { borderRadius, mediumFontSize } from 'src/styles/theme'

export const StyledTodayMatch = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(borderRadius),
  overflow: 'hidden',
  '& .MuiTypography-root': {
    '&.title': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      textAlign: 'center',
      padding: theme.spacing(1.5),
    },
    '&.stadium': {
      color: theme.palette.primary.main,
      textAlign: 'center',
      padding: theme.spacing(2, 0),
      borderLeft: `1px solid ${theme.palette.divider}`,
      borderRight: `1px solid ${theme.palette.divider}`,
      fontWeight: 700,
    },
  },
  '& .score': {
    padding: theme.spacing(3, 2, 2),
    backgroundColor: theme.palette.grey[200],
    borderLeft: `1px solid ${theme.palette.divider}`,
    borderRight: `1px solid ${theme.palette.divider}`,
    '& .img-country': {
      '& img': {
        borderRadius: '50%',
        margin: theme.spacing(0, 0, 1),
      },
      '& .MuiTypography-root': {
        fontSize: theme.spacing(mediumFontSize),
      },
    },
    '& .MuiTypography-root': {
      textAlign: 'center',
      fontWeight: 900,
      '&.main-title': {
        margin: theme.spacing(2, 4, 0),
        fontSize: theme.spacing(3.5),
      },
    },
  },
  '& .time': {
    position: 'relative',
    padding: theme.spacing(2, 0),
    border: `1px solid ${theme.palette.divider}`,
    '&:before': {
      content: `''`,
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: 1,
      height: '60%',
      backgroundColor: theme.palette.divider,
      transform: `translateY(-50%)`,
    },
    '& .MuiTypography-root': {
      fontWeight: 700,
    },
  },
  '& .live': {
    position: 'relative',
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
    borderBottomLeftRadius: theme.spacing(borderRadius),
    borderBottomRightRadius: theme.spacing(borderRadius),
    '& .MuiTypography-root': {
      textAlign: 'center',
    },
    '& img': {
      position: 'relative !important',
      width: 'auto !important',
      height: `26px !important`,
      margin: theme.spacing(0, 2),
    },
  },
}))

export const StyledStadium = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(borderRadius),
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3, 2),
  '& .MuiTypography-root': {
    '&.title': {
      fontWeight: 700,
    },
    '&.location': {
      fontSize: theme.spacing(1.5),
      color: theme.palette.primary.main,
    },
  },
}))

export const StyledMatch = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(borderRadius),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  '& .img': {
    position: 'relative',
    width: '100%',
    borderRadius: theme.spacing(borderRadius),
    overflow: 'hidden',
    display: 'block',
    borderBottom: `1px solid ${theme.palette.divider}`,
    borderLeft: `1px solid ${theme.palette.divider}`,
    borderRight: `1px solid ${theme.palette.divider}`,
    '& img': {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
    },
  },
  '& .content': {
    flexGrow: 1,
    padding: theme.spacing(3, 2, 2),
    marginTop: theme.spacing(-borderRadius),
    borderLeft: `1px solid ${theme.palette.divider}`,
    borderRight: `1px solid ${theme.palette.divider}`,
    borderBottomLeftRadius: theme.spacing(borderRadius),
    borderBottomRightRadius: theme.spacing(borderRadius),
    '& .MuiTypography-root': {
      '&.title': {
        fontSize: theme.spacing(mediumFontSize),
        fontWeight: 900,
        marginBottom: theme.spacing(1.5),
        lineHeight: 1.3,
      },
      '&.stadium': {
        color: theme.palette.primary.main,
      },
    },
  },
}))

export const StyledNews = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '& a': {
    overflow: 'hidden',
    '&.img': {
      position: 'relative',
      width: '100%',
      borderRadius: theme.spacing(borderRadius),
      overflow: 'hidden',
      display: 'block',
      '& img': {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        transition: 'all 0.2s ease-out',
      },
    },
    '&:hover img': {
      transform: `scale(1.1)`,
    },
  },
  '& .content': {
    flexGrow: 1,
    padding: theme.spacing(2, 0),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& a': {
      textDecoration: 'none',
    },
    '& .MuiTypography-root': {
      '&.title': {
        fontSize: theme.spacing(mediumFontSize),
        fontWeight: 900,
        lineHeight: 1.3,
      },
      '&.date': {
        marginTop: theme.spacing(1.5),
        fontSize: theme.spacing(1.6),
      },
    },
    '&.light': {
      '& a': {
        color: theme.palette.common.white,
      },
      '& .MuiTypography-root': {
        '&.title': {
          color: theme.palette.common.white,
        },
        '&.date': {
          color: theme.palette.common.white,
        },
      },
    },
    '&.dark': {
      '& a': {
        color: theme.palette.text.primary,
      },
      '& .MuiTypography-root': {
        '&.title': {
          color: theme.palette.text.primary,
        },
        '&.date': {
          color: theme.palette.primary.main,
        },
      },
    },
  },
}))

export const StyledLabel = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  left: 0,
  zIndex: 2,
  borderRadius: theme.spacing(4),
  borderBottomLeftRadius: 0,
  padding: theme.spacing(0.6, 5, 0.6, 2),
  marginLeft: theme.spacing(-1),
  minHeight: theme.spacing(5),
  minWidth: theme.spacing(16),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  '&.default': {
    backgroundColor: theme.palette.common.white,
    '& .MuiTypography-root': {
      color: theme.palette.text.primary,
    },
    '&:before': {
      borderRight: `${theme.spacing(1.2)} solid ${theme.palette.grey[400]}`,
    },
  },
  '&.warning': {
    backgroundColor: theme.palette.warning.main,
    '& .MuiTypography-root': {
      color: theme.palette.info.main,
    },
    '&:before': {
      borderRight: `${theme.spacing(1.2)} solid ${theme.palette.warning.dark}`,
    },
  },
  '&.primary': {
    backgroundColor: theme.palette.primary.main,
    '& .MuiTypography-root': {
      color: theme.palette.common.white,
    },
    '&:before': {
      borderRight: `${theme.spacing(1.2)} solid ${theme.palette.primary.dark}`,
    },
  },
  '& .MuiTypography-root': {
    lineHeight: 1.3,
    '&.title': {
      fontWeight: 700,
      fontSize: theme.spacing(1.6),
    },
    '&.subtitle': {
      fontSize: theme.spacing(1.4),
    },
  },
  '&:before': {
    content: `''`,
    position: 'absolute',
    top: '100%',
    left: 0,
    width: 0,
    height: 0,
    borderBottom: `${theme.spacing(1.2)} solid transparent`,
  },
}))

export const StyledCountry = styled(Box)(({ theme }) => ({
  '& .img': {
    position: 'relative',
    borderRadius: theme.spacing(borderRadius),
    overflow: 'hidden',
    border: `1px solid ${theme.palette.grey[300]}`,
    marginBottom: theme.spacing(2),
    '& img': {
      objectFit: 'cover',
    },
  },
  '& .MuiTypography-root': {
    fontSize: theme.spacing(mediumFontSize),
    fontWeight: 900,
  },
}))

export const StyledExplore = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(borderRadius),
  transition: 'all 0.2s ease-out',
  '&:hover': {
    boxShadow: `0 3px 9px 0 rgba(0, 0, 0, 0.1)`,
  },
  '& a': {
    overflow: 'hidden',
    '&.img': {
      position: 'relative',
      width: '100%',
      borderRadius: theme.spacing(borderRadius),
      overflow: 'hidden',
      display: 'block',
      '& img': {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        transition: 'all 0.2s ease-out',
      },
    },
    '&:hover img': {
      transform: `scale(1.1)`,
    },
  },
  '& .content': {
    flexGrow: 1,
    padding: theme.spacing(2, 0),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& .text': {
      minHeight: theme.spacing(16),
      '& a': {
        textDecoration: 'none',
      },
      '& .MuiTypography-root': {
        '&.title': {
          fontSize: theme.spacing(mediumFontSize),
          fontWeight: 900,
          lineHeight: 1.3,
        },
        '&.address': {
          fontSize: theme.spacing(1.6),
          fontWeight: 700,
          marginTop: theme.spacing(1.5),
        },
      },
    },
  },
}))

export const StyledToDo = styled(Box)(({ theme }) => ({
  padding: theme.spacing(7, 1.5, 1.5),
  borderRadius: theme.spacing(borderRadius),
  transition: 'all 0.2s ease-out',
  position: 'relative',
  '&.background-0': {
    backgroundColor: '#141D2A',
    order: `1 !important`,
  },
  '&.background-1': {
    backgroundColor: '#23344A',
    order: `2 !important`,
  },
  '&.background-2': {
    backgroundColor: '#141D2A',
    order: `3 !important`,
  },
  '&.background-3': {
    backgroundColor: '#23344A',
    order: `1 !important`,
  },
  '&.background-4': {
    backgroundColor: '#141D2A',
    order: `2 !important`,
  },
  '&.background-5': {
    backgroundColor: '#23344A',
    order: `3 !important`,
  },
  '& a': {
    overflow: 'hidden',
    '&.img': {
      position: 'relative',
      width: '100%',
      borderRadius: theme.spacing(borderRadius),
      overflow: 'hidden',
      display: 'block',
      '& img': {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        transition: 'all 0.2s ease-out',
      },
    },
  },
  '&:hover': {
    '& a': {
      '& img': {
        transform: `scale(1.1)`,
      },
    },
  },
  '& .content': {
    flexGrow: 1,
    padding: theme.spacing(2, 0),
    '& a': {
      textDecoration: 'none',
      color: theme.palette.common.white,
    },
    '& .MuiTypography-root': {
      '&.title': {
        fontSize: theme.spacing(mediumFontSize),
        fontWeight: 900,
        lineHeight: 1.2,
      },
    },
  },
  '&:nth-of-type(odd)': {
    '& .content': {
      minHeight: theme.spacing(18),
    },
  },
  '&:nth-of-type(even)': {
    '& .content': {
      '& .MuiTypography-root': {
        '&.title': {
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          display: 'block',
        },
      },
    },
  },
}))
