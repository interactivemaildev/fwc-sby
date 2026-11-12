import { Box } from '@mui/material'
import hexToRgba from 'hex-to-rgba'
import { styled } from '@mui/material/styles'
import { heightHeader } from 'src/styles/theme'

export const StyledBoxCarousel = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& .slick-slider': {
    position: 'relative',
    '& .slick-list': {
      overflow: 'hidden',
      '& .slick-track': {
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'stretch',
        '& .slick-slide': {
          '& > div': {
            height: '100%',
          },
          '&.slick-active': {
            zIndex: 9,
          },
          '& .items': {
            display: 'block !important',
            position: 'relative',
            height: '100%',
            '& img': {
              objectFit: 'cover',
            },
            '&.main': {
              height: `calc(100vh - ${heightHeader}px)`,
            },
          },
        },
      },
    },
    '& .slick-arrow': {
      '&.main': {
        opacity: 0,
        transition: 'all 0.3s ease-out',
        pointerEvent: 'none',
      },
    },
    '& .slick-dots': {
      listStyle: 'none',
      display: 'flex !important',
      margin: theme.spacing(2, 0, 0),
      padding: 0,
      zIndex: 2,
      position: 'relative',
      '& li': {
        margin: theme.spacing(0, 0.7, 0, 0),
        width: theme.spacing(1.4),
        height: theme.spacing(1.4),
        borderRadius: 20,
        transition: 'all 0.3s ease-out',
        overflow: 'hidden',
        '& button': {
          width: '100%',
          height: '100%',
          border: 'none',
          fontSize: 0,
          display: 'block',
          backgroundColor: theme.palette.grey[300],
          cursor: 'pointer',
        },
        '&.slick-active': {
          '& button': {
            opacity: 1,
            cursor: 'inherit',
            backgroundColor: theme.palette.primary.main,
          },
        },
      },
    },
  },
  '&.move': {
    '& .slick-slider': {
      '& .slick-arrow': {
        '&.main': {
          opacity: 1,
          pointerEvent: 'all',
        },
      },
    },
  },
  '&.global': {
    '& .slick-slider': {
      paddingBottom: theme.spacing(8),
    },
  },
  '&.card': {
    '& .slick-slider': {
      '& .slick-list': {
        '& .slick-track': {
          '& .slick-slide': {
            marginRight: theme.spacing(4),
          },
        },
      },
    },
    '&.with-label': {
      '& .slick-slider': {
        '& .slick-list': {
          '& .slick-track': {
            '& .slick-slide': {
              marginRight: theme.spacing(3),
              '& .items': {
                paddingLeft: theme.spacing(1),
              },
            },
          },
        },
      },
    },
  },
}))

