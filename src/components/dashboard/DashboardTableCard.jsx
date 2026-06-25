import DashboardIcon from './DashboardIcon'

export default function DashboardTableCard({ title, count, rows }) {
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
                  <DashboardIcon name="document" />
                </span>
                <span>{row.fileName}</span>
              </div>
              <span role="cell">{row.number}</span>
              <span role="cell">{row.type}</span>
              <button type="button" className="dashboard-table__action" aria-label={`Open ${row.fileName}`}>
                <DashboardIcon name="arrow" />
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
