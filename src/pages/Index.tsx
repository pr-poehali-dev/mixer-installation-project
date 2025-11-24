import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Droplet" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">СантехПро</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection("pricing")} className="text-foreground hover:text-primary transition-colors">
                Прайс
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
                Контакты
              </button>
              <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90">
                Заказать звонок
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Профессиональная установка смесителей
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Быстро, качественно и с гарантией. Работаем со всеми типами смесителей для кухни и ванной.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8" onClick={() => scrollToSection("contact")}>
                  <Icon name="Phone" className="mr-2" size={20} />
                  Заказать установку
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection("pricing")}>
                  Узнать цены
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-8">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary" size={24} />
                  <span className="text-sm">Гарантия 2 года</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" className="text-primary" size={24} />
                  <span className="text-sm">Быстро и точно</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={24} />
                  <span className="text-sm">15 лет опыта</span>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/b95275a9-acbe-4a04-a36c-36fd76bb7f64/files/623fe64e-cde4-40bd-a7fe-06bc5a0909a4.jpg" 
                alt="Профессиональная установка смесителя"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр работ по установке и замене смесителей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Wrench" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Установка нового смесителя</h3>
                <p className="text-muted-foreground mb-4">
                  Установим любой смеситель для кухни или ванной с подключением к водопроводу
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={18} />
                    <span className="text-sm">Подготовка места</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={18} />
                    <span className="text-sm">Герметизация</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={18} />
                    <span className="text-sm">Проверка на протечки</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in [animation-delay:100ms]">
              <CardContent className="p-8">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon name="RefreshCw" className="text-secondary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Замена старого смесителя</h3>
                <p className="text-muted-foreground mb-4">
                  Демонтируем старый и установим новый смеситель с проверкой коммуникаций
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={18} />
                    <span className="text-sm">Демонтаж старого</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={18} />
                    <span className="text-sm">Очистка поверхности</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={18} />
                    <span className="text-sm">Установка нового</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in [animation-delay:200ms]">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Settings" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Ремонт и обслуживание</h3>
                <p className="text-muted-foreground mb-4">
                  Устраним протечки, заменим картриджи и прокладки в смесителях
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={18} />
                    <span className="text-sm">Замена картриджа</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={18} />
                    <span className="text-sm">Устранение протечек</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={18} />
                    <span className="text-sm">Настройка напора</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/b95275a9-acbe-4a04-a36c-36fd76bb7f64/files/d4261f41-c26e-401b-b9c6-f0d361a10fad.jpg" 
                alt="Процесс установки смесителя"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Почему выбирают нас</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
                    <p className="text-muted-foreground">2 года гарантии на все работы. Используем только качественные материалы.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Быстрая работа</h3>
                    <p className="text-muted-foreground">Установка стандартного смесителя занимает от 1 до 2 часов.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Опытные мастера</h3>
                    <p className="text-muted-foreground">15 лет опыта в сантехнических работах. Более 2000 довольных клиентов.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Banknote" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Честные цены</h3>
                    <p className="text-muted-foreground">Фиксированная цена после осмотра. Никаких скрытых доплат.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Прайс-лист</h2>
            <p className="text-xl text-muted-foreground">Прозрачные и честные цены на все виды работ</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Установка смесителя на кухню</h3>
                    <p className="text-muted-foreground">Включает монтаж, подключение и проверку</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-primary">от 1500₽</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Установка смесителя в ванную</h3>
                    <p className="text-muted-foreground">С душевым шлангом и лейкой</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-secondary">от 2000₽</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Замена смесителя</h3>
                    <p className="text-muted-foreground">Демонтаж старого + установка нового</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-primary">от 2500₽</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ремонт смесителя</h3>
                    <p className="text-muted-foreground">Замена картриджа, прокладок, устранение протечек</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-secondary">от 800₽</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Установка встроенного смесителя</h3>
                    <p className="text-muted-foreground">Со скрытым монтажом в стену</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-primary">от 3500₽</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Срочный выезд мастера</h3>
                    <p className="text-muted-foreground">Выезд в течение 2 часов</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-secondary">+500₽</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <div className="flex items-start gap-4">
                <Icon name="Info" className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold mb-2">Важная информация:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Цены указаны без стоимости материалов</li>
                    <li>• Точная стоимость определяется после осмотра</li>
                    <li>• Выезд мастера для оценки - бесплатно</li>
                    <li>• Работаем ежедневно с 8:00 до 22:00</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">Звоните или оставьте заявку — мы перезвоним в течение 5 минут</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                        <Icon name="Phone" className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Телефон</p>
                        <a href="tel:89529361802" className="text-2xl font-bold text-primary hover:underline">
                          8 (952) 936-18-02
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center">
                        <Icon name="Clock" className="text-secondary" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Режим работы</p>
                        <p className="text-lg font-semibold">Ежедневно с 8:00 до 22:00</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                        <Icon name="MapPin" className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Зона обслуживания</p>
                        <p className="text-lg font-semibold">Москва и область</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t">
                    <img 
                      src="https://cdn.poehali.dev/projects/b95275a9-acbe-4a04-a36c-36fd76bb7f64/files/55904c85-48fd-4237-948a-4f1c26058456.jpg" 
                      alt="Наши работы"
                      className="rounded-xl w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Заказать обратный звонок</h3>
                  <form className="space-y-4" onSubmit={(e) => {
                    e.preventDefault();
                    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
                  }}>
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя</label>
                      <input 
                        type="text" 
                        placeholder="Иван" 
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <input 
                        type="tel" 
                        placeholder="+7 (___) ___-__-__" 
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Тип работы</label>
                      <select className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>Установка смесителя</option>
                        <option>Замена смесителя</option>
                        <option>Ремонт смесителя</option>
                        <option>Консультация</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Комментарий</label>
                      <textarea 
                        placeholder="Опишите вашу задачу..."
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-lg py-6">
                      <Icon name="Send" className="mr-2" size={20} />
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Droplet" className="text-primary" size={32} />
                <span className="text-2xl font-bold">СантехПро</span>
              </div>
              <p className="text-background/70">
                Профессиональная установка и ремонт смесителей в Москве и области
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Наши услуги</h4>
              <ul className="space-y-2 text-background/70">
                <li>Установка смесителей</li>
                <li>Замена смесителей</li>
                <li>Ремонт сантехники</li>
                <li>Срочный выезд мастера</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-background/70">
                <p>Телефон: <a href="tel:89529361802" className="text-primary hover:underline">8 (952) 936-18-02</a></p>
                <p>Режим работы: 8:00 - 22:00</p>
                <p>Зона обслуживания: Москва и область</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-background/10 text-center text-background/50 text-sm">
            <p>© 2024 СантехПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
