import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { borderRadius } from 'src/styles/theme'

export const StyledContainerNews = styled(Box)(({ theme }) => ({
  margin: theme.spacing(6, 0, 0),
  '& .MuiGrid-container': {
    '& .MuiGrid-item': {
      '&.first': {
        '& .content': {
          display: 'block',
          '& .MuiTypography-root': {
            '&.title': {
              fontSize: theme.spacing(3),
            },
          },
        },
      },
    },
  },
}))

const maxWidthContent = 136
export const StyledDetailNews = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  zIndex: -1,
  '& .header': {
    padding: theme.spacing(6, 4),
    maxWidth: theme.spacing(maxWidthContent),
    margin: '0 auto',
    '& .MuiTypography-root': {
      '&.title': {
        fontSize: theme.spacing(3.8),
        fontWeight: 900,
        lineHeight: 1.3,
        margin: theme.spacing(4, 0, 1.5),
      },
      '&.date': {
        color: theme.palette.primary.main,
      },
    },
  },
  '& .img': {
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
  },
  '& .content': {
    maxWidth: theme.spacing(maxWidthContent),
    margin: '0 auto',
    padding: theme.spacing(6, 0),
  },
}))
