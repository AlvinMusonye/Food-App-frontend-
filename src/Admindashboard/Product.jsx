import { useState } from "react"
import { Link } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !image) {
      alert("Please fill in all fields");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      price,
      image: preview,
    };

    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
    setImage(null);
    setPreview(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 dark:bg-dark-contrast">
     <Link to='/admin-dashboard'><button className="border bg-orange-500 ">Go back</button></Link>
      <h1 className="text-3xl font-bold mb-6 text-orange-500 text-center">Add Food Product</h1>

      <form onSubmit={handleSubmit} className="bg-white dark:text-gray-100 dark:bg-dark-contrast p-6 rounded shadow-md max-w-md mx-auto mb-10">
        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. Pizza"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. 10.99"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium dark:text-gray-100">Picture</label>
          <input  type="file" accept="image/*" className=" hover:bg-orange-400 border" onChange={handleImageChange} />
          {preview && <img src={preview} alt="Preview" className="mt-3 h-24 rounded object-cover" />}
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700"
        >
          Add Product
        </button>
      </form>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-orange-500">Food Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow">
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover rounded mb-3"
              />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600">ksh{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
