import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/Navbar';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все товары' },
    { id: 'small', name: 'Малые пакеты' },
    { id: 'medium', name: 'Средние пакеты' },
    { id: 'large', name: 'Большие пакеты' },
    { id: 'premium', name: 'Премиум пакеты' }
  ];

  const products = [
    { id: 1, uc: '60 UC', price: '₽99', originalPrice: null, category: 'small', rating: 4.9, sales: 1250, seller: 'ProGamer', sellerRating: 4.8, discount: null },
    { id: 2, uc: '120 UC', price: '₽189', originalPrice: '₽199', category: 'small', rating: 4.8, sales: 980, seller: 'UCMaster', sellerRating: 4.9, discount: '5%' },
    { id: 3, uc: '325 UC', price: '₽499', originalPrice: '₽549', category: 'medium', rating: 4.9, sales: 2100, seller: 'GameShop', sellerRating: 5.0, discount: '10%' },
    { id: 4, uc: '660 UC', price: '₽999', originalPrice: '₽1149', category: 'medium', rating: 4.7, sales: 1560, seller: 'ProGamer', sellerRating: 4.8, discount: '15%' },
    { id: 5, uc: '1800 UC', price: '₽2499', originalPrice: '₽2999', category: 'large', rating: 4.9, sales: 890, seller: 'UCMaster', sellerRating: 4.9, discount: '20%' },
    { id: 6, uc: '3850 UC', price: '₽4999', originalPrice: '₽5999', category: 'large', rating: 4.8, sales: 650, seller: 'GameShop', sellerRating: 5.0, discount: '17%' },
    { id: 7, uc: '8100 UC', price: '₽9999', originalPrice: '₽11999', category: 'premium', rating: 5.0, sales: 320, seller: 'EliteUC', sellerRating: 4.9, discount: '25%' },
    { id: 8, uc: '16200 UC', price: '₽19999', originalPrice: '₽23999', category: 'premium', rating: 4.9, sales: 150, seller: 'EliteUC', sellerRating: 4.9, discount: '20%' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Каталог UC пакетов</h1>
          <p className="text-muted-foreground text-lg">Выберите нужный пакет UC для PUBG Mobile</p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className="mb-2"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="relative transition-transform hover:scale-105 group">
              {product.discount && (
                <div className="absolute -top-2 -right-2 z-10">
                  <Badge variant="destructive" className="font-bold">
                    -{product.discount}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4">
                  <img 
                    src="/img/900aacb0-b3e6-45f7-863d-6c0b39ff394e.jpg" 
                    alt="UC" 
                    className="w-20 h-20 object-cover rounded-full"
                  />
                </div>
                <CardTitle className="text-2xl font-bold">{product.uc}</CardTitle>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Рейтинг:</span>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                      <span className="font-medium">{product.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Продано:</span>
                    <span className="font-medium">{product.sales}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Продавец:</span>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">{product.seller}</span>
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={12} className="text-green-400 fill-current" />
                        <span className="text-xs text-green-600">{product.sellerRating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Button className="w-full" size="lg">
                    <Icon name="Zap" size={16} className="mr-2" />
                    Купить сейчас
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Icon name="Heart" size={14} className="mr-2" />
                      В избранное
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Icon name="Share2" size={14} className="mr-2" />
                      Поделиться
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Не нашли нужный пакет?</h2>
          <p className="text-muted-foreground mb-6">
            Свяжитесь с нашей поддержкой, и мы поможем подобрать индивидуальное предложение
          </p>
          <Button size="lg">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Связаться с поддержкой
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;