import React, { useState } from 'react';
import { Search, Filter, Grid, List, Heart, ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Vintage Denim Jacket',
    price: 45,
    originalPrice: 120,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    condition: 'Excellent',
    size: 'M',
    brand: 'Levi\'s',
    seller: 'Sarah M.',
    location: 'New York, NY'
  },
  {
    id: 2,
    name: 'Designer Handbag',
    price: 89,
    originalPrice: 250,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    condition: 'Very Good',
    size: 'One Size',
    brand: 'Coach',
    seller: 'Emma K.',
    location: 'Los Angeles, CA'
  },
  {
    id: 3,
    name: 'Silk Blouse',
    price: 32,
    originalPrice: 85,
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    condition: 'Good',
    size: 'S',
    brand: 'Zara',
    seller: 'Lisa R.',
    location: 'Chicago, IL'
  },
  {
    id: 4,
    name: 'Leather Boots',
    price: 67,
    originalPrice: 180,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    condition: 'Excellent',
    size: '8',
    brand: 'Dr. Martens',
    seller: 'Mike T.',
    location: 'Seattle, WA'
  },
  {
    id: 5,
    name: 'Cashmere Sweater',
    price: 55,
    originalPrice: 150,
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    condition: 'Very Good',
    size: 'L',
    brand: 'Uniqlo',
    seller: 'Anna P.',
    location: 'Boston, MA'
  },
  {
    id: 6,
    name: 'Vintage Watch',
    price: 120,
    originalPrice: 300,
    image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    condition: 'Excellent',
    size: 'One Size',
    brand: 'Seiko',
    seller: 'David L.',
    location: 'Miami, FL'
  }
];

const categories = ['All', 'Women\'s Clothing', 'Men\'s Clothing', 'Shoes', 'Accessories', 'Bags'];
const conditions = ['All', 'Excellent', 'Very Good', 'Good', 'Fair'];
const sizes = ['All', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

const Marketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCondition, setSelectedCondition] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || true; // Simplified for demo
    const matchesCondition = selectedCondition === 'All' || product.condition === selectedCondition;
    const matchesSize = selectedSize === 'All' || product.size === selectedSize;

    return matchesSearch && matchesCategory && matchesCondition && matchesSize;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Marketplace</h1>
          <p className="text-gray-600">Discover unique pre-loved fashion items</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for items, brands, or sellers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Filter className="h-5 w-5" />
              Filters
            </button>

            {/* View Mode Toggle */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className={`mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 ${showFilters ? 'block' : 'hidden lg:grid'}`}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
              <select
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {conditions.map(condition => (
                  <option key={condition} value={condition}>{condition}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} items
          </p>
        </div>

        {/* Products Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                    <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
                  </button>
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full text-white bg-gradient-to-r from-purple-600 to-pink-500">
                      {product.condition}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.brand} • Size {product.size}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-purple-600">${product.price}</span>
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 mb-3">Sold by {product.seller} in {product.location}</p>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all flex items-center justify-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <div className="flex gap-6">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="absolute -top-2 -right-2">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full text-white bg-gradient-to-r from-purple-600 to-pink-500">
                        {product.condition}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                        <p className="text-gray-600 mb-2">{product.brand} • Size {product.size}</p>
                        <p className="text-sm text-gray-500">Sold by {product.seller} in {product.location}</p>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xl font-bold text-purple-600">${product.price}</span>
                          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        </div>
                        
                        <div className="flex gap-2">
                          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            <Heart className="h-4 w-4 text-gray-600" />
                          </button>
                          <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all flex items-center gap-2">
                            <ShoppingBag className="h-4 w-4" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;