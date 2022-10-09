import React from 'react';
import Head from 'next/head';
import { PageName } from '../../../components/PageName/PageName';
import { LeftMenu } from '../../../components/LeftMenu';
import { MobileMenu } from '../../../components/LeftMenu';
import { MenuItem } from '../../../components/LeftMenu';
import { MobileMenuItem } from '../../../components/LeftMenu';
import { FaChessQueen, FaRegWindowMaximize } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { VscTypeHierarchySub } from "react-icons/vsc";
import Subordinate from '../../../components/Subordinate/Subordinate';

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/subordinates?populate=*`)
    const data = await res.json()

    return {
        props: {
            subordinates: data.data
        }
    }
}

const Departments = ({ subordinates }) => {
    return (
        <>
            <Head>
                <title>Отделы</title>
            </Head>

            <div>
                <div className="flex xs:flex-col sm:flex-row xs:items-start items-center justify-between py-4">
                    <PageName title='Отделы' />
                    <MobileMenu className="md:hidden">
                        <MobileMenuItem url='/management' title='Руководство'/>
                        <MobileMenuItem url='/about/structure' title='Структура'/>
                        <MobileMenuItem url='/about/departments' title='Отделы'/>
                        <MobileMenuItem url='/news' title='Новости'/>
                        <MobileMenuItem url='/documents' title='Документы'/>
                        {/* <MobileMenuItem url='/about/occupationalSecurity' title='Охрана труда'/> */}
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
                        {/* <MenuItem url='/about/occupationalSecurity' title='Охрана труда' icon_function={MdArticle()}/> */}
                        <MenuItem url={'/about/anticorruption'} title={'Противодействие коррупции'}
                                  icon_function={VscTypeHierarchySub()}/>
                        <MenuItem url={'/about/antiterror'} title={'Противодействие терроризму'}
                                  icon_function={VscTypeHierarchySub()}/>
                        <MenuItem url={'/civilservice'} title={'Государственная служба'}
                                  icon_function={VscTypeHierarchySub()}/>
                    </LeftMenu>


                    <div className="xs:w-full md:w-9/12 flex flex-col gap-5">
                        {
                            subordinates.map(({ id, name, info, image, email, phone }) => {
                                return (
                                    <Subordinate
                                        id={id}
                                        key={id}
                                        title={name}
                                        info={info}
                                        image={image}
                                        email={email}
                                        phone={phone}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Departments;