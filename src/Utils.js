const authentication = (username) => {
  return true;
};
const getNavbarRoutes = (routes) => {
  return routes.flatMap((route) => {
    const currentRoute = route.showInNavbar ? [route] : [];

    const childRoutes =
      route.children?.filter((child) => child.showInNavbar) ?? [];

    return [...currentRoute, ...childRoutes];
  });
};

export { authentication, getNavbarRoutes };
