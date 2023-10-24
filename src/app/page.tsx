import Link from 'next/link';
import React from 'react';
import style from './style.module.css'

//API키
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

//비동기 함수
const getCurrentWeather = async () => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Seoul&aqi=no`
  );
  return res.json();
}

export default async function Home() {
  const res = await getCurrentWeather();
  console.log(res);
  return (
    <div>
      <h1 className={style.namecolor}>main</h1>
      <ul className={style.list}>
        <li><Link href="/seoul">서울</Link></li>
        <li><Link href="/newyork">뉴욕</Link></li>
        <li><Link href="/london">런던</Link></li>
      </ul>
    </div>
  );
}

