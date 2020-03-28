const getLocation = () => {
  //function that retrieves the position
  const showPosition = position => {
    return {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    };
  };

  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geo Location not supported");
  }
};

export default getLocation;
