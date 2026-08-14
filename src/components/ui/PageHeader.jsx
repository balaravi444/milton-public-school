import './PageHeader.css';

function PageHeader({ title, breadcrumb }) {
  return (
    <div className="page-header">
      <div className="container page-header-content">
        <h1>{title}</h1>
        <div className="breadcrumb">
          <span>Home</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{breadcrumb || title}</span>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="header-decoration left"></div>
      <div className="header-decoration right"></div>
    </div>
  );
}

export default PageHeader;