export const StyledBoxMultiple = styled(Box)(({ theme }) => ({
  '& .slick-slider': {
    '&:before, &:after': {
      content: `''`,
      position: 'absolute',
      top: 0,
      height: '100%',
      backgroundColor: theme.palette.common.white,
      zIndex: 1,
      pointerEvents: 'none',
    },
    '&:before': {
      right: 0,
    },
    '&:after': {
      opacity: 0,
    },
  },
  '&.stadium': {
    '& .slick-slider': {
      '& .slick-list': {
        '& .slick-track': {
          '& .slick-slide': {
            marginRight: theme.spacing(3),
          },
        },
      },
    },
  },
  '&.small': {
    '& .slick-slider': {
      '&:before': {
        width: theme.spacing(5),
      },
      '& .slick-list': {
        '& .slick-track': {
          '& .slick-slide': {
            width: `${theme.spacing(27)} !important`,
          },
        },
      },
    },
  },
  '&.large': {
    '& .slick-slider': {
      '&:before, &:after': {
        width: theme.spacing(7),
      },
      '& .slick-list': {
        '& .slick-track': {
          '& .slick-slide': {
            width: `${theme.spacing(40)} !important`,
          },
        },
      },
    },
  },
  '&.active-after': {
    '& .slick-slider': {
      '&:after': {
        left: 0,
        opacity: 1,
      },
    },
  },
  '&.active-before': {
    '& .slick-slider': {
      '&:before': {
        opacity: 0,
      },
    },
  },
  '&.default': {
    '& .slick-slider': {
      '&:before': {
        background: `linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 60%, rgba(255,255,255,1) 100%)`,
      },
      '&:after': {
        background: `linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0) 100%)`,
      },
    },
  },
  '&.secondary': {
    '& .slick-slider': {
      '&:before': {
        background: `linear-gradient(90deg, ${hexToRgba(
          theme.palette.secondary.main,
          0
        )} 0%, ${hexToRgba(theme.palette.secondary.main, 1)} 60%, ${hexToRgba(
          theme.palette.secondary.main,
          1
        )} 100%)`,
      },
      '&:after': {
        background: `linear-gradient(90deg, ${hexToRgba(
          theme.palette.secondary.main,
          1
        )} 0%, ${hexToRgba(theme.palette.secondary.main, 1)} 40%, ${hexToRgba(
          theme.palette.secondary.main,
          0
        )} 100%)`,
      },
    },
  },
  '&.black': {
    '& .slick-slider': {
      '&:before': {
        background: `linear-gradient(90deg, ${hexToRgba('#121820', 0)} 0%, ${hexToRgba(
          '#121820',
          1
        )} 60%, ${hexToRgba('#121820', 1)} 100%)`,
      },
      '&:after': {
        background: `linear-gradient(90deg, ${hexToRgba('#121820', 1)} 0%, ${hexToRgba(
          '#121820',
          1
        )} 40%, ${hexToRgba('#121820', 0)} 100%)`,
      },
    },
  },
}))

export const StyledArrowCarousel = styled(Box)(({ theme }) => ({
  '&.slick-next, &.slick-prev': {
    '& .wrapper-svg': {
      '& svg': {
        '& path': {
          '&:first-of-type': {
            fill: theme.palette.grey[200],
            stroke: theme.palette.grey[200],
          },
          '&:last-of-type': {
            stroke: theme.palette.primary.main,
          },
        },
      },
    },
    '&.secondary': {
      '& .wrapper-svg': {
        '& svg': {
          '& path': {
            '&:first-of-type': {
              fill: 'transparent',
              stroke: theme.palette.warning.main,
            },
            '&:last-of-type': {
              stroke: theme.palette.warning.main,
            },
          },
        },
      },
    },
    '&.main': {
      position: 'absolute',
      top: '50%',
      transform: `translate(0, -50%)`,
      zIndex: 9,
      borderRadius: '50%',
      '& .wrapper-svg': {
        '& svg': {
          cursor: 'pointer',
        },
      },
      '&.slick-next': {
        right: '10%',
        '& .wrapper-svg': {
          transform: 'rotate(180deg)',
        },
      },
      '&.slick-prev': {
        left: '10%',
      },
    },
    '&.bottom': {
      position: 'absolute',
      bottom: 0,
      zIndex: 9,
      borderRadius: '50%',
      right: 0,
      '& .wrapper-svg': {
        '& svg': {
          cursor: 'pointer',
        },
      },
      '&.slick-next': {
        '& .wrapper-svg': {
          transform: 'rotate(180deg)',
        },
      },
      '&.slick-prev': {
        transform: `translateX(calc(-100% + ${theme.spacing(-1)}))`,
      },
    },
    '&.slick-next': {
      '& .wrapper-svg': {
        transform: 'rotate(180deg)',
      },
    },
  },
}))

