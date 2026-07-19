interface HeaderProps {
  title: string;
  lead: string;
}
 
export function Header({ title, lead }: HeaderProps) {
  return (
    <header className="circure-page-header">
      <div className="container">
        <h1 className="circure-page-title">{title}</h1>
        {lead && <p className="circure-page-lead">{lead}</p>}
      </div>
    </header>
  );
}
