import { Product } from "@/data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const whatsappNumber = "201021732703"; // ← غيّر لرقمك

  return (
    <div className="bg-white rounded-xl border shadow-sm p-6 flex flex-col hover:shadow-md transition">
      <h3 className="text-lg font-bold mb-2 text-gray-900">
        {product.title}
      </h3>

      <p className="text-gray-600 text-sm mb-4 flex-grow">
        {product.description}
      </p>

      <div className="flex items-center justify-between mt-4">
        <span className="font-bold text-green-600 text-lg">
          {product.price} {product.currency}
        </span>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            product.whatsappText
          )}`}
          target="_blank"
          className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition"
        >
          اطلب عبر واتساب
        </a>
      </div>
    </div>
  );
}
