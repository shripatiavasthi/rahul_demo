import { useState } from 'react'
import heroImage from '../assets/hero.png'

const quickActions = [
  { title: 'Run Conflict', icon: 'cube' },
  { title: 'Open Files', icon: 'folder' },
  { title: 'Workstation', icon: 'briefcase' },
  { title: 'Quick Search', icon: 'search' },
  { title: 'Advance Search', icon: 'filter' },
]

const fileTree = [
  {
    label: "File Information's",
    expanded: true,
    children: [
      { label: 'Details', active: true, icon: 'folder-open' },
      { label: 'Parties', icon: 'folder' },
      { label: 'Property', icon: 'folder-doc' },
      { label: 'Solicitor', icon: 'folder-plus' },
      { label: 'Brokerage & Referral', icon: 'folder-plus' },
      { label: 'Checklist', icon: 'folder-doc' },
    ],
  },
  { label: 'Mortgagee', icon: 'folder' },
]

const closings = [
  {
    fileName: 'Singh, Amrik/Arora, Navi p/f Jagga...',
    number: '#53772837',
    type: 'Buyer',
  },
  {
    fileName: 'Singh, Amrik/Arora, Navi p/f Jagga...',
    number: '#53772837',
    type: 'Buyer',
  },
  {
    fileName: 'Singh, Amrik/Arora, Navi p/f Jagga...',
    number: '#53772837',
    type: 'Buyer',
  },
  {
    fileName: 'Jagga, Navi s/t Singh/Arora',
    number: '#53772837',
    type: 'Seller',
  },
  {
    fileName: 'Singh, Amrik/Arora, Navi m/t HDFC',
    number: '#53772837',
    type: 'Mortgagor',
  },
]

const requisitions = [...closings]

const calendarDays = [
  ['', 1, 2, 3, 4, 5, 6, 7],
  ['', 8, 9, 10, 11, 12, 13, 14],
  ['', 15, 16, 17, 18, 19, 20, 21],
  ['', 22, 23, 24, 25, 26, 27, 28],
  ['', 29, 30, 31, '', '', '', ''],
]

function BrandMark() {
  return (
    <span className="dashboard-brand" aria-label="Logo">
      <span className="dashboard-brand__mark" aria-hidden="true">
        <span className="dashboard-brand__stroke dashboard-brand__stroke--left" />
        <span className="dashboard-brand__stroke dashboard-brand__stroke--right" />
        <span className="dashboard-brand__stroke dashboard-brand__stroke--base" />
      </span>
      <span className="dashboard-brand__text">Logo</span>
    </span>
  )
}

