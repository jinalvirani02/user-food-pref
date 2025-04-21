// pages/foods/[id].js
export default function FoodDetail({ food }) {
  if (!food) return <p>Food not found.</p>;

  return (
    <div>
      <h1>{food.name}</h1>
      <p>{food.description}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const protocol = context.req.headers['x-forwarded-proto'] || 'http';
  const host = context.req.headers.host;
  const baseUrl = `${protocol}://${host}`;

  try {
    const res = await fetch(`${baseUrl}/api/foods/${id}`);
    const food = await res.json();

    if (!res.ok) {
      throw new Error('Failed to fetch');
    }

    return {
      props: {
        food,
      },
    };
  } catch (err) {
    console.error("Error fetching food:", err);

    return {
      props: {
        food: null,
      },
    };
  }
}
