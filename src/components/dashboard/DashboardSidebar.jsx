import settingIcon from '../../assets/Setting.png'
import DashboardIcon from './DashboardIcon'

export default function DashboardSidebar({ isSidebarOpen, onToggle }) {
  return (
    <aside className={`dashboard-sidebar ${isSidebarOpen ? '' : 'dashboard-sidebar--closed'}`.trim()}>
      <div className="dashboard-sidebar__rail">
        <button type="button" className="dashboard-sidebar__avatar dashboard-sidebar__avatar--active" aria-label="Home">
          <DashboardIcon name="home" />
        </button>
        <button type="button" className="dashboard-sidebar__avatar" aria-label="Integrations">
          <DashboardIcon name="integrations" />
        </button>
        <button type="button" className="dashboard-sidebar__avatar" aria-label="Users">
          <DashboardIcon name="users" />
        </button>
        <button type="button" className="dashboard-sidebar__avatar dashboard-sidebar__avatar--settings" aria-label="Settings">
          <img className="dashboard-sidebar__avatar-img" src={settingIcon} alt="" aria-hidden="true" />
        </button>
      </div>

      <button
        type="button"
        className={`dashboard-sidebar__collapse ${isSidebarOpen ? '' : 'dashboard-sidebar__collapse--closed'}`.trim()}
        aria-label={isSidebarOpen ? 'Collapse menu' : 'Expand menu'}
        aria-expanded={isSidebarOpen}
        onClick={onToggle}
      >
        <DashboardIcon name="chevron-right" />
      </button>

      <nav className="dashboard-sidebar__menu" aria-label="Primary" aria-hidden={!isSidebarOpen}>
        <button type="button" className="dashboard-nav-item dashboard-nav-item--active">
          <span className="dashboard-nav-item__icon">
            <DashboardIcon name="home" />
          </span>
          <span>Home</span>
        </button>
        <button type="button" className="dashboard-nav-item">
          <span className="dashboard-nav-item__icon">
            <DashboardIcon name="integrations" />
          </span>
          <span>Integrations</span>
        </button>
        <button type="button" className="dashboard-nav-item">
          <span className="dashboard-nav-item__icon">
            <DashboardIcon name="users" />
          </span>
          <span>Users</span>
        </button>
        <button type="button" className="dashboard-nav-item dashboard-nav-item--settings">
          <span className="dashboard-nav-item__icon">
            <DashboardIcon name="settings" />
          </span>
          <span>Settings</span>
        </button>
      </nav>
    </aside>
  )
}
