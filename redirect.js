(() => {
  const destination = new URL(
    'https://lucem-mac-mini-server.tailbd9f6c.ts.net:8443/'
  );

  destination.pathname = window.location.pathname;
  destination.search = window.location.search;
  destination.hash = window.location.hash;
  window.location.replace(destination.toString());
})();
