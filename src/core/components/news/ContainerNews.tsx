import React, { memo } from 'react'
import { Grid } from '@mui/material'
import { StyledContainerNews } from 'src/styles/news'
import NewsCard from 'src/core/components/cards/News'

interface Props {
  data: any
}

const ContainerNews: React.FunctionComponent<Props> = ({ data }: Props) => {
  const first = React.useMemo(() => data[0], [data])
  const first4 = React.useMemo(() => data.slice(1, 5), [data])
  const last = React.useMemo(() => data.slice(5), [data])
  return (
    <StyledContainerNews>
      <Grid container spacing={4}>
        <Grid item sm={6} className="first">
          <NewsCard title={first.title} color="dark" />
        </Grid>
        <Grid item sm={6}>
          <Grid container spacing={4}>
            {first4.map((item, i: number) => (
              <Grid key={i} item sm={6}>
                <NewsCard title={item.title} color="dark" />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {last.map((item, i: number) => (
          <Grid key={i} item sm={4}>
            <NewsCard title={item.title} color="dark" />
          </Grid>
        ))}
      </Grid>
    </StyledContainerNews>
  )
}

ContainerNews.defaultProps = {}

export default memo(ContainerNews)
