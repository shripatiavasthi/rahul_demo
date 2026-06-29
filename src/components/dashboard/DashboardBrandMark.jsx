import dashboardLogo from '../../assets/dashboardLogo.png'

export default function DashboardBrandMark() {
  return (
    <span className="dashboard-brand" aria-label="Logo">
      <img className="dashboard-brand__mark" src={dashboardLogo} alt="" aria-hidden="true" />
      <span className="dashboard-brand__text">Logo</span>
    </span>
  )
}
