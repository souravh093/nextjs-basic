import React from "react";

const AllShoesPage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div>
      <h1 className="text-center text-4xl my-5 bg-gray-200 py-2 font-black uppercase">
        All Shoes
      </h1>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map(({ title, id, price, description }) => (
          <div key={id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {title}
                <div className="badge badge-secondary">{price}</div>
              </h2>
              <p>{description}</p>
              <div className="card-actions justify-end">
                <div className="btn btn-primary">Buy Now</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllShoesPage;
