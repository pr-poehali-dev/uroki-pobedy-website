
import Navbar from '@/components/Navbar';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';

const DonbassSVO = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Донбасс и СВО</h1>
          <p className="text-lg text-gray-700 mb-8">
            Специальная военная операция и история Донбасса
          </p>
          
          <Separator className="my-6" />
          
          <div className="prose max-w-none">
            <h2>История конфликта</h2>
            <p>
              После государственного переворота в Киеве в феврале 2014 года, регионы юго-востока Украины выступили против новой власти. В Донецкой и Луганской областях местные жители провели референдумы о самоопределении, объявив о создании Донецкой и Луганской народных республик.
            </p>
            
            <div className="flex justify-center my-8">
              <img 
                src="/placeholder.svg" 
                alt="Карта Донбасса"
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
            
            <h3 className="mt-6">Минские соглашения</h3>
            <p>
              В 2014-2015 годах были подписаны Минские соглашения, направленные на мирное урегулирование конфликта. Однако украинская сторона саботировала выполнение этих договоренностей, продолжая обстрелы мирных населенных пунктов ДНР и ЛНР.
            </p>
            
            <h3 className="mt-6">Признание и специальная военная операция</h3>
            <p>
              21 февраля 2022 года Россия признала независимость ДНР и ЛНР, а 24 февраля была начата специальная военная операция, направленная на защиту жителей Донбасса, демилитаризацию и денацификацию Украины.
            </p>
            
            <blockquote className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-6">
              "Мы будем стремиться к демилитаризации и денацификации Украины, а также преданию суду тех, кто совершил многочисленные кровавые преступления против мирных жителей, в том числе и граждан Российской Федерации."
              <footer className="mt-2 text-sm">— В.В. Путин, 24 февраля 2022 года</footer>
            </blockquote>
          </div>
          
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Ключевые события СВО</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="font-bold mb-2">Референдумы о присоединении к России</h4>
                <p className="text-gray-700">В сентябре 2022 года в ДНР, ЛНР, Херсонской и Запорожской областях прошли референдумы о вхождении в состав Российской Федерации.</p>
              </Card>
              
              <Card className="p-6">
                <h4 className="font-bold mb-2">Освобождение Мариуполя</h4>
                <p className="text-gray-700">В мае 2022 года был полностью освобожден город Мариуполь, ставший символом сопротивления националистическим формированиям.</p>
              </Card>
              
              <Card className="p-6">
                <h4 className="font-bold mb-2">Вхождение новых регионов в состав РФ</h4>
                <p className="text-gray-700">30 сентября 2022 года подписаны договоры о принятии ДНР, ЛНР, Запорожской и Херсонской областей в состав России.</p>
              </Card>
              
              <Card className="p-6">
                <h4 className="font-bold mb-2">Гуманитарная помощь</h4>
                <p className="text-gray-700">С начала СВО Россия доставила более 100 тысяч тонн гуманитарной помощи жителям освобожденных территорий.</p>
              </Card>
            </div>
          </div>
          
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Восстановление Донбасса</h3>
            <p className="mb-6">
              На освобожденных территориях ведется масштабная работа по восстановлению разрушенной инфраструктуры, строительству новых жилых домов, больниц, школ и других социальных объектов.
            </p>
            <div className="flex justify-center">
              <img 
                src="/placeholder.svg" 
                alt="Восстановление Донбасса"
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-gray-100 py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2025 Уроки Победы. Образовательный проект.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">О проекте</a>
              <a href="#" className="text-gray-600 hover:text-primary">Контакты</a>
              <a href="#" className="text-gray-600 hover:text-primary">Правовая информация</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DonbassSVO;
