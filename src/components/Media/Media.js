import React, { useEffect, useState } from "react";
import Loader2 from '../utils/loader2';
import "./media.scss";

const Media = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Добавляем VK API скрипт
      const scriptSrc = "https://vk.com/js/api/videoplayer.js";
      if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
        const script = document.createElement("script");
        script.src = scriptSrc;
        script.async = true;
        document.head.appendChild(script);
      }
  
      // Проверяем, доступен ли VK API
      const waitForVK = setInterval(() => {
        if (window.VK && window.VK.VideoPlayer) {
          clearInterval(waitForVK);
          initializePlayer();
        }
      }, 100);
  
      const initializePlayer = () => {
        console.log("VK.VideoPlayer доступен! Инициализация плеера...");
  
        const iframe = document.getElementById("vk_iframe");
        if (iframe) {
          const player = new window.VK.VideoPlayer(iframe);
  
          console.log("Плеер создан:", player);
  
          // Подписываемся на событие инициализации
          player.on("inited", () => {
            console.log("Плеер инициализирован!");
            setLoading(false);
          });
  
          // Обрабатываем ошибку
          player.on("error", (error) => {
            console.error("Ошибка инициализации плеера:", error);
            setLoading(false);
          });
  
          // Включаем таймер на случай, если `inited` не сработает
          setTimeout(() => {
            console.warn("Плеер не инициализировался за 5 секунд");
            setLoading(false);
          }, 5000);
        }
      };
  
      return () => clearInterval(waitForVK);
    }, []);
  
    return (
      <div>
        {loading ? (
          <div>Загрузка плеера...</div>
        ) : (
          <iframe
            id="vk_iframe"
            src="https://vk.com/video_ext.php?oid=-16692293&id=456239199&js_api=1"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            allowFullScreen
            title="VK Video"
          ></iframe>
        )}
      </div>
    );
  };
  
  export default Media;
  