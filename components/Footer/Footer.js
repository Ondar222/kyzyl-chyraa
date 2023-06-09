import Link from 'next/link'
import {AiFillPhone, AiOutlineMail} from 'react-icons/ai'
import Image from 'next/image'

const Footer = (props) =>
    <footer className="bg-blue-900 dark:bg-gray-200 p-4 font-light">
        <div className="container flex flex-col mx-auto gap-4 text-white dark:text-black">
            <div className="flex flex-wrap justify-between">

                <div className="flex flex-col gap-4">
                    <Link href="/"><a>{props.mincompressedname}</a></Link>
                    <Link href="/"><a>Официальный интернет-ресурс</a></Link>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row items-center gap-3">
                            <AiFillPhone/>{props.phone}
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <AiOutlineMail/>{props.email}
                        </div>
                        <div>
                            <Link className="cursor-pointer" href="https://vk.com/public199929155">
                                <Image alt='some' src="/vk_logo.png" width={30} height={30} className="cursor-pointer dark:grayscale"/>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col justify-between">
                    {/*<Link href="/documents/sample.pdf">*/}
                    {/*    <a>Использование материалов</a>*/}
                    {/*</Link>*/}
                    {/*<Link href="/documents/personal_data.docx">*/}
                    {/*    <a>О персональной информации пользователей</a>*/}
                    {/*</Link>*/}

                    <div className="flex gap-4">
                        {/*<Link className="cursor-pointer" href="https://vk.com/cit_tuva">*/}
                        {/*    <Image alt='some' src="/vk_logo.png" width={30} height={30} className="cursor-pointer dark:grayscale"/>*/}
                        {/*</Link>*/}
                        {/*<Link className="cursor-pointer" href="https://t.me/polpredstvotuva">*/}
                        {/*    <Image alt='some' src="/tg_logo.png" width={30} height={30} className="cursor-pointer dark:grayscale"/>*/}
                        {/*</Link>*/}
                    </div>
                </div>
            </div>

            <hr/>

            {/*<div className="">*/}
            {/*    <p>Все материалы сайта доступны по лицензии: Лицензия на пользование</p>*/}
            {/*</div>*/}
        </div>
    </footer>

export default Footer