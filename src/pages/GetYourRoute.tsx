import { useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import  type { LatLngExpression } from "leaflet";

interface RouteStep {
  instruction: string;
  distance: number;
  duration: number;
}

const GetYourRoute = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [coordinates, setCoordinates] = useState<LatLngExpression[]>([]);
  const [steps, setSteps] = useState<RouteStep[]>([]);
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_ORS_API_KEY;

  const getCoordinates = async (place: string): Promise<[number, number] | null> => {
    try {
      const geoRes = await axios.get(`https://api.openrouteservice.org/geocode/search`, {
  params: {
    text: place,
    boundary_country: "LK" // Sri Lanka
  },
  headers: {
    Authorization: apiKey
  }
});

      const coords = geoRes.data.features[0]?.geometry.coordinates;
      return coords ? [coords[1], coords[0]] : null;
    } catch (err) {
      console.error("Error fetching geocode:", err);
      return null;
    }
  };

  const findRoute = async () => {
    if (!start || !end) return alert("Please enter both locations");

    setLoading(true);
    try {
      const startCoords = await getCoordinates(start);
      const endCoords = await getCoordinates(end);

      if (!startCoords || !endCoords) {
        alert("Could not find one or both locations.");
        setLoading(false);
        return;
      }

      const res = await axios.post(
        `https://api.openrouteservice.org/v2/directions/driving-car`,
        {
          coordinates: [
            [startCoords[1], startCoords[0]],
            [endCoords[1], endCoords[0]]
          ]
        },
        {
          headers: {
            Authorization: apiKey,
            "Content-Type": "application/json"
          }
        }
      );

      const route = res.data.features[0].geometry.coordinates.map(
        (c: number[]) => [c[1], c[0]]
      );
      const routeSteps = res.data.features[0].properties.segments[0].steps.map(
        (step: any) => ({
          instruction: step.instruction,
          distance: step.distance,
          duration: step.duration
        })
      );

      setCoordinates(route);
      setSteps(routeSteps);
    } catch (err) {
      console.error("Error fetching route:", err);
      alert("Failed to find route");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-5">ROUTE FINDER</h2>
      <div className="flex flex-wrap gap-3 mb-5">
        <input
          type="text"
          placeholder="Start Location"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="border rounded p-2 w-60"
        />
        <input
          type="text"
          placeholder="Destination"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="border rounded p-2 w-60"
        />
        <button
          onClick={findRoute}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Finding..." : "Find Route"}
        </button>
      </div>

      <div className="w-full h-[500px] mb-6">
        <MapContainer
          center={[7.8731, 80.7718]} // Sri Lanka center
          zoom={7}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {coordinates.length > 0 && (
            <>
              <Polyline positions={coordinates} color="blue" />
              <Marker position={coordinates[0]}>
                <Popup>Start: {start}</Popup>
              </Marker>
              <Marker position={coordinates[coordinates.length - 1]}>
                <Popup>End: {end}</Popup>
              </Marker>
            </>
          )}
        </MapContainer>
      </div>

      {steps.length > 0 && (
        <div className="bg-white p-4 rounded shadow-md w-full max-w-2xl">
          <h3 className="text-xl font-semibold mb-3">Step-by-step directions</h3>
          <ul className="list-decimal ml-5 text-gray-700">
            {steps.map((s, i) => (
              <li key={i} className="mb-2">
                {s.instruction} — <b>{(s.distance / 1000).toFixed(2)} km</b>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GetYourRoute;
