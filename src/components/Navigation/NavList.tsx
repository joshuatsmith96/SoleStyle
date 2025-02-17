import { Link } from "react-router";

export default function NavList() {
  return (
    <>
      <Link to="/category/new arrivals">New Arrivals</Link>
      <Link to="/category/men">Men</Link>
      <Link to="/category/women">Women</Link>
      <Link to="/category/children">Children</Link>
      <Link to="/category/infant">Infant</Link>
      <Link to="/category/sale">Sale</Link>
    </>
  );
}