function Icon({ name, className = '' }) {
  const classes = `dashboard-icon ${className}`.trim()

  switch (name) {
    case 'home':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <path
            d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5v-5.5h-5V21H5a1 1 0 0 1-1-1z"
            fill="currentColor"
          />
        </svg>
      )
    case 'integrations':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 10.5h18M7 15.5h3M13 15.5h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'users':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <circle cx="8" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="16.5" cy="9" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3.5 18.5c1.1-2.4 3-3.5 5.7-3.5s4.5 1.1 5.5 3.5M13.5 18.5c.7-1.6 2-2.5 4-2.5 1.3 0 2.3.3 3 .9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'settings':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <path d="M12 3.5 14 5l2.5-.3.9 2.4 2.2 1.2-.8 2.4.8 2.3-2.2 1.3-.9 2.4-2.5-.4-2 1.6-2-1.6-2.5.4-.9-2.4-2.2-1.3.8-2.3-.8-2.4 2.2-1.2.9-2.4L10 5z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      )
    case 'cube':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <path d="m12 3 7 4-7 4-7-4zM5 9l7 4 7-4M5 9v6l7 4 7-4V9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      )
    case 'folder':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <path d="M3.5 8.5A2.5 2.5 0 0 1 6 6h4l2 2H18a2.5 2.5 0 0 1 2.5 2.5v5A2.5 2.5 0 0 1 18 18H6a2.5 2.5 0 0 1-2.5-2.5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      )
    case 'folder-open':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <path d="M3.5 8A2.5 2.5 0 0 1 6 5.5h4l1.8 2H18a2.5 2.5 0 0 1 2.3 1.5l-1.6 6A2.5 2.5 0 0 1 16.3 17H6a2.5 2.5 0 0 1-2.4-3l1.3-4.5A2 2 0 0 1 6.8 8z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      )
    case 'folder-doc':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <path d="M3.5 8.5A2.5 2.5 0 0 1 6 6h4l2 2H18a2.5 2.5 0 0 1 2.5 2.5v5A2.5 2.5 0 0 1 18 18H6a2.5 2.5 0 0 1-2.5-2.5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M10 11.5h5M10 14.5h3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'folder-plus':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <path d="M3.5 8.5A2.5 2.5 0 0 1 6 6h4l2 2H18a2.5 2.5 0 0 1 2.5 2.5v5A2.5 2.5 0 0 1 18 18H6a2.5 2.5 0 0 1-2.5-2.5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M16.5 10.5v5M14 13h5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'briefcase':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <rect x="3.5" y="7" width="17" height="11" rx="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7M3.5 11.5h17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'search':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="m15 15 4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'filter':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <path d="M4 6.5h11M4 12h7M4 17.5h11M17 6.5h3M13 12h7M17 17.5h3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="16" cy="6.5" r="2" fill="currentColor" />
          <circle cx="10" cy="12" r="2" fill="currentColor" />
          <circle cx="16" cy="17.5" r="2" fill="currentColor" />
        </svg>
      )
    case 'document':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <path d="M7 3.5h6l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M13 3.5V8h4.5M9 12h5M9 16h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'layers':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <path d="m12 3 8 4.3-8 4.3L4 7.3zm0 7.5 8 4.2-8 4.3-8-4.3zm0-3.7 8 4.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      )
    case 'bell':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <path d="M6.5 15.5h11l-1.2-1.8V10a4.3 4.3 0 1 0-8.6 0v3.7Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M10 18.5a2.2 2.2 0 0 0 4 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'sun':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 2.8v2.5M12 18.7v2.5M21.2 12h-2.5M5.3 12H2.8M18.5 5.5l-1.8 1.8M7.3 16.7l-1.8 1.8M18.5 18.5l-1.8-1.8M7.3 7.3 5.5 5.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'moon':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <path d="M15.5 3.5a7.6 7.6 0 1 0 5 13.3 8.2 8.2 0 1 1-5-13.3Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      )
    case 'headset':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <path d="M5 12a7 7 0 0 1 14 0v4.5a2 2 0 0 1-2 2h-1.5v-5H19M5 13.5h3.5v5H7a2 2 0 0 1-2-2Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.5 18.5a2.5 2.5 0 0 1-2.5 2.5h-2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'arrow':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'chevron-left':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <path d="m14.5 6.5-5 5.5 5 5.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'chevron-right':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <path d="m9.5 6.5 5 5.5-5 5.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'task':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <path d="m5.5 18.5 3-9.5 10 10M12.5 5.5l6 6M4 20h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'report':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <path d="M6 4.5h8l4 4V19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-13a1.5 1.5 0 0 1 1-1.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M14 4.5V9h4M8.5 12.5l2 2 4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'save':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <path d="M5 4.5h11l3 3V19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M8 4.5v5h7v-5M9 15h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'close':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <path d="m7 7 10 10M17 7 7 17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'plus-circle':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 8v8M8 12h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'calendar':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <rect x="4" y="6" width="16" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 4.5v3M16 4.5v3M4 10h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}

