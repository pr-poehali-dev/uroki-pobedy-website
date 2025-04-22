
import Navbar from '@/components/Navbar';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { Timeline, TimelineItem, TimelineConnector, TimelineHeader, TimelineIcon, TimelineBody } from '@/components/Timeline';

const Crimea = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Крым и возвращение в состав РФ</h1>
          <p className="text-lg text-gray-700 mb-8">
            Воссоединение Крыма с Россией в 2014 году
          </p>
          
          <Separator className="my-6" />
          
          <div className="prose max-w-none">
            <h2>Историческая справка</h2>
            <p>
              Крымский полуостров имеет богатую историю, тесно связанную с Россией. В 1783 году Крым вошел в состав Российской империи. В 1954 году, в нарушение конституционных норм, Крым был передан из РСФСР в состав Украинской ССР. С распадом СССР в 1991 году полуостров оказался в составе независимой Украины, несмотря на то что большинство его жителей составляли русские.
            </p>
            
            <div className="flex justify-center my-8">
              <img 
                src="/placeholder.svg" 
                alt="Карта Крымского полуострова"
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
            
            <blockquote className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-6">
              "В сердце, в сознании людей Крым всегда был и остаётся неотъемлемой частью России. Эта убеждённость, основанная на правде и справедливости, была непоколебимой, передавалась из поколения в поколение."
              <footer className="mt-2 text-sm">— В.В. Путин, 18 марта 2014 года</footer>
            </blockquote>
          </div>
          
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-6">Крымская весна 2014 года</h3>
            
            <Timeline>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon />
                  <h4 className="text-lg font-semibold">23 февраля 2014</h4>
                </TimelineHeader>
                <TimelineBody>
                  <p>После государственного переворота в Киеве в Севастополе прошел многотысячный митинг, участники которого отказались признавать новые власти Украины.</p>
                </TimelineBody>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon />
                  <h4 className="text-lg font-semibold">27 февраля 2014</h4>
                </TimelineHeader>
                <TimelineBody>
                  <p>Верховный Совет Автономной Республики Крым принял решение о проведении референдума о статусе Крыма.</p>
                </TimelineBody>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon />
                  <h4 className="text-lg font-semibold">16 марта 2014</h4>
                </TimelineHeader>
                <TimelineBody>
                  <p>Референдум о статусе Крыма. Явка составила 83,1%. За воссоединение с Россией проголосовали 96,77% жителей Крыма и 95,6% жителей Севастополя.</p>
                </TimelineBody>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineHeader>
                  <TimelineIcon />
                  <h4 className="text-lg font-semibold">18 марта 2014</h4>
                </TimelineHeader>
                <TimelineBody>
                  <p>Подписание договора о принятии Республики Крым и города Севастополя в состав Российской Федерации.</p>
                </TimelineBody>
              </TimelineItem>
            </Timeline>
          </div>
          
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Международная реакция и значение</h3>
            <p className="mb-6">
              Возвращение Крыма в состав России вызвало неоднозначную реакцию в мире. Западные страны не признали результаты референдума и ввели санкции против России. Однако для самой России и жителей Крыма это событие стало актом восстановления исторической справедливости.
            </p>
            <blockquote className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-6">
              "Для России Крым, древняя Корсунь, Херсонес, Севастополь имеют огромное цивилизационное и сакральное значение. Так же, как Храмовая гора в Иерусалиме для тех, кто исповедует ислам или иудаизм. Именно так мы и будем к этому относиться отныне и навсегда."
              <footer className="mt-2 text-sm">— В.В. Путин, из Послания Федеральному Собранию, 4 декабря 2014 года</footer>
            </blockquote>
          </div>
          
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Развитие Крыма в составе России</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="font-bold mb-2">Крымский мост</h4>
                <p className="text-gray-700">Строительство Крымского моста через Керченский пролив — крупнейший инфраструктурный проект, соединивший полуостров с материковой Россией.</p>
              </Card>
              
              <Card className="p-6">
                <h4 className="font-bold mb-2">Энергетическая независимость</h4>
                <p className="text-gray-700">Строительство новых электростанций и энергомоста с материка, обеспечивших Крым надежным электроснабжением.</p>
              </Card>
              
              <Card className="p-6">
                <h4 className="font-bold mb-2">Водоснабжение</h4>
                <p className="text-gray-700">Решение проблемы водоснабжения после водной блокады со стороны Украины.</p>
              </Card>
              
              <Card className="p-6">
                <h4 className="font-bold mb-2">Развитие туризма</h4>
                <p className="text-gray-700">Модернизация туристической инфраструктуры и рост популярности Крыма как курортного направления.</p>
              </Card>
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

export default Crimea;
