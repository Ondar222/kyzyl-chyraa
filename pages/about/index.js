import {PageName} from "../../components/PageName/PageName";
import parser from 'html-react-parser'
import {FaChessQueen, FaRegWindowMaximize} from 'react-icons/fa'
import {VscTypeHierarchySub} from 'react-icons/vsc'
import {MdArticle} from 'react-icons/md'
import Head from "next/head";
import {LeftMenu, MenuItem, MobileMenu, MobileMenuItem} from "../../components/LeftMenu";
import Link from "next/link";
import Image from "next/image";

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/about?populate=*`)
    const about = await res.json()

    return {
        props: {
            about: about.data,
        }
    }
}

export default function About({about}) {
    return (
        <>
            <Head>
                <title>Об организации</title>
            </Head>

            <div className="flex xs:flex-col sm:flex-row xs:items-start items-center justify-between">
                <PageName title={'Об организации'}/>
                <MobileMenu className="md:hidden">
                    <MobileMenuItem url='/management' title='Руководство'/>
                    <MobileMenuItem url='/about/structure' title='Структура'/>
                    <MobileMenuItem url='/about/departments' title='Отделы'/>
                    <MobileMenuItem url='/news' title='Новости'/>
                    <MobileMenuItem url='/documents' title='Документы'/>
                    <MobileMenuItem url='/about/occupationalSecurity' title='Охрана труда'/>
                    <MobileMenuItem url={'/about/anticorruption'} title={'Противодействие коррупции'}/>
                    <MobileMenuItem url={'/about/antiterror'} title={'Противодействие терроризму'}/>
                    <MobileMenuItem url={'/vacancy'} title={'Государственная служба'}/>
                </MobileMenu>
            </div>

            <div className="flex xs:flex-col md:flex-row gap-5">

                <LeftMenu>
                    <MenuItem url='/management' title='Руководство' icon_function={FaChessQueen()}/>
                    <MenuItem url='/about/structure' title='Структура' icon_function={MdArticle()}/>
                    <MenuItem url='/about/departments' title='Отделы' icon_function={MdArticle()}/>
                    <MenuItem url='/news' title='Новости' icon_function={FaRegWindowMaximize()}/>
                    <MenuItem url='/documents' title='Документы' icon_function={MdArticle()}/>
                    <MenuItem url='/about/occupationalSecurity' title='Охрана труда' icon_function={MdArticle()}/> 
                    <MenuItem url={'/about/anticorruption'} title={'Противодействие коррупции'}
                              icon_function={VscTypeHierarchySub()}/>
                    <MenuItem url={'/about/antiterror'} title={'Противодействие терроризму'}
                              icon_function={VscTypeHierarchySub()}/>
                    <MenuItem url={'/civilservice'} title={'Государственная служба'}
                              icon_function={VscTypeHierarchySub()}/>
                </LeftMenu>


                <div className="xs:w-full md:w-9/12 leading-7 [&>p]:pb-3">

                    {parser(about.content)}

                    <div className="py-6">
                        <Link href={`${process.env.APIpath}${about.files.url}`}>
                            <a className="text-lg font-normal hover:text-blue-900">
                                {about.files.name}
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}