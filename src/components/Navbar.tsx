import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Gamepad2" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">UC SHOP</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Главная
            </a>
            <a href="/products" className="text-foreground hover:text-primary transition-colors">
              Товары
            </a>
            <a href="/topup" className="text-foreground hover:text-primary transition-colors">
              Пополнение
            </a>
            <a href="/support" className="text-foreground hover:text-primary transition-colors">
              Поддержка
            </a>
            <a href="/reviews" className="text-foreground hover:text-primary transition-colors">
              Отзывы
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
            <Button size="sm">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-foreground hover:text-primary transition-colors">
                Главная
              </a>
              <a href="/products" className="text-foreground hover:text-primary transition-colors">
                Товары
              </a>
              <a href="/topup" className="text-foreground hover:text-primary transition-colors">
                Пополнение
              </a>
              <a href="/support" className="text-foreground hover:text-primary transition-colors">
                Поддержка
              </a>
              <a href="/reviews" className="text-foreground hover:text-primary transition-colors">
                Отзывы
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
                  <Icon name="User" size={16} className="mr-2" />
                  Войти
                </Button>
                <Button size="sm">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Корзина
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;