import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const logoImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const onToggleTheme = () => {
        toggleTheme()
      }

      return (
        <nav className={`navbar ${isDarkTheme ? 'nav-dark' : ''}`}>
          <img src={logoImageUrl} alt="website logo" className="website-logo" />
          <ul className="links-container">
            <Link
              to="/"
              className={`nav-link ${isDarkTheme ? 'nav-link-dark' : ''}`}
            >
              <li>Home</li>
            </Link>
            <Link
              to="/about"
              className={`nav-link ${isDarkTheme ? 'nav-link-dark' : ''}`}
            >
              <li>About</li>
            </Link>
          </ul>
          <button
            type="button"
            className="toggle-theme-btn"
            onClick={onToggleTheme}
            data-testid="theme"
          >
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
              }
              className="toggle-theme-icon"
              alt="theme"
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
