import { Link } from "react-router-dom";

export default function Button({ to, href, variant = "primary", children, ...props }) {
  const cls = variant === "primary" ? "btn-primary" : "btn-outline";
  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...props}>{children}</a>;
  return <button className={cls} {...props}>{children}</button>;
}