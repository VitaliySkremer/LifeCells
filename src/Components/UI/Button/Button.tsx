import { ButtonHTMLAttributes, ReactNode } from "react"
import styles from './Button.module.scss'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children:ReactNode
}

export const Button = ({children,...other}:IButtonProps) => {
  return (
    <button className={styles.button} {...other}>
        {children}
    </button>
  )
}
