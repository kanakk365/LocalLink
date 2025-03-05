import React, { useEffect, useRef } from "react";

interface RouteMapProps {
  startLocation: string;
  endLocation: string;
}

const RouteMap: React.FC<RouteMapProps> = ({ startLocation, endLocation }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // In a real app, this would use the Google Maps or Mapbox API
    // For now, we'll create a more visual mock implementation
    if (mapRef.current) {
      const mapElement = mapRef.current;
      mapElement.innerHTML = ''; // Clear previous content
      
      // Create a visual representation of the route
      const mapContainer = document.createElement('div');
      mapContainer.className = 'relative w-full h-full';
      
      // Start point
      const startPoint = document.createElement('div');
      startPoint.className = 'absolute top-1/4 left-1/4 w-3 h-3 bg-green-500 rounded-full';
      startPoint.setAttribute('title', startLocation);
      
      // Start label
      const startLabel = document.createElement('div');
      startLabel.className = 'absolute top-1/4 left-1/4 ml-4 -mt-1 text-xs font-medium';
      startLabel.textContent = startLocation;
      
      // End point
      const endPoint = document.createElement('div');
      endPoint.className = 'absolute bottom-1/4 right-1/4 w-3 h-3 bg-red-500 rounded-full';
      endPoint.setAttribute('title', endLocation);
      
      // End label
      const endLabel = document.createElement('div');
      endLabel.className = 'absolute bottom-1/4 right-1/4 ml-4 -mt-1 text-xs font-medium';
      endLabel.textContent = endLocation;
      
      // Path between points (with a slight curve)
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('class', 'absolute inset-0 w-full h-full z-0');
      
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const startX = '25%';
      const startY = '25%';
      const endX = '75%';
      const endY = '75%';
      const controlX1 = '60%';
      const controlY1 = '20%';
      const controlX2 = '40%';
      const controlY2 = '80%';
      
      path.setAttribute('d', `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`);
      path.setAttribute('stroke', '#3B82F6');
      path.setAttribute('stroke-width', '2');
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-dasharray', '5,5');
      
      svg.appendChild(path);
      mapContainer.appendChild(svg);
      mapContainer.appendChild(startPoint);
      mapContainer.appendChild(startLabel);
      mapContainer.appendChild(endPoint);
      mapContainer.appendChild(endLabel);
      
      mapElement.appendChild(mapContainer);
    }
  }, [startLocation, endLocation]);

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden">
      <div className="flex justify-between items-center bg-gray-200 px-4 py-2">
        <div className="text-sm font-medium">Route Details</div>
        <div className="text-xs text-gray-500">Interactive map (placeholder)</div>
      </div>
      <div 
        ref={mapRef} 
        className="h-48 w-full bg-white relative"
        style={{
          backgroundImage: 'url("https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-s-a+285A98(' + 
            encodeURIComponent(startLocation) + 
            '),pin-s-b+c72641(' + 
            encodeURIComponent(endLocation) + 
            ')/auto/500x250?access_token=YOUR_MAPBOX_TOKEN")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Map will be rendered here */}
      </div>
      <div className="p-3 bg-white border-t border-gray-200">
        <div className="flex items-center text-sm">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
            <span className="font-medium">{startLocation}</span>
          </div>
          <span className="mx-2 text-gray-400">→</span>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
            <span className="font-medium">{endLocation}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteMap;
