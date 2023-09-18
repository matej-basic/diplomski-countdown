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

  const responsiveTextLarge = "3xl:text-12xl 2xl:text-10xl xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-4xl"
  const responsiveTextSmall = "3xl:text-5xl 2xl:text-4xl xl:text-3xl md:text-2xl sm:text-xl"

  if (isLoading) return <div className={"flex break-keep h-screen w-screen justify-center items-center align-middle" + responsiveTextLarge}>SPREMI SE</div>
  return (
  <div className="w-full h-screen flex items-center justify-center">
    {obranaTime ? (
      <div className={"flex break-keep text-center align-middle" + responsiveTextLarge}>PRIPREMI LOVU ZA SLJEDECU GODINU</div>
    ) : (
      <div className="grid sm:grid-flow-col grid-flow-row gap-5 text-center sm:auto-cols-max auto-rows-auto">
        <div className={"flex flex-col items-center" + responsiveTextSmall}>
          <span className={"countdown font-mono" + responsiveTextLarge}>
            {/* @ts-ignore */}
            <span style={{"--value":days}}></span>
          </span>
          days
        </div> 
        <div className={"flex flex-col items-center" + responsiveTextSmall}>
          <span className={"countdown font-mono" + responsiveTextLarge}>
            {/* @ts-ignore */}
            <span style={{"--value":hours}}></span>
          </span>
          hours
        </div> 
        <div className={"flex flex-col items-center" + responsiveTextSmall}>
          <span className={"countdown font-mono" + responsiveTextLarge}>
            {/* @ts-ignore */}
            <span style={{"--value":minutes}}></span>
          </span>
          min
        </div> 
        <div className={"flex flex-col items-center" + responsiveTextSmall}>
          <span className={"countdown font-mono" + responsiveTextLarge}>
            {/* @ts-ignore */}
            <span style={{"--value":seconds}}></span>
          </span>
          sec
        </div>
      </div>
    )}
  </div>
  )
}
