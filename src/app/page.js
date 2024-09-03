import Counter from "@/components/Counter/Counter";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 5,
    },
  });

  
  const data = await res.json();
  return (
    <div className="grid grid-cols-4 gap-5 h-screen">
      {data.map(({ id, title, price, description }) => (
        <div key={id} className="border border-gray-500 px-5 py-2">
          <h1 className="text-lg font-bold">{title}</h1>
          <h3 className="bg-green-500 text-white px-5 py-2 rounded-md my-5">
            {price}
          </h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
