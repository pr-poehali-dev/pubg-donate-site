import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [playerId, setPlayerId] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(null);

  const ucPackages = [
    { id: 1, amount: 60, price: 85, originalPrice: 99, discount: 15, popular: false },
    { id: 2, amount: 120, price: 169, originalPrice: 189, discount: 11, popular: false },
    { id: 3, amount: 325, price: 429, originalPrice: 499, discount: 14, popular: true },
    { id: 4, amount: 660, price: 849, originalPrice: 999, discount: 15, popular: false },
    { id: 5, amount: 1800, price: 2199, originalPrice: 2599, discount: 15, popular: false },
    { id: 6, amount: 3850, price: 4499, originalPrice: 5299, discount: 15, popular: false },
    { id: 7, amount: 8100, price: 8999, originalPrice: 10599, discount: 15, popular: false },
  ];

  const sellers = [
    { name: 'UC Master', rating: 4.9, sales: 15240, online: true },
    { name: 'Game Store', rating: 4.8, sales: 12450, online: true },
    { name: 'Pro UC', rating: 4.7, sales: 8930, online: true },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">UC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">UC STORE</h1>
                <p className="text-xs text-muted-foreground">PUBG Mobile UC</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Как купить</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Поддержка</a>
            </div>
            
            <Button size="sm" className="md:hidden">
              <Icon name="Menu" size={16} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: 'url(/img/ad3aff6d-245d-4337-8a0f-c0485bd205de.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Купи UC для <span className="text-primary">PUBG Mobile</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Быстрая доставка • Лучшие цены • Проверенные продавцы
            </p>
            
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">ID игрока</label>
                  <Input 
                    placeholder="Введите ваш ID"
                    value={playerId}
                    onChange={(e) => setPlayerId(e.target.value)}
                    className="bg-background/80"
                  />
                </div>
                <Button 
                  className="w-full" 
                  size="lg"
                  disabled={!playerId}
                >
                  <Icon name="Zap" size={20} className="mr-2" />
                  Начать покупку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UC Packages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Выберите пакет UC</h2>
            <p className="text-muted-foreground text-lg">Лучшие цены на рынке с мгновенной доставкой</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ucPackages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={`relative transition-all duration-300 hover:scale-105 cursor-pointer ${
                  pkg.popular ? 'ring-2 ring-primary shadow-lg shadow-primary/20' : ''
                } ${
                  selectedPackage === pkg.id ? 'bg-primary/10 border-primary' : ''
                }`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    ХИТ ПРОДАЖ
                  </Badge>
                )}
                
                {pkg.discount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground">
                    -{pkg.discount}%
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <img 
                      src="/img/ca14ed4e-288a-439c-83d6-a4a5ff8045c0.jpg"
                      alt="UC"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">{pkg.amount} UC</h3>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">₽{pkg.price}</div>
                    {pkg.originalPrice > pkg.price && (
                      <div className="text-sm text-muted-foreground line-through">
                        ₽{pkg.originalPrice}
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <Button 
                    className="w-full" 
                    disabled={!playerId}
                    variant={selectedPackage === pkg.id ? 'default' : 'outline'}
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Купить сейчас
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sellers Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Проверенные продавцы</h2>
            <p className="text-muted-foreground">Только надежные поставщики с высоким рейтингом</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {sellers.map((seller, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-primary" />
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">{seller.name}</h3>
                  
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                    <span className="font-medium">{seller.rating}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {seller.sales.toLocaleString()} продаж
                  </p>
                  
                  <Badge variant={seller.online ? 'default' : 'secondary'} className="text-xs">
                    <div className={`w-2 h-2 rounded-full mr-2 ${seller.online ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                    {seller.online ? 'Онлайн' : 'Оффлайн'}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Zap" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Мгновенная доставка</h3>
              <p className="text-muted-foreground">UC поступают на счет за 1-5 минут</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">100% безопасно</h3>
              <p className="text-muted-foreground">Защищенные платежи и гарантия</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Headphones" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Поддержка 24/7</h3>
              <p className="text-muted-foreground">Всегда готовы помочь в Telegram</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">UC</span>
              </div>
              <span className="font-bold text-primary">UC STORE</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Лучший магазин UC для PUBG Mobile. Быстро, безопасно, надежно.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;