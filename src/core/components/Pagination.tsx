import React, { memo } from 'react'
import { Box, IconButton, Pagination, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { StyledPagination } from 'src/styles/app'
import { Arrow } from 'src/core/components/sliders/Main'

interface Props {
  count: number
  page: number
  loading: boolean
  isDark?: boolean
  onClick: (page: number, query: any) => void
}

const PaginationComponent: React.FunctionComponent<Props> = ({
  count,
  page,
  loading,
  isDark,
  onClick,
}: Props) => {
  const router = useRouter()
  const handleChangePage = React.useCallback(
    (page: number) => {
      onClick(page - 1, router.query)
    },
    [router]
  )
  return (
    <StyledPagination className={isDark ? 'dark' : ''}>
      <IconButton
        className="prev"
        disabled={loading || page === 0}
        onClick={() => handleChangePage(page)}
      >
        <Arrow className="slick-prev" />
      </IconButton>
      <Pagination
        count={count}
        disabled={loading}
        page={page + 1}
        hideNextButton
        hidePrevButton
        onChange={(_event, page) => handleChangePage(page)}
        renderItem={(item) => (
          <Typography
            onClick={item.onClick}
            className={item.selected ? 'selected' : item.type === 'end-ellipsis' ? 'ellipsis' : ''}
          >
            {item.type === 'page' ? item.page : '...'}
          </Typography>
        )}
      />
      <IconButton
        className="next"
        disabled={loading || page + 1 === count}
        onClick={() => handleChangePage(page + 2)}
      >
        <Arrow className="slick-next" />
      </IconButton>
    </StyledPagination>
  )
}

PaginationComponent.defaultProps = {}

export default memo(PaginationComponent)
