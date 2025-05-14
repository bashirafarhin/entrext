import React from 'react';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

const products = [
  { title: 'Knowx', description: "Matches you with students who can help you study the subjects you're stuck on." },
  { title: 'Friendsin', description: 'Dare game where you and your friends complete monthly challenges to win a big trip at the end of the year.' },
  { title: 'SecretSanta', description: 'Friends anonymously suggest and vote on the perfect present while pooling money.' },
  { title: 'Herth', description: 'Women sell their handmade goods and support each other globally.' },
  { title: 'Borrowd', description: "Platform to rent out your unused stuff or borrow what you need" },
  { title: 'Leaderbase', description: "Startups hire experienced tech executives by the hour for guidance." },
];

const OurProducts = () => {
  const rows = [];
  for (let i = 0; i < products.length; i += 3) {
    rows.push(products.slice(i, i + 3));
  }

  return (
    <div className="w-[80vw] mx-auto my-10">
      {rows.map((row, rowIndex) => (
        <motion.div
          key={rowIndex}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, x: 45, y: 45, rotate: 5 }}
          whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {row.map((product, idx) => (
            <ProductCard key={idx} title={product.title} description={product.description} />
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default OurProducts;
