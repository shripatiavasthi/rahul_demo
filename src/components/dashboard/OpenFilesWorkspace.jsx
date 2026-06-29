import DashboardIcon from './DashboardIcon'

export default function OpenFilesWorkspace({ fileTree, onGoHome }) {
  return (
    <section className="dashboard-open-files">
      <header className="dashboard-open-files__toolbar">
        <div className="dashboard-open-files__toolbar-left">
          <button
            type="button"
            className="dashboard-open-files__home-button"
            aria-label="Go to dashboard home"
            onClick={onGoHome}
          >
            <DashboardIcon name="home" />
          </button>
          <button type="button" className="dashboard-open-files__add-button">
            <DashboardIcon name="plus-circle" />
            <span>Add New</span>
          </button>
          <div className="dashboard-open-files__tabs">
            <button type="button" className="dashboard-open-files__tab dashboard-open-files__tab--active">
              <span>File Name Here</span>
              <DashboardIcon name="close" />
            </button>
            <button type="button" className="dashboard-open-files__tab">
              <span>File Name Here</span>
              <DashboardIcon name="close" />
            </button>
          </div>
        </div>

        <div className="dashboard-open-files__toolbar-right">
          <label className="dashboard-open-files__search">
            <DashboardIcon name="search" />
            <input type="search" placeholder="Search from existing files..." />
          </label>
          <button type="button" className="dashboard-open-files__save-button">
            <DashboardIcon name="save" />
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
                  <DashboardIcon name="folder" />
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
                      <DashboardIcon name={item.icon} />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button type="button" className="dashboard-open-files__tree-parent" key={section.label}>
                <DashboardIcon name={section.icon} />
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
                <DashboardIcon name="chevron-right" className="dashboard-open-files__field-icon dashboard-open-files__field-icon--down" />
              </label>
              <label className="dashboard-open-files__field dashboard-open-files__field--select">
                <input type="text" placeholder="File Status" />
                <DashboardIcon name="chevron-right" className="dashboard-open-files__field-icon dashboard-open-files__field-icon--down" />
              </label>
              <label className="dashboard-open-files__field">
                <input type="text" placeholder="File no." />
              </label>
              <label className="dashboard-open-files__field">
                <input type="text" placeholder="Teraview file no." />
              </label>

              <label className="dashboard-open-files__field">
                <input type="text" placeholder="Conflict Search date" />
                <DashboardIcon name="calendar" className="dashboard-open-files__field-icon" />
              </label>
              <label className="dashboard-open-files__field dashboard-open-files__field--select">
                <input type="text" placeholder="Acting for" />
                <DashboardIcon name="chevron-right" className="dashboard-open-files__field-icon dashboard-open-files__field-icon--down" />
              </label>
              <label className="dashboard-open-files__field dashboard-open-files__field--select">
                <input type="text" placeholder="Barrister & Solicitor Name" />
                <DashboardIcon name="chevron-right" className="dashboard-open-files__field-icon dashboard-open-files__field-icon--down" />
              </label>
              <label className="dashboard-open-files__field dashboard-open-files__field--select">
                <input type="text" placeholder="Clerk Name" />
                <DashboardIcon name="chevron-right" className="dashboard-open-files__field-icon dashboard-open-files__field-icon--down" />
              </label>

              <label className="dashboard-open-files__field dashboard-open-files__field--select">
                <input type="text" placeholder="Witness/Notary Name" />
                <DashboardIcon name="chevron-right" className="dashboard-open-files__field-icon dashboard-open-files__field-icon--down" />
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
