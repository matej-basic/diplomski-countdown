"use client";
import Head from "next/head";
import { useEffect, useState } from "react"


export default function Home() {

  const [obranaTime, setObranaTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("09/28/2023 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(days);

      const hours = Math.floor(
        (difference / (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      setHours(hours);

      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(minutes);

      const seconds = Math.floor((difference % (1000 * 60)) / 1000)
      setSeconds(seconds);

      if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
        setObranaTime(true);
      }
    }, 1000)

    return () => clearInterval(interval);
  }, [])

  return (
   <div className="container">
    <Head>
      <title>Diplomski countdown</title>
    </Head>

    {obranaTime ? (
      <h1>Spremi novce za sljedecu godinu</h1>
    ) : (
      <>

      <h2>Diplomski countdown</h2>
      <div className="timer-wrapper">
        <div className="timer-inner">
          <div className="timer-segment">
            <span className="time">{days}</span>
            <span className="label">Days</span>
          </div>
          <span className="divider">:</span>
          <div className="timer-segment">
            <span className="time">{hours}</span>
            <span className="label">Hours</span>
          </div>
          <span className="divider">:</span>
          <div className="timer-segment">
            <span className="time">{minutes}</span>
            <span className="label">Minutes</span>
          </div>
          <span className="divider">:</span>
          <div className="timer-segment">
            <span className="time">{seconds}</span>
            <span className="label">Seconds</span>
          </div>
        </div>
      </div>
      </>
    )}
   </div>
  )
}
