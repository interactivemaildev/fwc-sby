import React, { memo } from 'react'
import { Button, Tooltip } from '@mui/material'
import Link from 'next/link'
import { StyledButton } from 'src/styles/form'

interface Props {
  text: string
  addClass?: string
  variant?: 'contained' | 'outlined'
  color?: 'primary' | 'secondary'
  marginX?: number
  icon?: React.ReactNode
  onClick?: (text?: string) => any
  href?: string
  shallow?: boolean
  disabled?: boolean
  tooltip?: string
}

interface PropsButton {
  text: string
  addClass?: string
  variant?: 'contained' | 'outlined'
  color?: 'primary' | 'secondary'
  marginX?: number
  icon?: React.ReactNode
  onClick?: () => any
  component: any
  disabled?: boolean
  tooltip?: string
}

const ComponentButton = React.memo((props: PropsButton) => {
  const { text, addClass, variant, color, icon, component, marginX, disabled, tooltip, onClick } =
    props
  return (
    <Tooltip
      title={tooltip}
      hidden={!!tooltip}
      placement="top"
      PopperProps={{
        disablePortal: true,
      }}
      arrow
    >
      <Button
        className={addClass}
        disableElevation
        variant={variant || 'contained'}
        color={color || 'primary'}
        component={component}
        startIcon={icon}
        disabled={disabled}
        onClick={onClick ? onClick : () => null}
        sx={{
          marginX,
        }}
      >
        {text}
      </Button>
    </Tooltip>
  )
})

const FormButton: React.FunctionComponent<Props> = ({
  text,
  addClass,
  variant,
  color,
  marginX,
  icon,
  onClick,
  href,
  shallow,
  disabled,
  tooltip,
}: Props) => {
  return (
    <StyledButton>
      {href ? (
        <Link href={href} shallow={shallow} legacyBehavior>
          <a>
            <ComponentButton
              text={text}
              icon={icon}
              component="span"
              marginX={marginX}
              disabled={disabled}
              variant={variant}
              color={color}
              addClass={addClass}
            />
          </a>
        </Link>
      ) : (
        <ComponentButton
          text={text}
          icon={icon}
          component="button"
          marginX={marginX}
          disabled={disabled}
          tooltip={tooltip}
          onClick={onClick ? () => onClick(text) : () => null}
          variant={variant}
          color={color}
          addClass={addClass}
        />
      )}
    </StyledButton>
  )
}

FormButton.defaultProps = {
  icon: null,
  marginX: 0,
  shallow: false,
  disabled: false,
  tooltip: '',
  variant: 'contained',
  color: 'primary',
}

export default memo(FormButton)
