const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Our Services",
      path: "/services",
      dropdown: [
        { name: "Help", path: "/services/help" },
        { name: "Support", path: "/services/support" },
        { name: "Given", path: "/services/given" },
      ],
    },
    { name: "Contact Us", path: "/contactus" },
    { name: "Join Us", path: "/join-us" },
  ];

  export default menuItems