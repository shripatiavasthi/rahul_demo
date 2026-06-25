import DashboardBrandMark from './DashboardBrandMark'
import DashboardIcon from './DashboardIcon'

export default function DashboardTopbar({ theme = 'light', onThemeChange }) {
  return (
    <header className="dashboard-topbar">
      <DashboardBrandMark />

      <div className="dashboard-greeting">
        <h1>Hey Rick,</h1>
        <p>Welcome to ‘Your Brand Name Here’</p>
      </div>

      <div className="dashboard-toolbar">
        <button type="button" className="dashboard-toolbar__icon-button" aria-label="Workspace stack">
          <DashboardIcon name="layers" />
        </button>
        <button type="button" className="dashboard-toolbar__icon-button dashboard-toolbar__icon-button--dot" aria-label="Notifications">
          <DashboardIcon name="bell" />
        </button>

        <div className="dashboard-theme-toggle" aria-label="Theme">
          <button
            type="button"
            className={`dashboard-theme-toggle__segment ${theme === 'light' ? 'dashboard-theme-toggle__segment--active' : ''}`.trim()}
            aria-label="Light mode"
            aria-pressed={theme === 'light'}
            onClick={() => onThemeChange?.('light')}
          >
            <DashboardIcon name="sun" />
          </button>
          <button
            type="button"
            className={`dashboard-theme-toggle__segment ${theme === 'dark' ? 'dashboard-theme-toggle__segment--active' : ''}`.trim()}
            aria-label="Dark mode"
            aria-pressed={theme === 'dark'}
            onClick={() => onThemeChange?.('dark')}
          >
            <DashboardIcon name="moon" />
          </button>
        </div>

        <div className="dashboard-zoom" aria-label="Zoom level">
          <button type="button" className="dashboard-zoom__button" aria-label="Zoom out">
            -
          </button>
          <div className="dashboard-zoom__track">
            <span className="dashboard-zoom__fill" />
            <span className="dashboard-zoom__thumb" />
          </div>
          <button type="button" className="dashboard-zoom__button" aria-label="Zoom in">
            +
          </button>
          <span className="dashboard-zoom__pill">100%</span>
        </div>

        <button type="button" className="dashboard-profile" aria-label="Profile menu">
          <span className="dashboard-profile__avatar" aria-hidden="true">
            R
          </span>
          <DashboardIcon name="chevron-right" className="dashboard-profile__caret" />
        </button>
      </div>
    </header>
  )
}
