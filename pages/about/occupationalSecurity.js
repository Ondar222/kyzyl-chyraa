import parser from 'html-react-parser'
import { PageName } from '../../components/PageName/PageName'
import Head from 'next/head'
import { LeftMenu, MenuItem, MobileMenu, MobileMenuItem } from "../../components/LeftMenu";
import { FaChessQueen, FaRegWindowMaximize } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { VscTypeHierarchySub } from "react-icons/vsc";
import Link from 'next/link';
import { GrDocumentPdf } from 'react-icons/gr'

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/occupational-security-page?populate=*`)
    const content = await res.json()

    return {
        props: {
            content: content.data
        }
    }
}

const OccupationalSecurity = ({ content }) =>
    <>
        <Head>
            <title>Охрана труда</title>
        </Head>

        <div className="flex xs:flex-col sm:flex-row xs:items-start items-center justify-between py-4">
            <PageName title='Охрана труда' />
            <MobileMenu className="md:hidden">
                <MobileMenuItem url='/management' title='Руководство' />
                <MobileMenuItem url='/about/structure' title='Структура' />
                <MobileMenuItem url='/about/departments' title='Отделы' />
                <MobileMenuItem url='/news' title='Новости' />
                <MobileMenuItem url='/documents' title='Документы' />
                <MobileMenuItem url='/about/occupationalSecurity' title='Охрана труда' />
                <MobileMenuItem url={'/about/anticorruption'} title={'Противодействие коррупции'} />
                <MobileMenuItem url={'/about/antiterror'} title={'Противодействие терроризму'} />
                <MobileMenuItem url={'/vacancy'} title={'Государственная служба'} />
            </MobileMenu>
        </div>

        <div className="flex xs:flex-col md:flex-row gap-5">

            <LeftMenu>
                <MenuItem url='/management' title='Руководство' icon_function={FaChessQueen()} />
                <MenuItem url='/about/structure' title='Структура' icon_function={MdArticle()} />
                <MenuItem url='/about/departments' title='Отделы' icon_function={MdArticle()} />
                <MenuItem url='/news' title='Новости' icon_function={FaRegWindowMaximize()} />
                <MenuItem url='/documents' title='Документы' icon_function={MdArticle()} />
                <MenuItem url='/about/occupationalSecurity' title='Охрана труда' icon_function={MdArticle()} />
                <MenuItem url={'/about/anticorruption'} title={'Противодействие коррупции'}
                    icon_function={VscTypeHierarchySub()} />
                <MenuItem url={'/about/antiterror'} title={'Противодействие терроризму'}
                    icon_function={VscTypeHierarchySub()} />
                <MenuItem url={'/civilservice'} title={'Государственная служба'}
                    icon_function={VscTypeHierarchySub()} />
            </LeftMenu>


            <div className="xs:w-full md:w-9/12">
                <div className='text-2xl'>
                    <h2>НПА в области охраны труда</h2>
                </div>

                <div className='flex flex-row items-center gap-2 text-lg hover:text-blue-900'>
                    <div className='w-14 h-14'>
                        <GrDocumentPdf className='w-full h-full' />
                    </div>
                    <div className='text-2xl'>
                        <Link href={`${process.env.APIpath}/uploads/ohrana_truda_aae87ddc1f.pdf?updated_at=2022-10-09T14:29:04.388Z`} className="hover:text-blue-900">
                            <a className='hover:text-blue-900'>Об утверждении правил внутренного трудового распорядка администрации сельского поселения сумона Кызыл-Чыраанский</a>
                        </Link>
                    </div>

                </div>

                {/* {parser(content?.content)} */}
            </div>
        </div>
    </>

export default OccupationalSecurity