import { useState, useLayoutEffect } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState(0)

  const setCode = code => {
    window.localStorage.setItem('spin_darkmode', code)
    setTheme(code)
  }

  const themeToggler = () => {
    theme === 0 ? setCode(1) : setCode(0)
  }

  useLayoutEffect(() => {
    const localTheme = window.localStorage.getItem('spin_darkmode')
    localTheme ? setTheme(Number(localTheme)) : setCode(0)
  }, [])

  return [theme, themeToggler]
}
