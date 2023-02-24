// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          <div className={`bottom-section ${isDarkTheme ? 'dark-bg' : ''}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1
              className={`not-found-heading ${
                isDarkTheme ? 'dark-heading' : ''
              }`}
            >
              Lost Your Way?
            </h1>
            <p
              className={`not-found-para ${isDarkTheme ? 'dark-heading' : ''}`}
            >
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
