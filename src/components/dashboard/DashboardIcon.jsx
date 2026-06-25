export default function DashboardIcon({ name, className = '' }) {
  const classes = `dashboard-icon ${className}`.trim()

  switch (name) {
    case 'home':
      return (
        <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
          <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5v-5.5h-5V21H5a1 1 0 0 1-1-1z" fill="currentColor" />
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
