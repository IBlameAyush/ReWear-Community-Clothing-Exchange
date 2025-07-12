import React from 'react';
import { Smartphone, Shirt, Home, Gamepad2, Book, Coffee } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  icon: React.ReactNode;
  count: number;
  color: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Electronics',
    icon: <Smartphone className="h-8 w-8" />,
    count: 1250,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    name: 'Fashion',
    icon: <Shirt className="h-8 w-8" />,
    count: 2100,
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 3,
    name: 'Home & Garden',
    icon: <Home className="h-8 w-8" />,
    count: 890,
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 4,
    name: 'Gaming',
    icon: <Gamepad2 className="h-8 w-8" />,
    count: 650,
    color: 'from-purple-500 to-violet-600'
  },
  {
    id: 5,
    name: 'Books',
    icon: <Book className="h-8 w-8" />,
    count: 1450,
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 6,
    name: 'Food & Beverage',
    icon: <Coffee className="h-8 w-8" />,
    count: 780,
    color: 'from-teal-500 to-cyan-600'
  }
];

const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing products across our wide range of categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {category.count.toLocaleString()} items
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;