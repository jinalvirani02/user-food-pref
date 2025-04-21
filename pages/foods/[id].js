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

  try {
    const res = await fetch(`http://localhost:3000/api/foods/${id}`);
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
