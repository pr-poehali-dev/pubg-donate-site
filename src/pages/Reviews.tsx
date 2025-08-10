import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/Navbar';

const Reviews = () => {
  const [filter, setFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      user: 'Игорь М.',
      rating: 5,
      date: '2024-01-15',
      purchase: '325 UC',
      comment: 'Отличный сервис! UC пришли моментально, всё работает идеально. Буду покупать ещё!',
      seller: 'GameShop',
      verified: true
    },
    {
      id: 2,
      user: 'Анна К.',
      rating: 5,
      date: '2024-01-12',
      purchase: '660 UC',
      comment: 'Очень быстро и надёжно. Поддержка отвечает оперативно. Рекомендую всем!',
      seller: 'ProGamer',
      verified: true
    },
    {
      id: 3,
      user: 'Максим Р.',
      rating: 4,
      date: '2024-01-10',
      purchase: '1800 UC',
      comment: 'Хороший магазин, цены адекватные. Единственный минус - иногда долго отвечает поддержка.',
      seller: 'UCMaster',
      verified: true
    },
    {
      id: 4,
      user: 'Елена В.',
      rating: 5,
      date: '2024-01-08',
      purchase: '60 UC',
      comment: 'Покупаю здесь уже не первый раз. Всегда всё быстро и без проблем. Спасибо!',
      seller: 'GameShop',
      verified: true
    },
    {
      id: 5,
      user: 'Дмитрий С.',
      rating: 5,
      date: '2024-01-05',
      purchase: '3850 UC',
      comment: 'Лучший магазин UC! Автоматическая выдача работает безупречно. Цены топ!',
      seller: 'EliteUC',
      verified: true
    },
    {
      id: 6,
      user: 'Ольга П.',
      rating: 4,
      date: '2024-01-03',
      purchase: '120 UC',
      comment: 'Всё отлично, но хотелось бы больше способов оплаты.',
      seller: 'ProGamer',
      verified: true
    }
  ];

  const stats = {
    total: reviews.length,
    average: 4.8,
    distribution: {
      5: 67,
      4: 25,
      3: 6,
      2: 1,
      1: 1
    }
  };

  const filteredReviews = filter === 'all' ? reviews : reviews.filter(review => review.rating === parseInt(filter));

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon 
        key={i} 
        name="Star" 
        size={16} 
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Отзывы покупателей</h1>
          <p className="text-muted-foreground text-lg">Узнайте что думают наши клиенты о сервисе</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Общий рейтинг</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold mb-2">{stats.average}</div>
                  <div className="flex justify-center mb-2">
                    {renderStars(Math.round(stats.average))}
                  </div>
                  <div className="text-muted-foreground">
                    Основано на {stats.total} отзывах
                  </div>
                </div>
                
                <div className="space-y-2">
                  {Object.entries(stats.distribution).reverse().map(([rating, percentage]) => (
                    <div key={rating} className="flex items-center gap-2">
                      <div className="flex">
                        {renderStars(parseInt(rating))}
                      </div>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-8">
                        {percentage}%
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Фильтр по рейтингу:</h4>
                  <div className="space-y-2">
                    <Button 
                      variant={filter === 'all' ? 'default' : 'outline'} 
                      size="sm" 
                      className="w-full justify-start"
                      onClick={() => setFilter('all')}
                    >
                      Все отзывы
                    </Button>
                    {[5, 4, 3, 2, 1].map(rating => (
                      <Button 
                        key={rating}
                        variant={filter === rating.toString() ? 'default' : 'outline'} 
                        size="sm" 
                        className="w-full justify-start"
                        onClick={() => setFilter(rating.toString())}
                      >
                        <div className="flex items-center gap-2">
                          {renderStars(rating)}
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {filteredReviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {review.user.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold">{review.user}</span>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">
                                <Icon name="CheckCircle" size={12} className="mr-1" />
                                Проверено
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>Купил: {review.purchase}</span>
                            <span>•</span>
                            <span>{review.date}</span>
                            <span>•</span>
                            <span>Продавец: {review.seller}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">{review.comment}</p>
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t">
                      <Button variant="ghost" size="sm">
                        <Icon name="ThumbsUp" size={14} className="mr-2" />
                        Полезно
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Icon name="Flag" size={14} className="mr-2" />
                        Пожаловаться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button size="lg">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Оставить отзыв
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;