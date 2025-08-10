import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
<parameter name="new_string">import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [playerId, setPlayerId] = useState('');
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  const ucPackages = [
    { id: 1, uc: 60, price: 75, originalPrice: 89, discount: 16, popular: false, bonus: null },
    { id: 2, uc: 120, price: 149, originalPrice: 179, discount: 17, popular: false, bonus: '+5 UC бонус' },
    { id: 3, uc: 325, price: 399, originalPrice: 479, discount: 17, popular: true, bonus: '+25 UC бонус' },
    { id: 4, uc: 660, price: 799, originalPrice: 959, discount: 17, popular: false, bonus: '+60 UC бонус' },
    { id: 5, uc: 1800, price: 2099, originalPrice: 2499, discount: 16, popular: false, bonus: '+200 UC бонус' },
    { id: 6, uc: 3850, price: 4299, originalPrice: 5199, discount: 17, popular: false, bonus: '+450 UC бонус' }
  ];

  const handleBuyClick = (pkg: typeof ucPackages[0]) => {
    if (!playerId) {
      alert('Пожалуйста, введите ID игрока');
      return;
    }
    setSelectedPackage(pkg.id);
    alert(`Переход к оплате ${pkg.uc} UC за ${pkg.price}₽`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-background font-bold text-xl">UC</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  UC SHOP
                </h1>
                <p className="text-xs text-muted-foreground">PUBG Mobile Store</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Главная</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Как купить</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Отзывы</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Поддержка</a>
            </nav>
            
            <Button className="md:hidden" variant="ghost" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(/img/a28938a8-1432-45d9-a01d-76f47091c0fb.jpg)` 
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Купи <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">UC</span> для<br />
                PUBG Mobile
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                ⚡ Мгновенная доставка<br />
                💰 Лучшие цены<br />
                🛡️ 100% безопасно
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform">
                  <Icon name="Zap" size={24} className="mr-2" />
                  Начать покупку
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary/50 hover:bg-primary/10">
                  <Icon name="PlayCircle" size={24} className="mr-2" />
                  Как это работает
                </Button>
              </div>
            </div>
            
            <div className="lg:flex lg:justify-end">
              <Card className="w-full max-w-md bg-card/90 backdrop-blur-sm border-primary/20 shadow-2xl">
                <CardHeader>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Быстрая покупка</h3>
                    <p className="text-muted-foreground">Введите ID и выберите пакет</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-foreground">
                      <Icon name="User" size={16} className="inline mr-2" />
                      ID игрока PUBG Mobile
                    </label>
                    <Input 
                      placeholder="Например: 5123456789"
                      value={playerId}
                      onChange={(e) => setPlayerId(e.target.value)}
                      className="bg-background/80 border-primary/30 focus:border-primary text-lg py-3"
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      ID находится в настройках игры → Основные
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {ucPackages.slice(0, 4).map((pkg) => (
                      <button
                        key={pkg.id}
                        onClick={() => handleBuyClick(pkg)}
                        className={`p-3 rounded-lg border-2 transition-all text-left ${
                          selectedPackage === pkg.id 
                            ? 'border-primary bg-primary/10 shadow-lg' 
                            : 'border-border hover:border-primary/50 hover:bg-primary/5'
                        }`}
                      >
                        <div className="text-lg font-bold">{pkg.uc} UC</div>
                        <div className="text-sm text-primary font-semibold">{pkg.price}₽</div>
                        {pkg.originalPrice > pkg.price && (
                          <div className="text-xs text-muted-foreground line-through">
                            {pkg.originalPrice}₽
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform"
                    disabled={!playerId || !selectedPackage}
                  >
                    <Icon name="CreditCard" size={20} className="mr-2" />
                    Перейти к оплате
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* UC Packages Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Все пакеты <span className="text-primary">UC</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий пакет UC с лучшими ценами и бонусами
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ucPackages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={`relative transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group ${
                  pkg.popular 
                    ? 'ring-2 ring-primary shadow-lg shadow-primary/25 bg-gradient-to-b from-card to-primary/5' 
                    : 'hover:ring-2 hover:ring-primary/50'
                }`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary px-4 py-1 text-background font-bold">
                    🔥 ХИТ ПРОДАЖ
                  </Badge>
                )}
                
                {pkg.discount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground font-bold text-sm">
                    -{pkg.discount}%
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <img 
                      src="/img/519ef8f6-e244-4cd7-89b8-a866db0d0cf5.jpg"
                      alt="UC Coins"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-2">{pkg.uc} UC</h3>
                  
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">₽{pkg.price}</div>
                    {pkg.originalPrice > pkg.price && (
                      <div className="text-lg text-muted-foreground line-through">
                        ₽{pkg.originalPrice}
                      </div>
                    )}
                  </div>
                  
                  {pkg.bonus && (
                    <Badge variant="secondary" className="mt-2 bg-secondary/20 text-secondary">
                      🎁 {pkg.bonus}
                    </Badge>
                  )}
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Zap" size={16} className="text-primary" />
                      <span>Мгновенная доставка 1-5 мин</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Shield" size={16} className="text-secondary" />
                      <span>100% гарантия безопасности</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="RotateCcw" size={16} className="text-accent" />
                      <span>Возврат при проблемах</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBuyClick(pkg);
                    }}
                  >
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Купить сейчас
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/25 transition-all">
                <Icon name="Zap" size={36} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Мгновенная доставка</h3>
              <p className="text-muted-foreground leading-relaxed">UC поступают на ваш аккаунт автоматически в течение 1-5 минут после оплаты</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-secondary/25 transition-all">
                <Icon name="Shield" size={36} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">100% безопасность</h3>
              <p className="text-muted-foreground leading-relaxed">SSL шифрование, защищенные платежи и полная гарантия возврата средств</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent/25 transition-all">
                <Icon name="Headphones" size={36} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Поддержка 24/7</h3>
              <p className="text-muted-foreground leading-relaxed">Круглосуточная техническая поддержка в Telegram для решения любых вопросов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center">
                <span className="text-background font-bold text-xl">UC</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                UC SHOP
              </span>
            </div>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Лучший магазин UC для PUBG Mobile с мгновенной доставкой и лучшими ценами на рынке
            </p>
            <div className="flex justify-center gap-6">
              <Button variant="ghost" size="sm">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Поддержка
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Star" size={16} className="mr-2" />
                Отзывы
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="HelpCircle" size={16} className="mr-2" />
                FAQ
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;