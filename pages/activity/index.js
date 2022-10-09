import { FaChessQueen } from 'react-icons/fa'
import { VscTypeHierarchySub } from 'react-icons/vsc'
import parser from 'html-react-parser'
import { PageName } from "../../components/PageName/PageName";
import Head from "next/head";
import { LeftMenu, MenuItem, MobileMenu, MobileMenuItem } from "../../components/LeftMenu";

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/main-activity-page?populate=*`)
    const content = await res.json()

    return {
        props: {
            content: content.data
        }
    }
}

export default function Activity({ content }) {
    return (
        <div className="">
            <Head>
                <title>Деятельность</title>
            </Head>

            <div className="flex items-center justify-between">
                <PageName title='Деятельность' />
                <MobileMenu className="md:hidden">
                    <MobileMenuItem title={'Направления работы'} url={'/activity/main-activity'} />
                    <MobileMenuItem title={'Нормотворческая деятельность государственного органа'}
                        url={'/projects'} />
                    <MobileMenuItem title={'Функции государственного органа'} url={'/activity/functions'} />
                </MobileMenu>
            </div>

            <div className='flex xs:flex-col md:flex-row gap-5 w-full py-3'>

                <LeftMenu>
                    <MenuItem title={'Направления работы'} url={'/activity/main-activity'}
                        icon_function={FaChessQueen()} />
                    <MenuItem title={'Проекты'} url={'/projects'}
                        icon_function={VscTypeHierarchySub()} />
                    {/*<MenuItem title={'Функции государственного органа'} url={'/activity/functions'}*/}
                    {/*          icon_function={VscTypeHierarchySub()}/>*/}
                </LeftMenu>

                <div className='xs:full md:w-9/12 leading-7 [&>p]:pb-3'>
                    <div>
                        <p>
                            Администрация района осуществляет свою деятельность в соответствии с общепризнанными принципами и нормами международного права,
                            международными договорами Российской Федерации, Конституцией Российской Федерации, федеральными конституционными законами, федеральными законами,
                            указами и распоряжениями Президента Российской Федерации, постановлениями и распоряжениями Правительства Российской Федерации, иными нормативными
                            правовыми актами федеральных органов исполнительной власти, Уставом (Основным Законом) Республики Тыва, законами и иными нормативными правовыми
                            актами Республики Тыва, Уставом городского округа - сумона Кызыл-Чыраа Республики Тыва, решениями, принятыми на местном референдуме,
                            иными муниципальными правовыми актами сумона Кызыл-Чыраа, в том числе настоящим Положением.
                            участвует в разработке и реализации документов стратегического планирования сумона Кызыл-Чыраа;
                        </p>

                    </div>
                    {/* {parser(content.content)} */}
                </div>
            </div>
        </div>
    )
}