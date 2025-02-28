import React, { useEffect, useState } from "react";
import Loader2 from '../utils/loader2';
import './media.scss';

const videos = [
    "https://vk.com/video_ext.php?oid=-16692293&id=456239199&js_api=1",
    "https://vk.com/video_ext.php?oid=-16692293&id=456239208&js_api=1",
    // "тут вставляем ссылку на видео в формате https://vk.com/video_ext.php?oid=-номер&id=номер&js_api=1",
];

const videosWidth = () => {
    if(window.innerWidth <= 767) {
        return 426;
    } else if (window.innerWidth >= 767 && window.innerWidth <= 1023) {
        return 640;
    } else {
        return 640;
    }
}

const videosHeight = () => {
    if(window.innerWidth <= 767) {
        return 240;
    } else if (window.innerWidth >= 767 && window.innerWidth <= 1023) {
        return 360;
    } else {
        return 360;
    }
}

const Media = () => {
    const [loaded, setLoaded] = useState({}); // Храним статус по индексу

    const loadVKScript = () => {
        return new Promise((resolve, reject) => {
            const scriptId = "vk_api_script";
            if (document.getElementById(scriptId)) {
                resolve(); // Скрипт уже загружен
            } else {
                const script = document.createElement("script");
                script.id = scriptId;
                script.src = "https://vk.com/js/api/videoplayer.js";
                script.async = true;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error("Failed to load VK API"));
                document.body.appendChild(script);
            }
        });
    };

    useEffect(() => {
        loadVKScript().then(() => {
            console.log("VK API script loaded");
        });
    }, []);

    const handleVideoInit = (index, iframe) => {
        const tryInitPlayer = () => {
            if (window.VK && window.VK.VideoPlayer) {
                const player = new window.VK.VideoPlayer(iframe);
                player.on("inited", () => {
                    setLoaded((prev) => ({ ...prev, [index]: true }));
                });
            } else {
                setTimeout(tryInitPlayer, 200);
            }
        };
        tryInitPlayer();
    };

    return (
        <div className="media_container">
            <div className="video_container">
                {videos.map((videoUrl, index) => (
                    <div className="videos_vk" key={index}>
                        {!loaded[index] && 
                        <div className="loader_vids">
                            <Loader2 />
                        </div>
                        }
                        <iframe
                            src={videoUrl}
                            width={videosWidth()}
                            height={videosHeight()}
                            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                            frameBorder="0"
                            allowFullScreen
                            title={`video${index + 1}`}
                            onLoad={(e) => handleVideoInit(index, e.target)}
                            className={loaded[index] ? "video-loaded" : "video-hidden"}
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Media;
