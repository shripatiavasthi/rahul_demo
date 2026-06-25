export default function DashboardBrandMark() {
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
