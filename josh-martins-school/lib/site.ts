export const siteConfig = {
  name: 'JOSH-MARTINS SCHOOL',
  motto: 'GOD IS OUR STRENGTH',
  address: '7 Dende Sotowa Street, Olisado Malalu, Laketu Ikorodu, Lagos, Nigeria',
  phone: '+234 000 000 0000',
  email: 'info@josh-martinsschool.ng',
  social: {
    facebook: '#',
    instagram: '#',
    x: '#',
    youtube: '#',
  },
  nav: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/academics', label: 'Academics' },
    { href: '/student-life', label: 'Student Life' },
    { href: '/facilities', label: 'Facilities' },
    { href: '/news', label: 'News & Events' },
    { href: '/contact', label: 'Contact' },
  ],
  quickLinks: [
    { href: '/admissions/apply', label: 'Apply Now' },
    { href: '/admissions/fees', label: 'School Fees' },
    { href: '/academics/calendar', label: 'Academic Calendar' },
    { href: '/students/portal', label: 'Student Portal' },
    { href: '/contact', label: 'Contact & Directions' },
  ],
};

export type NavItem = { href: string; label: string };