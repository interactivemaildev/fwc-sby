import React, { memo } from 'react'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import { StyledBoxSearch } from 'src/styles/search'
import { StyledTextField } from 'src/styles/form'
import ButtonForm from 'src/core/components/Button'

interface Props {
  loading: boolean
}

const Search: React.FunctionComponent<Props> = ({ loading }: Props) => {
  const router = useRouter()
  const t = useTranslations('Locale')
  const ref = React.useRef<HTMLInputElement>()
  const handleSearch = React.useCallback(async (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key
    if (key === 'Enter') {
      await enterSearch()
    }
  }, [])
  const enterSearch = async () => {
    const value = ref.current?.value
    const validateValue = value ? (value as string).replace(/[^0-9a-z]/gi, ' ') : ''
    console.log(validateValue)
    // await router.push(
    //   `/search/?q=${validate_value}&page=0`,
    //   `/search/?q=${validate_value}&page=0`
    // )
  }
  return (
    <StyledBoxSearch>
      <StyledTextField
        hiddenLabel
        inputRef={ref}
        disabled={loading}
        placeholder="Type something..."
        onKeyDown={handleSearch}
        autoComplete="off"
        variant="outlined"
      />
      <ButtonForm text={t('search')} onClick={() => enterSearch()} />
    </StyledBoxSearch>
  )
}

Search.defaultProps = {}

export default memo(Search)
