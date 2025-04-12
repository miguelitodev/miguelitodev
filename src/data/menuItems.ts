export const menuItems = [
  { label: "Home", href: "/" },
  { label: "Repositories", href: "/repositories" },
  { label: "Experiences", href: "/experiences" },
  { label: "Technologies", href: "/technologies" },
  { label: "Blog", href: "/blog" },
].sort((a, b) => a.label.localeCompare(b.label));
