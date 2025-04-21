import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function FoodDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [food, setFood] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/foods/${id}`)
        .then(res => res.json())
        .then(data => setFood(data));
    }
  }, [id]);

  if (!food) return <p>Loading...</p>;

  return (
    <div>
      <h1>{food.name}</h1>
      <p>{food.description}</p>
    </div>
  );
}