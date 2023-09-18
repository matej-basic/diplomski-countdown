"use client";
import { useEffect, useState } from "react"


export default function Home() {

  const [isLoading, setLoading] = useState(true)

  const [obranaTime, setObranaTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("11/16/2023 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(days);

      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(hours);

      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(minutes);

      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(seconds);

      if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
        setObranaTime(true);
      }

    setLoading(false);
    }, 1000)
    return () => clearInterval(interval);
  }, [])

  if (isLoading) return <div className="container flex break-keep text-9xl">SPREMI SE</div>
  return (
  <div className="container">
    {obranaTime ? (
      <div className="container flex break-keep text-9xl">PRIPREMI LOVU ZA SLJEDECU GODINU</div>
    ) : (
      <>
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col text-3xl">
            <span className="countdown font-mono text-9xl">
              <span style={{"--value":days}}></span>
            </span>
            days
          </div> 
          <div className="flex flex-col text-3xl">
            <span className="countdown font-mono text-9xl">
              <span style={{"--value":hours}}></span>
            </span>
            hours
          </div> 
          <div className="flex flex-col text-3xl">
            <span className="countdown font-mono text-9xl">
              <span style={{"--value":minutes}}></span>
            </span>
            min
          </div> 
          <div className="flex flex-col text-3xl">
            <span className="countdown font-mono text-9xl">
              <span style={{"--value":seconds}}></span>
            </span>
            sec
          </div>
        </div>
      </>
    )}
  </div>
  )
}
