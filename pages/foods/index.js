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

export async function getServerSideProps(context) {
  const protocol = context.req.headers['x-forwarded-proto'] || 'http';
  const host = context.req.headers.host;
  const baseUrl = `${protocol}://${host}`;
  console.log(baseUrl, "baseUrl")
  const res = await fetch(`${baseUrl}/api/foods`);
  const data = await res.json();

  return {
    props: {
      foods: data
    }
  };
}
