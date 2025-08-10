import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/Navbar';

const TopUp = () => {
  const [selectedPackage, setSelectedPackage] = useState('325');
  const [playerId, setPlayerId] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const packages = [
    { uc: '60', price: '99', bonus: '', popular: false },
    { uc: '120', price: '189', bonus: '+5 UC бонус', popular: false },
    { uc: '325', price: '499', bonus: '+25 UC бонус', popular: true },
    { uc: '660', price: '999', bonus: '+60 UC бонус', popular: false },
    { uc: '1800', price: '2499', bonus: '+200 UC бонус', popular: false },
    { uc: '3850', price: '4999', bonus: '+450 UC бонус', popular: false },
  ];

  const paymentMethods = [
    { id: 'card', name: 'Банковская карта', icon: 'CreditCard' },
    { id: 'sbp', name: 'СБП', icon: 'Smartphone' },
    { id: 'qiwi', name: 'QIWI', icon: 'Wallet' },
    { id: 'yandex', name: 'ЮMoney', icon: 'DollarSign' },
    { id: 'crypto', name: 'Криптовалюта', icon: 'Bitcoin' },
  ];

  const selectedPkg = packages.find(pkg => pkg.uc === selectedPackage);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Пополнение UC</h1>
          <p className="text-muted-foreground text-lg">Выберите пакет и способ оплаты для быстрого пополнения</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Package" size={24} />
                  Выберите пакет UC
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.uc}
                      className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                        selectedPackage === pkg.uc 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedPackage(pkg.uc)}
                    >
                      {pkg.popular && (
                        <Badge className="absolute -top-2 -right-2 bg-primary">
                          Популярный
                        </Badge>
                      )}
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-1">{pkg.uc} UC</div>
                        <div className="text-xl text-primary font-semibold mb-2">₽{pkg.price}</div>
                        {pkg.bonus && (
                          <div className="text-sm text-accent font-medium">{pkg.bonus}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="User" size={24} />
                  Данные игрока
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="playerId">ID игрока в PUBG Mobile</Label>
                  <Input 
                    id="playerId"
                    placeholder="Введите ваш ID игрока"
                    value={playerId}
                    onChange={(e) => setPlayerId(e.target.value)}
                    className="mt-1"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Найти ID можно в настройках игры → Основные → ID игрока
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="CreditCard" size={24} />
                  Способ оплаты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={method.id} id={method.id} />
                        <Label 
                          htmlFor={method.id} 
                          className="flex items-center gap-2 cursor-pointer p-3 border rounded-lg flex-1 hover:bg-muted/50"
                        >
                          <Icon name={method.icon as any} size={20} />
                          {method.name}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="ShoppingCart" size={24} />
                  Ваш заказ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Пакет:</span>
                    <span className="font-semibold">{selectedPkg?.uc} UC</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Цена:</span>
                    <span className="font-semibold">₽{selectedPkg?.price}</span>
                  </div>
                  
                  {selectedPkg?.bonus && (
                    <div className="flex justify-between items-center text-accent">
                      <span>Бонус:</span>
                      <span className="font-semibold">{selectedPkg.bonus}</span>
                    </div>
                  )}
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Итого:</span>
                      <span className="text-primary">₽{selectedPkg?.price}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>Мгновенная выдача</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Shield" size={16} />
                    <span>Безопасная оплата</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Headphones" size={16} />
                    <span>Поддержка 24/7</span>
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  size="lg"
                  disabled={!playerId}
                >
                  <Icon name="Zap" size={20} className="mr-2" />
                  Оплатить ₽{selectedPkg?.price}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая "Оплатить", вы соглашаетесь с условиями сервиса и политикой конфиденциальности
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6 text-center">
              <Icon name="Zap" size={32} className="text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Автоматическая выдача</h3>
              <p className="text-sm text-muted-foreground">
                UC поступают на ваш счёт в течение 1-5 минут после оплаты
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 text-center">
              <Icon name="Shield" size={32} className="text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Гарантия безопасности</h3>
              <p className="text-sm text-muted-foreground">
                Все транзакции защищены SSL-шифрованием и проходят проверку
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 text-center">
              <Icon name="RotateCcw" size={32} className="text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Возврат средств</h3>
              <p className="text-sm text-muted-foreground">
                100% возврат средств при технических проблемах с выдачей
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TopUp;