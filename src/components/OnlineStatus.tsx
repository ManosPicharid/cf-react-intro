import { useEffect, useState } from "react";

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handler = () => setIsOnline(navigator.onLine);
    const pollingId: number = setInterval(handler, 5000);

    window.addEventListener("online", handler);
    window.addEventListener("offline", handler);

    return () => {
      window.removeEventListener("online", handler);
      window.removeEventListener("offline", handler);
      clearInterval(pollingId);
    };
  }, []);

  return (
    <>
      <div className={`text-white text-center mt-12 mx-4 p-4 rounded 
          ${isOnline ? "bg-green-500" : "bg-cf-dark-red"}`}>
        You are {isOnline ? "Online" : "Offline"}!
      </div>
    </>
  );
};

export default OnlineStatus;
