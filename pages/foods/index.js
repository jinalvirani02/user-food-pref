// pages/foods.js
import Link from 'next/link';

export default function Foods({ foods }) {
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

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/foods');
  const data = await res.json();

  return {
    props: {
      foods: data
    }
  };
}
