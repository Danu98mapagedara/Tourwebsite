import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

const GetYourRoute = () => {
  const mapRef = useRef<L.Map | null>(null);
  const routingControlRef = useRef<any>(null);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  useEffect(() => {
    // Initialize map only once
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([7.8731, 80.7718], 7); // Center: Sri Lanka

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      }).addTo(mapRef.current);
    }
  }, []);

  // Function to convert place name -> coordinates using OpenStreetMap (Nominatim)
  const getCoordinates = async (place: string): Promise<[number, number] | null> => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          place + ", Sri Lanka"
        )}`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
      }
      return null;
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      return null;
    }
  };

  const handleFindRoute = async () => {
    if (!mapRef.current) return;
    if (!start || !end) {
      alert("Please enter both start and destination!");
      return;
    }

    const startCoords = await getCoordinates(start);
    const endCoords = await getCoordinates(end);

    if (!startCoords || !endCoords) {
      alert("Could not find one or both locations. Try again!");
      return;
    }

    // Remove previous route if exists
    if (routingControlRef.current) {
      mapRef.current.removeControl(routingControlRef.current);
    }

    // @ts-ignore - leaflet-routing-machine types missing
    routingControlRef.current = L.Routing.control({
      waypoints: [L.latLng(startCoords[0], startCoords[1]), L.latLng(endCoords[0], endCoords[1])],
      lineOptions: {
        styles: [{ color: "blue", weight: 5 }],
      },
      routeWhileDragging: false,
      show: false,
      addWaypoints: false,
    }).addTo(mapRef.current);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 mt-5">
      <h2 className="text-2xl font-semibold text-green-700">Find Your Route in Sri Lanka for Travelling</h2>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter Start Location"
          className="border rounded p-2 w-60"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Destination"
          className="border rounded p-2 w-60"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
        <button
          onClick={handleFindRoute}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Show Route
        </button>
      </div>

      <div id="map" style={{ height: "500px", width: "100%", borderRadius: "12px" }}></div>
    </div>
  );
};

export default GetYourRoute;
