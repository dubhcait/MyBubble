const getLocation = setGeoLocation => {
  //function that retrieves the position
  const showPosition = position => {
    const location = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    };
    setGeoLocation(location);
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geo Location not supported");
  }
};

export default getLocation;
