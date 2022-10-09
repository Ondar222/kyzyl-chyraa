import {FaChessQueen} from 'react-icons/fa'
import {VscTypeHierarchySub} from 'react-icons/vsc'
import {PageName} from "../../components/PageName/PageName";
import Head from "next/head";
import {LeftMenu, MenuItem, MobileMenu, MobileMenuItem} from "../../components/LeftMenu";
import {BsFillArrowDownCircleFill} from "react-icons/bs";
import {GrDocumentText} from "react-icons/gr";

const Functions = () => {
    return (
        <>
            <Head>
                <title>Функции Полномочного представительства Республики Тыва в г. Москве</title>
            </Head>
            <div className="flex items-center justify-between">
                <PageName title='Функции Полномочного представительства'/>
                <MobileMenu className="md:hidden">
                    <MobileMenuItem title={'Направления работы'} url={'/activity/main-activity'}/>
                    <MobileMenuItem title={'Нормотворческая деятельность государственного органа'}
                                    url={'/projects'}/>
                    <MobileMenuItem title={'Функции государственного органа'} url={'/activity/functions'}/>
                </MobileMenu>
            </div>

            <div className='flex xs:flex-col md:flex-row gap-5 w-full py-3'>

                <LeftMenu>
                    <MenuItem title={'Направления работы'} url={'/activity/main-activity'}
                              icon_function={FaChessQueen()}/>
                    <MenuItem title={'Проекты'} url={'/projects'}
                              icon_function={VscTypeHierarchySub()}/>
                    {/*<MenuItem title={'Функции государственного органа'} url={'/activity/functions'}*/}
                    {/*          icon_function={VscTypeHierarchySub()}/>*/}
                </LeftMenu>

                <div className="flex flex-col gap-5 md:w-9/12">
                    <details>
                        <summary className="flex items-center gap-3 text-xl
                                            cursor-pointer list-none
                                            pb-4">
                            <div>
                                <BsFillArrowDownCircleFill className="animate-bounce"/>
                            </div>

                            <p>Представительство Республики Тыва по указанию Главы Республики Тыва и Правительства
                                Республики
                                Тыва
                                исполняет следующие функции:</p>

                        </summary>
                        <div className='xs:full md:w-full leading-7 [&>p]:pb-3'>

                            <ul className="flex flex-col gap-5 list-disc translate-x-12">
                                <li>представляет интересы Республики Тыва, в том числе Главы Республики Тыва,
                                    Правительства
                                    Республики
                                    Тыва, отдельных органов государственной власти Республики Тыва, во взаимоотношениях
                                    с
                                    органами
                                    государственной власти Российской Федерации и (или) органами управления Российской
                                    Федерации;
                                    участвует в разработке проектов правовых актов органов государственной власти
                                    Российской
                                    Федерации
                                    по вопросам, затрагивающим интересы Республики Тыва;
                                </li>
                                <li>участвует в работе Государственной Думы Федерального Собрания Российской Федерации,
                                    Совета
                                    Федерации
                                    Федерального Собрания Российской Федерации, открытых заседаний Правительства
                                    Российской
                                    Федерации,
                                    заседаний коллегий министерств и ведомств Российской Федерации при рассмотрении
                                    вопросов,
                                    затрагивающих интересы республики;
                                </li>
                                <li>по поручению Главы Республики Тыва, Правительства Республики Тыва информирует
                                    руководителей
                                    Администрации Президента Российской Федерации, Правительства Российской Федерации,
                                    других
                                    органов
                                    государственной власти Российской Федерации и (или) органов управления Российской
                                    Федерации
                                    по
                                    важнейшим вопросам жизнедеятельности республики;
                                </li>
                                <li>осуществляет подготовку и передачу информации оперативного характера Главе
                                    Республики
                                    Тыва,
                                    Правительству Республики Тыва о политических и экономических событиях в органах
                                    государственной
                                    власти Российской Федерации и (или) органах управления Российской Федерации для
                                    принятия
                                    руководством своевременных действий;
                                </li>
                                <li>представляет по просьбе руководителей Администрации Президента Российской Федерации,
                                    Правительства
                                    Российской Федерации, органов государственной власти Российской Федерации и (или)
                                    органов
                                    управления
                                    Российской Федерации дополнительные сведения и оказывает консультативную помощь в
                                    целях
                                    содействия
                                    соответствующим федеральным министерствам и ведомствам в решении вопросов,
                                    касающихся
                                    Республики
                                    Тыва;
                                </li>
                                <li>взаимодействует с Министерством иностранных дел Российской Федерации,
                                    дипломатическими,
                                    торговыми
                                    и
                                    культурными представительствами и миссиями иностранных государств и международных
                                    организаций,
                                    участвует в работе международных комиссий и переговорах по вопросам, затрагивающим
                                    интересы
                                    Республики Тыва, в порядке, установленном законодательством Российской Федерации;
                                </li>
                                <li>оказывает содействие в выполнении договоров и соглашений, заключенных Республикой
                                    Тыва с
                                    другими
                                    регионами России и иностранными государствами, проведении мероприятий по дальнейшему
                                    расширению
                                    и
                                    укреплению экономических, научных и культурных связей Республики Тыва с указанными
                                    государствами
                                    и
                                    регионами;
                                </li>
                                <li>содействует в развитии межрегиональных, внешнеэкономических связей Республики Тыва,
                                    привлечении в
                                    республику финансовых и инвестиционных средств, передовых технологий;
                                    взаимодействует с органами государственной власти субъектов Российской Федерации и
                                    их
                                    представителями;
                                </li>
                                <li>содействует в выполнении служебных заданий представителям органов государственной
                                    власти
                                    и
                                    органов управления Республики Тыва, командированным в г. Москву;
                                </li>
                                <li>организует работу по защите бюджетных заявок Правительства Республики Тыва на
                                    финансирование
                                    мероприятий, включаемых в государственные программы Российской Федерации;
                                    выполняет отдельные служебные поручения Главы Республики Тыва и Правительства
                                    Республики
                                    Тыва;
                                    приобретает в интересах республики имущество, права на имущество в соответствии с
                                    действующим
                                    законодательством;
                                </li>
                                <li>проводит совещания с участием руководителей (или их представителей) органов
                                    государственной
                                    власти и
                                    органов управления Республики Тыва с привлечением при необходимости представителей
                                    организаций
                                    г.
                                    Москвы и других регионов, имеющих договорные обязательства с Республикой Тыва, с
                                    целью
                                    выполнения
                                    поручений Главы Республики Тыва и Правительства Республики Тыва, служебных заданий
                                    лиц,
                                    командированных в г. Москву;
                                </li>
                                <li>заслушивает отчеты представителей органов исполнительной власти Республики Тыва,
                                    командированных
                                    в
                                    г. Москву, о выполнении ими служебных заданий;
                                </li>
                                <li>содействует в оперативной доставке документов, направляемых Главой Республики Тыва и
                                    Правительством
                                    Республики Тыва в федеральные органы государственной власти;
                                </li>
                                <li>содействует студентам и аспирантам из Республики Тыва, обучающимся в г. Москве;
                                    в пределах своих полномочий оказывает поддержку (по возможности) гражданам,
                                    проживающим
                                    в
                                    республике, оказавшимся в непредвиденной ситуации в г. Москве, оказывает им
                                    консультативную
                                    и
                                    иную
                                    помощь;
                                </li>
                                <li>содействует в решении вопросов, связанных с выездом в командировку в иностранные
                                    государства,
                                    должностным лицам и официальным делегациям Республики Тыва;
                                </li>
                                <li>взаимодействует со средствами массовой информации Российской Федерации в части
                                    формирования
                                    и
                                    поддержания положительного имиджа Республики Тыва, освещения вопросов
                                    социально-экономического
                                    развития республики;
                                </li>
                                <li>выполняет иные задачи и функции по поручению Главы Республики Тыва и Правительства
                                    Республики
                                    Тыва.
                                </li>
                            </ul>
                        </div>
                    </details>


                    <details className="">
                        <summary className="flex items-center gap-3 text-xl
                                            cursor-pointer list-none
                                            pb-4">
                            <div>
                                <BsFillArrowDownCircleFill className="animate-bounce"/>
                            </div>
                            Перечень законов и иных нормативно-правовых актов, определяющих полномочия, задачи, функции
                            государственного органа
                        </summary>
                        <div className="flex flex-col gap-5 items-start translate-x-12">
                            <button
                                className=" flex items-center gap-3 text-left cursor-pointer text-xl hover:text-blue-900">
                                <div>
                                    <GrDocumentText/>
                                </div>
                                Постановление Правительства Республики Тыва от 31 октября 2007 года № 976 «Об
                                утверждении
                                Положения о Полномочном представительстве Республики Тыва в г. Москве»;
                            </button>
                            <button
                                className=" flex items-center gap-3 text-left cursor-pointer text-xl hover:text-blue-900">
                                <div>
                                    <GrDocumentText/>
                                </div>
                                Постановление Правительства Республики Тыва от 29 декабря 2007 года № 1104 «О порядке
                                взаимодействия органов исполнительной власти Республики Тыва с Полномочным
                                представительством Республики Тыва в г. Москве»;
                            </button>
                            <button
                                className=" flex items-center gap-3 text-left cursor-pointer text-xl hover:text-blue-900">
                                <div>
                                    <GrDocumentText/>
                                </div>
                                Постановление Правительства Республики Тыва от 26 мая 2014 года № 218 «Об утверждении
                                Положения о порядке формирования, защиты предложений и бюджетных заявок на участие
                                Республики Тыва в государственных программах Российской Федерации, федеральных целевых
                                программах и федеральной адресной инвестиционной программе».
                            </button>
                        </div>
                    </details>
                </div>

            </div>
        </>
    )
}

export default Functions