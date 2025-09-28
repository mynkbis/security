const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Our Services",
      path: "/services",
      dropdown: [
        { name: "Security Guards", path: "/services/guards" },
        { name: "Crowd Control", path: "/services/crowd-control" },
        { name: "Mobile Patrol", path: "/services/mobile-patrol" },
        { name: "Infra Security", path: "/services/infra-security" },
        { name: "Retail Security", path: "/services/retail-security" },
      ],
    },
    { name: "Contact Us", path: "/contactus" },
  ];

  export default menuItems