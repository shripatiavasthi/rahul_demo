import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DashboardOverview from '../components/dashboard/DashboardOverview'
import DashboardSidebar from '../components/dashboard/DashboardSidebar'
import DashboardTopbar from '../components/dashboard/DashboardTopbar'
import {
  setTheme,
  toggleSidebar,
} from '../store/dashboardSlice'

const quickActions = [
  { title: 'Run Conflict', icon: 'cube' },
  { title: 'Open Files', icon: 'folder' },
  { title: 'Workstation', icon: 'briefcase' },
  { title: 'Quick Search', icon: 'search' },
  { title: 'Advance Search', icon: 'filter' },
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
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31, '', '', '', ''],
]

export default function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isSidebarOpen, theme } = useSelector(
    (state) => state.dashboard,
  )

  return (
    <main className={`dashboard-shell dashboard-shell--${theme}`.trim()}>
      <div className="dashboard-frame">
        <DashboardTopbar
          theme={theme}
          onThemeChange={(nextTheme) => dispatch(setTheme(nextTheme))}
        />

        <div
          className={`dashboard-layout ${isSidebarOpen ? '' : 'dashboard-layout--sidebar-closed'}`.trim()}
        >
          <DashboardSidebar
            isSidebarOpen={isSidebarOpen}
            onToggle={() => dispatch(toggleSidebar())}
          />

          <DashboardOverview
            quickActions={quickActions}
            closings={closings}
            requisitions={requisitions}
            calendarDays={calendarDays}
            onOpenFiles={() => navigate('/home/open-files')}
          />
        </div>
      </div>
    </main>
  )
}
