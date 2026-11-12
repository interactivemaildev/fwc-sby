import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { borderRadius, mediumFontSize } from 'src/styles/theme'

export const StyledTabs = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5),
  '& .MuiTabs-root': {
    '& .button-outer': {
      padding: 0,
      borderRadius: theme.spacing(3),
      marginLeft: theme.spacing(4),
      minHeight: 'inherit',
      '&:first-of-type': {
        marginLeft: 0,
      },
    },
    '& .MuiTabs-indicator': {
      display: 'none',
    },
  },
}))

export const StyledTableStage = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  '& .container-table': {
    backgroundColor: theme.palette.grey[200],
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.spacing(borderRadius),
    paddingTop: theme.spacing(9),
    marginLeft: theme.spacing(1),
    position: 'relative',
    '& .MuiTable-root': {
      borderTop: `1px solid ${theme.palette.grey[300]}`,
      '& thead': {
        '& tr th': {
          paddingTop: theme.spacing(0.5),
          paddingBottom: theme.spacing(0.5),
        },
      },
      '& tbody': {
        '& tr': {
          '& td': {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            '&:first-of-type': {
              fontWeight: 700,
              color: theme.palette.info.main,
            },
          },
          '&:last-of-type': {
            '& td': {
              borderBottom: 'none',
            },
          },
        },
      },
    },
  },
}))

export const StyledStadiums = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5),
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
    '& a': {
      textDecoration: 'none',
    },
    '& .MuiTypography-root': {
      lineHeight: 1.3,
      '&.title': {
        fontSize: theme.spacing(mediumFontSize),
        fontWeight: 900,
      },
      '&.tagline': {
        margin: theme.spacing(1.5, 0),
      },
      '&.capacity': {
        fontWeight: 700,
      },
    },
  },
}))

export const StyledDetailStadium = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5),
  '& .img': {
    margin: theme.spacing(5, 0),
    position: 'relative',
    width: '100%',
    borderRadius: theme.spacing(borderRadius),
    display: 'block',
    overflow: 'hidden',
    '& img': {
      position: 'relative !important',
      width: '100% !important',
      height: 'auto !important',
      display: 'block',
    },
    '&:before': {
      content: `''`,
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: '40%',
      width: '100%',
      background: `linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 100%)`,
      zIndex: 1,
      pointerEvents: 'none',
    },
  },
  '& .container-content': {
    maxWidth: theme.spacing(133),
    margin: `0 auto`,
    '& .content': {
      '& a': {
        textDecoration: 'none',
        display: 'block',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      '& hr': {
        marginBottom: theme.spacing(2),
      },
      '& .MuiTypography-root': {
        lineHeight: 1.3,
        paddingBottom: theme.spacing(1),
        '&.title': {
          fontSize: theme.spacing(3.5),
          fontWeight: 900,
          paddingBottom: theme.spacing(1),
        },
        '&.tagline': {
          paddingBottom: theme.spacing(2),
        },
        '&.subtitle': {
          fontSize: theme.spacing(2.2),
          fontWeight: 900,
          paddingBottom: theme.spacing(2),
        },
        '&.tagline, &.subtitle': {
          color: theme.palette.primary.main,
        },
      },
    },
  },
}))
