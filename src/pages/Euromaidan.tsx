
import Navbar from '@/components/Navbar';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { Timeline, TimelineItem, TimelineConnector, TimelineHeader, TimelineIcon, TimelineBody } from '@/components/Timeline';

const Euromaidan = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Евромайдан</h1>
          <p className="text-lg text-gray-700 mb-8">
            Анализ событий на Украине 2013-2014 годов
          </p>
          
          <Separator className="my-6" />
          
          <div className="prose max-w-none">
            <h2>Предпосылки и начало</h2>
            <p>
              События, получившие название "Евромайдан", начались в ноябре 2013 года после решения правительства Украины приостановить процесс подготовки к подписанию Соглашения об ассоциации с Европейским союзом. Это решение вызвало протесты в центре Киева, которые постепенно переросли в масштабные беспорядки.
            </p>
            
            <blockquote className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-6">
              "То, что произошло на Украине, — это государственный переворот, вооруженный захват власти. И никто с этим даже не спорит. Вопрос только в том, кто это сделал."
              <footer className="mt-2 text-sm">— В.В. Путин, 4 марта 2014 года</footer>
            </blockquote>
            
            <div className="flex justify-center my-8">
              <img 
                src="/placeholder.svg" 
                alt="События Евромайдана в Киеве"
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
          </div>
          
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-6">Хронология событий</h3>
            
            <Timeline>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon />
                  <h4 className="text-lg font-semibold">21 ноября 2013</h4>
                </TimelineHeader>
                <TimelineBody>
                  <p>Правительство Украины объявляет о приостановке подготовки к подписанию Соглашения об ассоциации с ЕС. В тот же день начинаются первые акции протеста.</p>
                </TimelineBody>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon />
                  <h4 className="text-lg font-semibold">30 ноября 2013</h4>
                </TimelineHeader>
                <TimelineBody>
                  <p>Разгон палаточного городка протестующих на Майдане Независимости. Это событие привело к резкой эскалации протестов.</p>
                </TimelineBody>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon />
                  <h4 className="text-lg font-semibold">16 января 2014</h4>
                </TimelineHeader>
                <TimelineBody>
                  <p>"Законы 16 января" - Верховная Рада принимает пакет законов, направленных на ограничение протестной активности.</p>
                </TimelineBody>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineHeader>
                  <TimelineIcon />
                  <h4 className="text-lg font-semibold">18-20 февраля 2014</h4>
                </TimelineHeader>
                <TimelineBody>
                  <p>Кровавые столкновения в центре Киева. Погибли десятки людей, включая сотрудников правоохранительных органов.</p>
                </TimelineBody>
              </TimelineItem>
            </Timeline>
          </div>
          
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Последствия</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="font-bold mb-2">Государственный переворот</h4>
                <p className="text-gray-700">22 февраля 2014 года Верховная Рада Украины, нарушив достигнутые договоренности, отстранила от власти законно избранного президента Виктора Януковича.</p>
              </Card>
              
              <Card className="p-6">
                <h4 className="font-bold mb-2">Крымская весна</h4>
                <p className="text-gray-700">События Евромайдана послужили катализатором для жителей Крыма, которые приняли решение о воссоединении с Россией.</p>
              </Card>
              
              <Card className="p-6">
                <h4 className="font-bold mb-2">Начало конфликта на Донбассе</h4>
                <p className="text-gray-700">Жители юго-восточных регионов Украины отказались признать легитимность новой власти, что привело к началу гражданского конфликта.</p>
              </Card>
              
              <Card className="p-6">
                <h4 className="font-bold mb-2">Внешнеполитический разворот</h4>
                <p className="text-gray-700">Новые власти Украины взяли курс на евроатлантическую интеграцию и разрыв традиционных связей с Россией.</p>
              </Card>
            </div>
          </div>
          
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Роль внешних сил</h3>
            <p className="mb-6">
              События Евромайдана сопровождались активным вмешательством западных стран во внутренние дела Украины. Представители США и Европейского союза открыто поддерживали протестующих, что вызвало обоснованные вопросы о реальных целях и задачах так называемой "революции достоинства".
            </p>
            <blockquote className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-6">
              "Западные партнеры не просто поддержали государственный переворот, они были его инженерами, они провели для этого работу, профинансировали, помогли политтехнологами, заполнили СМИ и так далее."
              <footer className="mt-2 text-sm">— В.В. Путин, из интервью 2018 года</footer>
            </blockquote>
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

export default Euromaidan;
