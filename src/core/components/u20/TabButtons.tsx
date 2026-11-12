import React, { memo } from 'react'
import { Tabs, Tab } from '@mui/material'
import { useTranslations } from 'next-intl'
import { StyledTabs } from 'src/styles/u20'
import ButtonForm from 'src/core/components/Button'

interface Props {
  tab: number
  setTab: (tab: number) => void
}

const tabs = ['group-stages', 'round-of-16', 'quarter-finals', 'semi-finals', 'final']

const TabButtons: React.FunctionComponent<Props> = ({ tab, setTab }: Props) => {
  const t = useTranslations('Locale')

  const handleChange = React.useCallback((_event: React.SyntheticEvent, value: number) => {
    setTab(value)
  }, [])
  return (
    <StyledTabs>
      <Tabs value={tab} onChange={handleChange} variant="scrollable" scrollButtons={false}>
        {tabs.map((item, i) => (
          <Tab
            key={i}
            className="button-outer"
            icon={
              <ButtonForm text={t(item)} color="secondary" addClass={i === tab ? 'selected' : ''} />
            }
            disableRipple
            component="div"
          />
        ))}
      </Tabs>
    </StyledTabs>
  )
}

TabButtons.defaultProps = {}

export default memo(TabButtons)
