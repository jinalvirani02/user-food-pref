import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Foods() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch('/api/foods')
      .then(res => res.json())
      .then(data => setFoods(data));
  }, []);

  return (
    <div>
      <h1>Food List</h1>
      <ul>
        {foods.map(food => (
          <li key={food.id}>
            <Link href={`/foods/${food.id}`}>{food.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}