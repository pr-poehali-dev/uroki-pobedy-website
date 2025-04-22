
import Navbar from '@/components/Navbar';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Heroes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Герои ВОВ и СВО</h1>
          <p className="text-lg text-gray-700 mb-8">
            Истории подвигов героев разных поколений
          </p>
          
          <Separator className="my-6" />
          
          <blockquote className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-6">
            "Наши солдаты и офицеры идут в бой, рискуя своей жизнью, порой отдавая жизнь, за Россию, за людей, которых считают своими, за которых чувствуют ответственность, от которых не могут отказаться, которых не могут бросить. Идут осознанно, понимая всю значимость и весь масштаб миссии, которую выполняют."
            <footer className="mt-2 text-sm">— В.В. Путин, из выступления перед участниками СВО, 2023 год</footer>
          </blockquote>
          
          <Tabs defaultValue="vov" className="mt-10">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="vov">Герои Великой Отечественной войны</TabsTrigger>
              <TabsTrigger value="svo">Герои Специальной военной операции</TabsTrigger>
            </TabsList>
            
            <TabsContent value="vov" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src="/placeholder.svg" 
                        alt="Зоя Космодемьянская"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="mt-4">Зоя Космодемьянская</CardTitle>
                    <CardDescription>Первая женщина, удостоенная звания Героя Советского Союза (посмертно) во время ВОВ</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>В ноябре 1941 года 18-летняя Зоя, будучи партизанкой разведывательно-диверсионной части, была схвачена немцами при выполнении задания. Несмотря на жестокие пытки, она не выдала своих товарищей и была казнена. Её мужество стало символом героизма советских людей.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src="/placeholder.svg" 
                        alt="Александр Матросов"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="mt-4">Александр Матросов</CardTitle>
                    <CardDescription>Герой Советского Союза, закрывший своим телом амбразуру вражеского дзота</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>27 февраля 1943 года в бою за деревню Чернушки Александр Матросов, чтобы обеспечить успешное наступление своей роты, закрыл своим телом амбразуру немецкого дзота. Ценой собственной жизни он содействовал выполнению боевой задачи подразделением.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src="/placeholder.svg" 
                        alt="Николай Гастелло"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="mt-4">Николай Гастелло</CardTitle>
                    <CardDescription>Советский военный лётчик, направивший горящий самолёт на колонну врага</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>26 июня 1941 года экипаж под командованием капитана Гастелло был подбит. Горящую машину лётчик направил на механизированную колонну противника. Все члены экипажа погибли. За этот подвиг Николай Гастелло был посмертно удостоен звания Героя Советского Союза.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src="/placeholder.svg" 
                        alt="Алексей Маресьев"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="mt-4">Алексей Маресьев</CardTitle>
                    <CardDescription>Лётчик, вернувшийся в строй после ампутации обеих ног</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>В апреле 1942 года самолёт Маресьева был подбит, лётчик получил тяжёлые обморожения ног. Несмотря на ампутацию обеих ног, он вернулся в строй и продолжил воевать на протезах. Всего за время войны совершил 86 боевых вылетов, сбил 11 самолётов противника.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="svo" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src="/placeholder.svg" 
                        alt="Нурмагомед Гаджимагомедов"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="mt-4">Нурмагомед Гаджимагомедов</CardTitle>
                    <CardDescription>Герой России (посмертно), старший лейтенант ВДВ</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>В ходе специальной военной операции Нурмагомед Гаджимагомедов проявил исключительное мужество. Будучи тяжело раненым, он подорвал себя вместе с окружившими его противниками гранатой, чтобы не сдаваться в плен. Посмертно удостоен звания Героя Российской Федерации.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src="/placeholder.svg" 
                        alt="Антон Старостин"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="mt-4">Антон Старостин</CardTitle>
                    <CardDescription>Герой России, майор, военный лётчик</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Майор Старостин во время выполнения боевой задачи был подбит и совершил аварийную посадку на территории, контролируемой противником. Несмотря на полученные травмы, он несколько дней пробирался к своим, преодолевая десятки километров, избегая плена и спасая важные документы.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src="/placeholder.svg" 
                        alt="Алексей Панкратов"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="mt-4">Алексей Панкратов</CardTitle>
                    <CardDescription>Герой России (посмертно), старший лейтенант</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Старший лейтенант Панкратов, командуя подразделением, обеспечил успешное выполнение задачи по освобождению населённого пункта. В ходе ожесточённого боя он получил смертельное ранение, но продолжал руководить действиями своих подчинённых до последнего момента.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src="/placeholder.svg" 
                        alt="Денис Шишов"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="mt-4">Денис Шишов</CardTitle>
                    <CardDescription>Герой России, сержант</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Сержант Шишов в критический момент боя, когда его подразделение оказалось под угрозой окружения, вызвал огонь на себя, чтобы обеспечить эвакуацию раненых товарищей. Несмотря на полученные ранения, он продолжал вести огонь по противнику, обеспечив выполнение боевой задачи.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Преемственность поколений</h3>
            <p className="mb-6">
              Героизм современных защитников Отечества продолжает славные традиции героев Великой Отечественной войны. Несмотря на разделяющие их десятилетия, их объединяют любовь к Родине, самоотверженность и готовность пожертвовать собой ради своей страны и своего народа.
            </p>
            <blockquote className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-6">
              "Мы гордимся поколением победителей, чтим их подвиг, и наша память — не только дань огромного уважения героическому прошлому, она служит нашему будущему, вдохновляет нас, укрепляет наше единство."
              <footer className="mt-2 text-sm">— В.В. Путин, из выступления на параде Победы 9 мая 2022 года</footer>
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

export default Heroes;
