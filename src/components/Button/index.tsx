import React from 'react'
import { buttonProps } from '../../types/buttonProps'
import classNames from 'classnames'
import style from './Button.module.scss'

const Button: React.FC<buttonProps> = ({ isEmailSend = false, children }) => {
  return (
    <button

      style={{ display: isEmailSend ? 'none' : 'block' }}
      type="submit"
      className={classNames("btn btn-primary", `${style.button}`)}
      >
      {children}
    </button>
  )
}

export default Button