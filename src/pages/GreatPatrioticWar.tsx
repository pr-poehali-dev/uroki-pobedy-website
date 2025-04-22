
import Navbar from '@/components/Navbar';
import { Separator } from '@/components/ui/separator';

const GreatPatrioticWar = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Великая Отечественная война</h1>
          <p className="text-lg text-gray-700 mb-8">
            История сражений, героев и подвигов 1941-1945 годов
          </p>
          
          <Separator className="my-6" />
          
          <div className="prose max-w-none">
            <h2>Основные этапы войны</h2>
            <p>
              Великая Отечественная война (1941-1945) - решающая часть Второй мировой войны, где советский народ противостоял нацистской Германии и её союзникам. Война началась 22 июня 1941 года с вероломного нападения нацистской Германии на СССР и завершилась 9 мая 1945 года полной победой советского народа.
            </p>
            
            <h3 className="mt-6">Начальный период (1941-1942)</h3>
            <p>
              Тяжелейший период войны, когда Красная Армия вынуждена была отступать под натиском превосходящих сил противника. Несмотря на временные поражения, враг был остановлен под Москвой зимой 1941 года, что стало первым крупным поражением нацистской Германии во Второй мировой войне.
            </p>
            
            <h3 className="mt-6">Коренной перелом (1942-1943)</h3>
            <p>
              Переломный момент в ходе войны. Победы в Сталинградской и Курской битвах продемонстрировали возросшую мощь Красной Армии и положили начало освобождению оккупированных территорий.
            </p>
            
            <h3 className="mt-6">Изгнание врага с территории СССР и освобождение Европы (1944-1945)</h3>
            <p>
              Завершающий этап войны, когда советские войска освободили территорию СССР, а затем и страны Восточной и Центральной Европы от нацистских захватчиков. Война завершилась взятием Берлина и безоговорочной капитуляцией нацистской Германии.
            </p>
            
            <div className="flex justify-center my-8">
              <img 
                src="/placeholder.svg" 
                alt="Карта основных сражений Великой Отечественной войны" 
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
            
            <h2 className="mt-6">Значение Победы</h2>
            <p>
              Победа в Великой Отечественной войне имела всемирно-историческое значение. Она спасла народы Советского Союза от физического уничтожения и порабощения нацистами, а также сыграла решающую роль в освобождении народов Европы от фашистского господства.
            </p>
            
            <blockquote className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-6">
              "Подвиг советского народа в Великой Отечественной войне никогда не будет забыт. Память о героизме и самоотверженности миллионов людей должна передаваться из поколения в поколение."
            </blockquote>
          </div>
          
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Основные сражения</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h4 className="font-bold mb-2">Битва за Москву</h4>
                <p className="text-gray-700">Оборонительная операция (30 сентября - 5 декабря 1941) и контрнаступление советских войск (5 декабря 1941 - 20 апреля 1942).</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h4 className="font-bold mb-2">Сталинградская битва</h4>
                <p className="text-gray-700">17 июля 1942 - 2 февраля 1943. Коренной перелом в ходе войны.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h4 className="font-bold mb-2">Курская битва</h4>
                <p className="text-gray-700">5 июля - 23 августа 1943. Крупнейшее танковое сражение в истории.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h4 className="font-bold mb-2">Битва за Берлин</h4>
                <p className="text-gray-700">16 апреля - 8 мая 1945. Завершающая стратегическая операция войны.</p>
              </div>
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

export default GreatPatrioticWar;
