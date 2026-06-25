import { useDispatch, useSelector } from 'react-redux'
import DashboardOverview from '../components/dashboard/DashboardOverview'
import DashboardSidebar from '../components/dashboard/DashboardSidebar'
import DashboardTopbar from '../components/dashboard/DashboardTopbar'
import OpenFilesWorkspace from '../components/dashboard/OpenFilesWorkspace'
import {
  setTheme,
  setWorkspaceView,
  toggleSidebar,
} from '../store/dashboardSlice'

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

export default function Home() {
  const dispatch = useDispatch()
  const { isSidebarOpen, workspaceView, theme } = useSelector(
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
          className={`dashboard-layout ${isSidebarOpen ? '' : 'dashboard-layout--sidebar-closed'} ${workspaceView === 'open-files' ? 'dashboard-layout--open-files' : ''}`.trim()}
        >
          {workspaceView !== 'open-files' ? (
            <DashboardSidebar
              isSidebarOpen={isSidebarOpen}
              onToggle={() => dispatch(toggleSidebar())}
            />
          ) : null}

          {workspaceView === 'open-files' ? (
            <OpenFilesWorkspace fileTree={fileTree} />
          ) : (
            <DashboardOverview
              quickActions={quickActions}
              closings={closings}
              requisitions={requisitions}
              calendarDays={calendarDays}
              onOpenFiles={() => dispatch(setWorkspaceView('open-files'))}
            />
          )}
        </div>
      </div>
    </main>
  )
}
