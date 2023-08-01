import React, { useEffect, useState } from 'react';

export default function DataFromServer() {
  interface Boredapi {
    activity: string;
    type: string;
    participants: number;
    price: number;
    link: string;
    key: string;
    accessibility: number;
  }

  const initialValue: Boredapi = {
    activity: '',
    type: '',
    participants: 0,
    price: 0,
    link: '',
    key: '',
    accessibility: 0,
  };

  const [boredapi, setBoredapi] = useState<Boredapi>(initialValue);

  useEffect(() => {
    async function getBoredapi(): Promise<void> {
        const res: Response = await fetch('https://www.boredapi.com/api/activity');
        const bor: Boredapi = await res.json();
        setBoredapi(bor);
    }
    getBoredapi();

  }, []);

  return (
    <div>
      <p> {boredapi.activity} </p>
      <p>{boredapi.type} </p>
      <p>{boredapi.participants} </p>
      <p>{boredapi.price} </p>
      <p>{boredapi.link} </p>
      <p>{boredapi.key} </p>
      <p>{boredapi.accessibility} </p>
    </div>
  );
}