function TableCard({ title, count, rows }) {
  return (
    <section className="dashboard-panel dashboard-panel--table">
      <header className="dashboard-panel__header">
        <div className="dashboard-panel__title-group">
          <h2>{title}</h2>
          <span className="dashboard-badge">{count}</span>
        </div>

        <div className="dashboard-tabs" role="tablist" aria-label={`${title} range`}>
          <button type="button" className="dashboard-tabs__item dashboard-tabs__item--active">
            Today
          </button>
          <button type="button" className="dashboard-tabs__item">
            Weekly
          </button>
          <button type="button" className="dashboard-tabs__item">
            Monthly
          </button>
        </div>
      </header>

      <div className="dashboard-table" role="table" aria-label={title}>
        <div className="dashboard-table__head" role="rowgroup">
          <div className="dashboard-table__row dashboard-table__row--head" role="row">
            <span role="columnheader">File Name</span>
            <span role="columnheader">Number</span>
            <span role="columnheader">Type</span>
            <span className="dashboard-table__icon-slot" aria-hidden="true" />
          </div>
        </div>

        <div className="dashboard-table__body" role="rowgroup">
          {rows.map((row, index) => (
            <div className="dashboard-table__row" role="row" key={`${row.fileName}-${index}`}>
              <div className="dashboard-table__file" role="cell">
                <span className="dashboard-table__file-icon">
                  <Icon name="document" />
                </span>
                <span>{row.fileName}</span>
              </div>
              <span role="cell">{row.number}</span>
              <span role="cell">{row.type}</span>
              <button type="button" className="dashboard-table__action" aria-label={`Open ${row.fileName}`}>
                <Icon name="arrow" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <button type="button" className="dashboard-view-all">
        View All
      </button>
    </section>
  )
}

function OpenFilesWorkspace() {
  return (
    <section className="dashboard-open-files">
      <header className="dashboard-open-files__toolbar">
        <div className="dashboard-open-files__toolbar-left">
          <button type="button" className="dashboard-open-files__home-button" aria-label="Open files home">
            <Icon name="home" />
          </button>
          <button type="button" className="dashboard-open-files__add-button">
            <Icon name="plus-circle" />
            <span>Add New</span>
          </button>
          <div className="dashboard-open-files__tabs">
            <button type="button" className="dashboard-open-files__tab dashboard-open-files__tab--active">
              <span>File Name Here</span>
              <Icon name="close" />
            </button>
            <button type="button" className="dashboard-open-files__tab">
              <span>File Name Here</span>
              <Icon name="close" />
            </button>
          </div>
        </div>

        <div className="dashboard-open-files__toolbar-right">
          <label className="dashboard-open-files__search">
            <Icon name="search" />
            <input type="search" placeholder="Search from existing files..." />
          </label>
          <button type="button" className="dashboard-open-files__save-button">
            <Icon name="save" />
            <span>Save</span>
          </button>
        </div>
      </header>

      <div className="dashboard-open-files__body">
        <aside className="dashboard-open-files__sidebar">
          {fileTree.map((section) =>
            section.children ? (
              <div className="dashboard-open-files__tree-group" key={section.label}>
                <button type="button" className="dashboard-open-files__tree-parent">
                  <Icon name="folder" />
                  <span>{section.label}</span>
                  <span className="dashboard-open-files__tree-toggle">-</span>
                </button>
                <div className="dashboard-open-files__tree-children">
                  {section.children.map((item) => (
                    <button
                      type="button"
                      key={item.label}
                      className={`dashboard-open-files__tree-item ${item.active ? 'dashboard-open-files__tree-item--active' : ''}`}
                    >
                      <Icon name={item.icon} />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button type="button" className="dashboard-open-files__tree-parent" key={section.label}>
                <Icon name={section.icon} />
                <span>{section.label}</span>
              </button>
            ),
          )}
        </aside>

        <section className="dashboard-open-files__content">
          <div className="dashboard-open-files__panel">
            <div className="dashboard-open-files__section-tag">Details</div>

            <div className="dashboard-open-files__form-grid">
              <label className="dashboard-open-files__field dashboard-open-files__field--select">
                <input type="text" placeholder="File Type" />
                <Icon name="chevron-right" className="dashboard-open-files__field-icon dashboard-open-files__field-icon--down" />
              </label>
              <label className="dashboard-open-files__field dashboard-open-files__field--select">
                <input type="text" placeholder="File Status" />
                <Icon name="chevron-right" className="dashboard-open-files__field-icon dashboard-open-files__field-icon--down" />
              </label>
              <label className="dashboard-open-files__field">
                <input type="text" placeholder="File no." />
              </label>
              <label className="dashboard-open-files__field">
                <input type="text" placeholder="Teraview file no." />
              </label>

              <label className="dashboard-open-files__field">
                <input type="text" placeholder="Conflict Search date" />
                <Icon name="calendar" className="dashboard-open-files__field-icon" />
              </label>
              <label className="dashboard-open-files__field dashboard-open-files__field--select">
                <input type="text" placeholder="Acting for" />
                <Icon name="chevron-right" className="dashboard-open-files__field-icon dashboard-open-files__field-icon--down" />
              </label>
              <label className="dashboard-open-files__field dashboard-open-files__field--select">
                <input type="text" placeholder="Barrister & Solicitor Name" />
                <Icon name="chevron-right" className="dashboard-open-files__field-icon dashboard-open-files__field-icon--down" />
              </label>
              <label className="dashboard-open-files__field dashboard-open-files__field--select">
                <input type="text" placeholder="Clerk Name" />
                <Icon name="chevron-right" className="dashboard-open-files__field-icon dashboard-open-files__field-icon--down" />
              </label>

              <label className="dashboard-open-files__field dashboard-open-files__field--select">
                <input type="text" placeholder="Witness/Notary Name" />
                <Icon name="chevron-right" className="dashboard-open-files__field-icon dashboard-open-files__field-icon--down" />
              </label>
              <label className="dashboard-open-files__field">
                <input type="text" placeholder="Commissioner Name" />
              </label>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [workspaceView, setWorkspaceView] = useState('dashboard')

  return (
    <main className="dashboard-shell">
      <div className="dashboard-frame">
        <header className="dashboard-topbar">
          <BrandMark />

          <div className="dashboard-greeting">
            <h1>Hey Rick,</h1>
            <p>Welcome to ‘Your Brand Name Here’</p>
          </div>

          <div className="dashboard-toolbar">
            <button type="button" className="dashboard-toolbar__icon-button" aria-label="Workspace stack">
              <Icon name="layers" />
            </button>
            <button type="button" className="dashboard-toolbar__icon-button dashboard-toolbar__icon-button--dot" aria-label="Notifications">
              <Icon name="bell" />
            </button>

            <div className="dashboard-theme-toggle" aria-label="Theme">
              <button type="button" className="dashboard-theme-toggle__segment dashboard-theme-toggle__segment--active" aria-label="Light mode">
                <Icon name="sun" />
              </button>
              <button type="button" className="dashboard-theme-toggle__segment" aria-label="Dark mode">
                <Icon name="moon" />
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
              <Icon name="chevron-right" className="dashboard-profile__caret" />
            </button>
          </div>
        </header>

        <div
          className={`dashboard-layout ${isSidebarOpen ? '' : 'dashboard-layout--sidebar-closed'} ${workspaceView === 'open-files' ? 'dashboard-layout--open-files' : ''}`.trim()}
        >
          {workspaceView !== 'open-files' ? (
            <aside
              className={`dashboard-sidebar ${isSidebarOpen ? '' : 'dashboard-sidebar--closed'}`.trim()}
            >
              <div className="dashboard-sidebar__rail">
                <button type="button" className="dashboard-sidebar__avatar dashboard-sidebar__avatar--active" aria-label="Home">
                  <Icon name="home" />
                </button>
                <button type="button" className="dashboard-sidebar__avatar" aria-label="Integrations">
                  <Icon name="integrations" />
                </button>
                <button type="button" className="dashboard-sidebar__avatar" aria-label="Users">
                  <Icon name="users" />
                </button>
                <button type="button" className="dashboard-sidebar__avatar dashboard-sidebar__avatar--settings" aria-label="Settings">
                  <Icon name="settings" />
                </button>
              </div>

              <button
                type="button"
                className={`dashboard-sidebar__collapse ${isSidebarOpen ? '' : 'dashboard-sidebar__collapse--closed'}`.trim()}
                aria-label={isSidebarOpen ? 'Collapse menu' : 'Expand menu'}
                aria-expanded={isSidebarOpen}
                onClick={() => setIsSidebarOpen((currentState) => !currentState)}
              >
                <Icon name="chevron-right" />
              </button>

              <nav
                className="dashboard-sidebar__menu"
                aria-label="Primary"
                aria-hidden={!isSidebarOpen}
              >
                <button type="button" className="dashboard-nav-item dashboard-nav-item--active">
                  <span className="dashboard-nav-item__icon">
                    <Icon name="home" />
                  </span>
                  <span>Home</span>
                </button>
                <button type="button" className="dashboard-nav-item">
                  <span className="dashboard-nav-item__icon">
                    <Icon name="integrations" />
                  </span>
                  <span>Integrations</span>
                </button>
                <button type="button" className="dashboard-nav-item">
                  <span className="dashboard-nav-item__icon">
                    <Icon name="users" />
                  </span>
                  <span>Users</span>
                </button>
                <button type="button" className="dashboard-nav-item dashboard-nav-item--settings">
                  <span className="dashboard-nav-item__icon">
                    <Icon name="settings" />
                  </span>
                  <span>Settings</span>
                </button>
              </nav>
            </aside>
          ) : null}

          {workspaceView === 'open-files' ? (
            <OpenFilesWorkspace />
          ) : (
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
                          setWorkspaceView('open-files')
                        }
                      }}
                    >
                      <span className="dashboard-action-card__accent" aria-hidden="true" />
                      <span className="dashboard-action-card__icon">
                        <Icon name={action.icon} />
                      </span>
                      <span className="dashboard-action-card__label">{action.title}</span>
                      <span className="dashboard-action-card__arrow">
                        <Icon name="arrow" />
                      </span>
                    </button>
                  ))}
                </div>

                <div className="dashboard-shortcuts">
                  <button type="button" className="dashboard-shortcut dashboard-shortcut--task">
                    <span className="dashboard-shortcut__icon">
                      <Icon name="task" />
                    </span>
                    <span>Assign Task</span>
                  </button>
                  <button type="button" className="dashboard-shortcut dashboard-shortcut--report">
                    <span className="dashboard-shortcut__icon">
                      <Icon name="report" />
                    </span>
                    <span>Generate Report</span>
                  </button>
                </div>
              </section>

              <section className="dashboard-main">
                <TableCard title="Closings" count={16} rows={closings} />
                <TableCard title="Requisitions" count={9} rows={requisitions} />
              </section>

              <aside className="dashboard-sidepanel">
                <section className="dashboard-panel dashboard-calendar">
                  <header className="dashboard-calendar__header">
                    <button type="button" className="dashboard-calendar__nav" aria-label="Previous month">
                      <Icon name="chevron-left" />
                    </button>
                    <h2>September, 2024</h2>
                    <button type="button" className="dashboard-calendar__nav" aria-label="Next month">
                      <Icon name="chevron-right" />
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
                  <img className="dashboard-help__background" src={heroImage} alt="" aria-hidden="true" />
                  <div className="dashboard-help__overlay" />
                  <div className="dashboard-help__content">
                    <span className="dashboard-help__icon">
                      <Icon name="headset" />
                    </span>
                    <h2>Need Help?</h2>
                    <p>We are always here for your support.</p>
                    <div className="dashboard-help__actions">
                      <button type="button" className="dashboard-help__button">
                        <span>Remote Support</span>
                        <Icon name="arrow" />
                      </button>
                      <button type="button" className="dashboard-help__button">
                        <span>Chat with the Support Team</span>
                        <Icon name="arrow" />
                      </button>
                      <button type="button" className="dashboard-help__button">
                        <span>Chat with Staff Members</span>
                        <Icon name="arrow" />
                      </button>
                    </div>
                  </div>
                </section>
              </aside>
            </>
          )}
        </div>
      </div>
    </main>
  )
}