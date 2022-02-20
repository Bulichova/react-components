export function List({ children, className }) {
  return <ul className={className}>{children}</ul>
}
List.defaultProps = {
  className: 'active',
}
