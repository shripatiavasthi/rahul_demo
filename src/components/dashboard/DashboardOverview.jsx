import needHelpImage from '../../assets/needhelp.png'
import supportIcon from '../../assets/streamline_customer-support-1.png'
import runConflictIcon from '../../assets/Group 26.png'
import folderIcon from '../../assets/Folder.png'
import workstationIcon from '../../assets/Work.png'
import searchIcon from '../../assets/Search.png'
import advanceSearchIcon from '../../assets/Frame 17.png'
import DashboardIcon from './DashboardIcon'
import DashboardTableCard from './DashboardTableCard'

const actionIcons = {
  cube: runConflictIcon,
  folder: folderIcon,
  briefcase: workstationIcon,
  search: searchIcon,
  filter: advanceSearchIcon,
}

export default function DashboardOverview({
  quickActions,
  closings,
  requisitions,
  calendarDays,
  onOpenFiles,
}) {
  return (
    <>
      <section className="dashboard-actions dashboard-panel">
        <div className="dashboard-actions__list">
          {quickActions.map((action) => (
            <button
              key={action.title}
              type="button"
              className={`dashboard-action-card ${action.title === 'Workstation' ? 'dashboard-action-card--active' : ''}`}
              onClick={() => {
                if (action.title === 'Open Files') {
                  onOpenFiles()
                }
              }}
            >
              <span className="dashboard-action-card__accent" aria-hidden="true" />
              <span className="dashboard-action-card__icon">
                <img src={actionIcons[action.icon]} alt="" aria-hidden="true" />
              </span>
              <span className="dashboard-action-card__label">{action.title}</span>
              <span className="dashboard-action-card__arrow">
                <DashboardIcon name="arrow" />
              </span>
            </button>
          ))}
        </div>

        <div className="dashboard-shortcuts">
          <button type="button" className="dashboard-shortcut dashboard-shortcut--task">
            <span className="dashboard-shortcut__icon">
              <DashboardIcon name="task" />
            </span>
            <span>Assign Task</span>
          </button>
          <button type="button" className="dashboard-shortcut dashboard-shortcut--report">
            <span className="dashboard-shortcut__icon">
              <DashboardIcon name="report" />
            </span>
            <span>Generate Report</span>
          </button>
        </div>
      </section>

      <section className="dashboard-main">
        <DashboardTableCard title="Closings" count={16} rows={closings} />
        <DashboardTableCard title="Requisitions" count={9} rows={requisitions} />
      </section>

      <aside className="dashboard-sidepanel">
        <section className="dashboard-panel dashboard-calendar">
          <header className="dashboard-calendar__header">
            <button type="button" className="dashboard-calendar__nav" aria-label="Previous month">
              <DashboardIcon name="chevron-left" />
            </button>
            <h2>September, 2024</h2>
            <button type="button" className="dashboard-calendar__nav" aria-label="Next month">
              <DashboardIcon name="chevron-right" />
            </button>
          </header>

          <div className="dashboard-calendar__weekdays" aria-hidden="true">
            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
          </div>

          <div className="dashboard-calendar__grid">
            {calendarDays.flatMap((week, weekIndex) =>
              week.map((day, dayIndex) => (
                <span
                  key={`${weekIndex}-${dayIndex}-${day || 'empty'}`}
                  className={`dashboard-calendar__day ${day === 16 ? 'dashboard-calendar__day--active' : ''} ${day === '' ? 'dashboard-calendar__day--empty' : ''}`}
                >
                  {day}
                </span>
              )),
            )}
          </div>
        </section>

        <section className="dashboard-help">
          <img className="dashboard-help__background" src={needHelpImage} alt="" aria-hidden="true" />
          <div className="dashboard-help__overlay" />
          <div className="dashboard-help__content">
            <span className="dashboard-help__icon">
              <img src={supportIcon} alt="" aria-hidden="true" />
            </span>
            <h2>Need Help?</h2>
            <p>We are always here for your support.</p>
            <div className="dashboard-help__actions">
              <button type="button" className="dashboard-help__button">
                <span>Remote Support</span>
                <DashboardIcon name="arrow" />
              </button>
              <button type="button" className="dashboard-help__button">
                <span>Chat with the Support Team</span>
                <DashboardIcon name="arrow" />
              </button>
              <button type="button" className="dashboard-help__button">
                <span>Chat with Staff Members</span>
                <DashboardIcon name="arrow" />
              </button>
            </div>
          </div>
        </section>
      </aside>
    </>
  )
}