export const StyledBoxSliderThumb = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& .slick-slider': {
    backgroundColor: theme.palette.grey[900],
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    position: 'relative',
    '& .slick-list': {
      overflow: 'hidden',
      borderRadius: theme.spacing(2),
      '& .slick-track': {
        display: 'flex',
        overflow: 'hidden',
        '& .slick-slide': {
          overflow: 'hidden',
          '&:first-of-type': {
            borderTopLeftRadius: theme.spacing(2),
            borderBottomLeftRadius: theme.spacing(2),
          },
          '&:last-of-type': {
            borderTopRightRadius: theme.spacing(2),
            borderBottomRightRadius: theme.spacing(2),
          },
          '&.slick-active': {
            zIndex: 9,
          },
          '& .items': {
            display: 'block !important',
            position: 'relative',
            paddingTop: '55%',
            '& img': {
              height: '100% !important',
              width: '100%',
              objectFit: 'cover',
            },
          },
        },
      },
    },
  },
  '& .slick-arrow': {
    position: 'absolute',
    zIndex: 9,
    top: '50%',
    transform: 'translateY(-50%)',
    borderRadius: '50%',
    cursor: 'pointer',
    '& .wrapper-svg': {
      '& svg': {
        width: `${theme.spacing(3)} !important`,
        height: `${theme.spacing(3)} !important`,
      },
    },
    '&.slick-prev': {
      left: theme.spacing(1.5),
    },
    '&.slick-next': {
      right: theme.spacing(1.5),
      '& .wrapper-svg': {
        transform: 'rotate(180deg)',
      },
    },
  },
}))

export const StyledBoxSliderThumbs = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginTop: theme.spacing(3),
  overflow: 'hidden',
  '& .slick-slider': {
    position: 'relative',
    margin: theme.spacing(0, -0.8),
    '& .slick-list': {
      overflow: 'hidden',
      '& .slick-track': {
        display: 'flex',
        overflow: 'hidden',
        '& .slick-slide': {
          padding: theme.spacing(0, 1.5),
          '&.slick-active': {
            zIndex: 9,
          },
          '& .items': {
            display: 'block !important',
            position: 'relative',
            paddingTop: '65%',
            borderRadius: theme.spacing(2),
            overflow: 'hidden',
            cursor: 'pointer',
            '& img': {
              height: '100% !important',
              width: '100%',
              objectFit: 'cover',
            },
          },
        },
      },
    },
  },
  [theme.breakpoints.down('md')]: {
    '& .slick-slider': {
      '& .slick-list': {
        '& .slick-track': {
          '& .slick-slide': {
            '& .items': {
              borderRadius: theme.spacing(1),
            },
          },
        },
      },
    },
  },
}))

export const StyledBoxExplore = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& .slider': {
    position: 'relative',
    paddingTop: '28%',
    '& .explore': {
      height: '100%',
      width: '52%',
      display: 'none',
      position: 'absolute',
      top: 0,
      left: '50%',
      transition: 'all 0.3s ease-out',
      opacity: 0.2,
      '& .inner': {
        height: '100%',
        width: '100%',
        borderRadius: theme.spacing(5),
        position: 'relative',
        '& a': {
          display: 'block',
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '90%',
          height: '80%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        },
      },
      '&.prev': {
        display: 'block',
        transform: `translateX(-111%) scale(0.7)`,
      },
      '&.next': {
        display: 'block',
        transform: `translateX(11%) scale(0.7)`,
      },
      '&.center': {
        display: 'block',
        zIndex: 9,
        transform: 'translateX(-50%)',
        opacity: 1,
        '& .inner': {
          animation: `myEffect 0.3s ${theme.transitions.easing.sharp}`,
          animationDelay: '0.1s',
          '& a': {
            pointerEvents: 'all',
          },
        },
      },
      '& .MuiTypography-root': {
        fontSize: theme.spacing(3.2),
        fontWeight: 700,
        color: theme.palette.common.white,
        padding: theme.spacing(6, 0, 0, 7),
      },
      '@keyframes myEffect': {
        '0%': {
          transform: 'scale(1)',
        },
        '50%': {
          transform: 'scale(1.03)',
        },
        '100%': {
          transform: 'scale(1)',
        },
      },
    },
  },
  '& .slick-arrow': {
    position: 'absolute',
    zIndex: 9,
    top: '50%',
    transform: 'translateY(-50%)',
    borderRadius: '50%',
    cursor: 'pointer',
    '& .wrapper-svg': {
      '& svg': {
        width: `${theme.spacing(5)} !important`,
        height: `${theme.spacing(5)} !important`,
      },
    },
    '&.slick-prev': {
      left: 0,
    },
    '&.slick-next': {
      right: 0,
    },
  },
}))
