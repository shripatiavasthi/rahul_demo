import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import OpenFilesWorkspace from '../components/dashboard/OpenFilesWorkspace'
import DashboardTopbar from '../components/dashboard/DashboardTopbar'
import { setTheme } from '../store/dashboardSlice'

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

export default function OpenFiles() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const theme = useSelector((state) => state.dashboard.theme)

  return (
    <main className={`dashboard-shell dashboard-shell--${theme}`.trim()}>
      <div className="dashboard-frame">
        <DashboardTopbar
          theme={theme}
          onThemeChange={(nextTheme) => dispatch(setTheme(nextTheme))}
        />

        <div className="dashboard-layout dashboard-layout--open-files">
          <OpenFilesWorkspace
            fileTree={fileTree}
            onGoHome={() => navigate('/home')}
          />
        </div>
      </div>
    </main>
  )
}
