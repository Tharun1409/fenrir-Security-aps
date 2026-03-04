import { useTheme } from "../../app/ThemeContext"
import { MdDarkMode, MdLightMode } from "react-icons/md"

function ThemeToggle() {

  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      title="Toggle theme"
    >
      {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
    </button>
  )
}

export default ThemeToggle