import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/Navbar';

const Index = () => {
  const popularPacks = [
    { id: 1, uc: '60 UC', price: '₽99', discount: null, popular: false },
    { id: 2, uc: '325 UC', price: '₽499', discount: '10%', popular: true },
    { id: 3, uc: '660 UC', price: '₽999', discount: '15%', popular: false },
    { id: 4, uc: '1800 UC', price: '₽2499', discount: '20%', popular: false },
  ];

  const features = [
    {
      icon: 'Zap',
      title: 'Мгновенная выдача',
      description: 'UC поступают на счет автоматически после оплаты'
    },
    {
      icon: 'Shield',
      title: 'Безопасно',
      description: 'Гарантируем безопасность всех транзакций'
    },
    {
      icon: 'Star',
      title: 'Рейтинг продавцов',
      description: 'Проверенные продавцы с высокими оценками'
    },
    {
      icon: 'Headphones',
      title: 'Поддержка 24/7',
      description: 'Круглосуточная техническая поддержка'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div 
        className="relative min-h-[600px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: 'url(/img/9abf7a5f-83bb-49f1-a93e-4cfdad7489de.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Лучший магазин <span className="text-primary">UC PUBG</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Быстро, безопасно, выгодно. Автоматическая выдача за секунды!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Купить UC
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-background">
              <Icon name="Play" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные пакеты UC</h2>
          <p className="text-muted-foreground text-lg">Выберите подходящий пакет и получите UC моментально</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {popularPacks.map((pack) => (
            <Card key={pack.id} className={`relative transition-transform hover:scale-105 ${pack.popular ? 'border-primary shadow-lg shadow-primary/20' : ''}`}>
              {pack.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    ПОПУЛЯРНЫЙ
                  </span>
                </div>
              )}
              {pack.discount && (
                <div className="absolute -top-2 -right-2">
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-bold">
                    -{pack.discount}
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <img 
                    src="/img/900aacb0-b3e6-45f7-863d-6c0b39ff394e.jpg" 
                    alt="UC" 
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </div>
                <CardTitle className="text-2xl">{pack.uc}</CardTitle>
                <CardDescription className="text-2xl font-bold text-primary">{pack.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg">
                  <Icon name="Zap" size={16} className="mr-2" />
                  Купить сейчас
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-muted-foreground text-lg mb-12">Преимущества нашего сервиса</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name={feature.icon as any} size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Начните играть прямо сейчас!</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Пополните баланс UC и получите доступ ко всем возможностям PUBG Mobile
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            <Icon name="Rocket" size={20} className="mr-2" />
            Перейти к покупкам
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;