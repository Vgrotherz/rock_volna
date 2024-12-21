import React, { useEffect, useRef } from "react";

import './about.scss';

const About = () => {

    const mapRef = useRef(null);

    useEffect(() => {
        const loadGoogleMapsScript = () => {
        return new Promise((resolve, reject) => {
            if (window.google && window.google.maps) {
            resolve();
            return;
            }

            const script = document.createElement("script");
            const params = new URLSearchParams({
            key: "AIzaSyACS5PzmLoxQQSIXBazKwtrnl-EUzykZ-g",
            v: "weekly",
            callback: "initMap",
            });
            script.src = `https://maps.googleapis.com/maps/api/js?${params}`;
            script.async = true;
            script.onerror = () => reject("Не удалось загрузить Google Maps API");
            document.head.appendChild(script);

            script.onload = () => resolve();
        });
        };

        /* global google */

        const initMap = async () => {
        try {
            await loadGoogleMapsScript();
            const { Map } = await window.google.maps.importLibrary("maps");

            new Map(mapRef.current, {
            center: { lat: 56.003479, lng: 92.937137 },
            // 56.003479, 92.937137
            zoom: 8,
            });
        } catch (error) {
            console.error(error);
        }
        };

        initMap();
    }, []);

    return (
        <div className="google-map-container">
        <div id="map" ref={mapRef} />
        </div>
    );
};

export default About;