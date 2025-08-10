import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  ucAmount: number;
  price: number;
  playerId: string;
}

const PaymentModal = ({ isOpen, onClose, ucAmount, price, playerId }: PaymentModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentMethods = [
    { id: 'card', name: 'Банковская карта', icon: 'CreditCard', fee: 0 },
    { id: 'sbp', name: 'СБП (Быстрые платежи)', icon: 'Smartphone', fee: 0 },
    { id: 'qiwi', name: 'QIWI Кошелек', icon: 'Wallet', fee: 2 },
    { id: 'crypto', name: 'Криптовалюта', icon: 'Bitcoin', fee: 0 },
    { id: 'yandex', name: 'ЮMoney', icon: 'DollarSign', fee: 1 },
  ];

  const selectedMethod = paymentMethods.find(method => method.id === paymentMethod);
  const totalPrice = price + (selectedMethod ? (price * selectedMethod.fee / 100) : 0);

  const handlePayment = async () => {
    setIsProcessing(true);
    // Симуляция платежа
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsProcessing(false);
    alert(`Оплата успешна! ${ucAmount} UC будут зачислены на ваш аккаунт в течение 5 минут.`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Оплата заказа</CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <Icon name="X" size={20} />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Order Summary */}
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span>UC пакет:</span>
              <span className="font-bold">{ucAmount} UC</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span>ID игрока:</span>
              <span className="font-mono text-sm">{playerId}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>Доставка:</span>
              <Badge variant="outline" className="text-xs">
                <Icon name="Zap" size={12} className="mr-1" />
                1-5 минут
              </Badge>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="font-medium mb-3">Способ оплаты</h3>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="space-y-2">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={method.id} id={method.id} />
                    <Label 
                      htmlFor={method.id} 
                      className="flex items-center justify-between w-full p-3 border rounded-lg cursor-pointer hover:bg-muted/50"
                    >
                      <div className="flex items-center gap-2">
                        <Icon name={method.icon as any} size={18} />
                        <span>{method.name}</span>
                      </div>
                      {method.fee > 0 && (
                        <Badge variant="secondary" className="text-xs">
                          +{method.fee}%
                        </Badge>
                      )}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          {/* Price Summary */}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-2">
              <span>Стоимость:</span>
              <span>₽{price}</span>
            </div>
            {selectedMethod && selectedMethod.fee > 0 && (
              <div className="flex justify-between items-center mb-2 text-sm text-muted-foreground">
                <span>Комиссия ({selectedMethod.fee}%):</span>
                <span>₽{(price * selectedMethod.fee / 100).toFixed(0)}</span>
              </div>
            )}
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Итого:</span>
              <span className="text-primary">₽{Math.ceil(totalPrice)}</span>
            </div>
          </div>

          {/* Payment Button */}
          <Button 
            className="w-full" 
            size="lg"
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                Обработка платежа...
              </>
            ) : (
              <>
                <Icon name="CreditCard" size={20} className="mr-2" />
                Оплатить ₽{Math.ceil(totalPrice)}
              </>
            )}
          </Button>

          <div className="text-xs text-muted-foreground text-center">
            Нажимая "Оплатить", вы соглашаетесь с условиями сервиса
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentModal;