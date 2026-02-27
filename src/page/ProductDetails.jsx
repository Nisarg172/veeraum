import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Maximize2, Box, Info } from "lucide-react";
import productsData from "../data/products.json";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product)
    return (
      <div className="py-40 text-center text-slate-500 bg-[#0f1115]">
        Project Not Found
      </div>
    );

  const brandGold = "#F6C553";

  return (
    <div className="bg-[#0f1115] min-h-screen text-white font-sans">
      <main className="max-w-[1600px] mx-auto px-4 md:px-10 pt-28 md:pt-36 pb-20">
        <div className="flex justify-between items-end mb-8 border-b border-white/5 pb-6">
          <div className="space-y-2">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-slate-500 hover:text-[#F6C553] transition-colors text-[10px] uppercase tracking-[0.3em] font-bold"
            >
              <ArrowLeft size={14} /> Back
            </button>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">
              {product.title}
            </h1>
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 md:row-span-2 relative overflow-hidden bg-slate-900">
            <img
              src={`/${product.image}`}
              alt={product.title}
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
          </div>

          {product.gallery && product.gallery[0] && (
            <div className="md:col-span-4 h-[300px] md:h-auto relative overflow-hidden bg-slate-900">
              <img
                src={`/${product.gallery[0]}`}
                alt="Gallery 1"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
            </div>
          )}

          {product.gallery &&
            product.gallery.slice(1).map((img, index) => (
              <div
                key={index}
                className="md:col-span-6 h-[400px] relative overflow-hidden bg-slate-900"
              >
                <img
                  src={`/${img}`}
                  alt={`Gallery ${index + 2}`}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
              </div>
            ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-[9px] font-bold uppercase tracking-[0.4em] text-slate-600">
          <p>Veeraum Engineering Solutions © 2026</p>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
