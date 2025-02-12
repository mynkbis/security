const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Our Services",
      path: "/services",
      dropdown: [
        { name: "Security Guards", path: "/services/help" },
        { name: "Crowd Control", path: "/services/support" },
        { name: "Mobile Patrol", path: "/services/given" },
        { name: "Infra Security", path: "/services/given" },
        { name: "Retail Security", path: "/services/given" },
      ],
    },
    { name: "Contact Us", path: "/contactus" },
  ];

  export default menuItems