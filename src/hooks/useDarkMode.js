import useMedia from './useMedia'
import useLocalStorage from './useLocalStorage'

function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', usePrefersDarkMode())

  return [darkMode, setDarkMode]
}

function usePrefersDarkMode() {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false);
}



export default useDarkMode
