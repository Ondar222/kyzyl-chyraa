import {PageName} from "../../components/PageName/PageName"
import {VacancyCard} from "../../components/Vacancy/Vacancy"
import {LeftMenu, MenuItem, MobileMenu, MobileMenuItem} from "../../components/LeftMenu";




const Vacancy = () => {
    return (
        <div className="text-2xl">

            <div>
                <PageName title='Государственная гражданская служба'/>
                <MobileMenu className="xs:block md:hidden">
                    <MobileMenuItem url='civilservice/vacancies'
                                    title="Сведения о вакантных должностях государственной гражданской службы"/>
                    <MobileMenuItem url='civilservice/requirements'
                                    title="Квалификационные требования к кандидатам на замещение вакантных должностей государственной гражданской службы"/>
                    <MobileMenuItem url='civilservice/results'
                                    title="Условия и результаты конкурсов на замещение вакантных должностей государственной гражданской службы"/>
                </MobileMenu>
            </div>

            <div className="flex flex-row gap-5">
                <LeftMenu>
                    <MenuItem url='/civilservice/vacancies'
                              title="Сведения о вакантных должностях государственной гражданской службы"/>
                    {/*<MenuItem url='/civilservice/requirements'*/}
                    {/*          title="Квалификационные требования к кандидатам на замещение вакантных должностей государственной гражданской службы"/>*/}
                    {/*<MenuItem url='/civilservice/results'*/}
                    {/*          title="Условия и результаты конкурсов на замещение вакантных должностей государственной гражданской службы"/>*/}
                </LeftMenu>

                <div className="leading-7 [&>p]:pb-3 md:w-9/12">
                <span className="">
                    <p className="">
                        Государственная гражданская служба Республики Тыва – вид государственной службы, представляющей собой
                        профессиональную служебную деятельность граждан Российской Федерации на должностях государственной
                        гражданской службы Республики Тыва по обеспечению исполнения полномочий государственных органов
                        Республики
                        Тыва, лиц, замещающих государственные должности Республики Тыва (включая нахождение в кадровом резерве и
                        другие случаи).
                    </p>
                </span>


                    <p>Государственная гражданская служба Республики Тыва является составной частью государственной
                        гражданской
                        службы Российской Федерации.</p>

                    <ul className="list-decimal pl-3 text-lg">
                        <h4>Принципами гражданской службы являются:</h4>
                        <li>приоритет прав и свобод человека и гражданина;</li>
                        <li>единство правовых и организационных основ федеральной гражданской службы и гражданской
                            службы субъектов
                            Российской Федерации;
                        </li>
                        <li>равный доступ граждан, владеющих государственным языком Российской Федерации, к гражданской
                            службе и
                            равные условия ее прохождения независимо от пола, расы, национальности, происхождения,
                            имущественного и
                            должностного положения, места жительства, отношения к религии, убеждений, принадлежности к
                            общественным
                            объединениям, а также от других обстоятельств, не связанных с профессиональными и деловыми
                            качествами
                            гражданского служащего;
                        </li>
                        <li>профессионализм и компетентность гражданских служащих;</li>
                        <li>стабильность гражданской службы;</li>
                        <li>доступность информации о гражданской службе;</li>
                        <li>взаимодействие с общественными объединениями и гражданами;</li>
                        <li>защищенность гражданских служащих от неправомерного вмешательства в их профессиональную
                            служебную
                            деятельность.
                        </li>
                    </ul>

                    <ul className="list-decimal py-3 pl-3 text-lg">
                        <h4>Регулирование отношений, связанных с гражданской службой, осуществляется:</h4>
                        <li>Конституцией Российской Федерации;</li>
                        <li>Федеральным законом «О системе государственной службы Российской Федерации» и «О
                            государственной
                            гражданской службе Российской Федерации»;
                        </li>
                        <li>другими федеральными законами, в том числе федеральными законами, регулирующими особенности
                            прохождения
                            гражданской службы;
                        </li>
                        <li>указами Президента Российской Федерации;</li>
                        <li>постановлениями Правительства Российской Федерации;</li>
                        <li>нормативными правовыми актами федеральных органов исполнительной власти;</li>
                        <li>Конституцией Республики Тыва, Законом Республики Тыва от 21.04.2006 г. № 1739 ВХ-1 «О
                            вопросах
                            государственной гражданской службы Республики Тыва», иными нормативными правовыми актами
                            Республики Тыва.
                        </li>
                    </ul>

                    <p>На государственную гражданскую службу (далее гражданская служба) вправе поступать граждане
                        Российской
                        Федерации, достигшие 18 лет, владеющие государственным языком Российской Федерации и
                        соответствующие
                        квалификационным требованиям, установленным Указом Президента Российской Федерации от 27.09.2005
                        №
                        1131 «О
                        квалификационных требованиях к стажу государственной гражданской службы (государственной службы
                        иных
                        видов)
                        или стажу работы по специальности для федеральных государственных гражданских служащих».
                        Поступление гражданина на гражданскую службу для замещения должности гражданской службы или
                        замещение
                        гражданским служащим другой должности осуществляется по результатам конкурса. Конкурс
                        заключается в
                        оценке
                        профессионального уровня претендентов на замещение должности гражданской службы, их соответствия
                        установленным квалификационным требованиям к должности гражданской службы и проводится в
                        соответствии с
                        порядком, установленным Указом Президента Российской Федерации от 01.02.2005 № 112 «О конкурсе
                        на
                        замещение
                        вакантной должности государственной гражданской службы Российской Федерации».</p>

                    <ul className="list-decimal py-3 pl-3 text-lg">
                        <h4>Конкурс не проводится:</h4>
                        <li>при назначении на замещаемые на определенный срок полномочий должности гражданской службы
                            категорий
                            «руководители» и «помощники (советники)»;
                        </li>
                        <li>при заключении срочного служебного контракта;</li>
                        <li>при назначении на должность гражданской службы (гражданина), состоящего в кадровом резерве,
                            сформированном
                            на конкурсной основе.
                        </li>
                    </ul>
                    <ul className="list-decimal py-3 pl-3 text-lg">
                        <h4>Конкурс может не проводиться:</h4>
                        <li>при назначении на отдельные должности гражданской службы, исполнение должностных
                            обязанностей по
                            которым
                            связано с использованием сведений, составляющих государственную тайну;
                        </li>
                        <li>по решению представителя нанимателя конкурс может не проводиться при назначении на должности
                            гражданской
                            службы, относящиеся к группе младших должностей гражданской службы.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Vacancy