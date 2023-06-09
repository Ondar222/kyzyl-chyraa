import Image from "next/image";
import {unixTimeConverter} from "../functions/unixTimeConverter";
import Link from "next/link";
import React from "react";

const PostCard = (params) => {

    if (!params) {
        return <h3>Empty post</h3>
    } else {
        return (
            <div className="flex xs:flex-col md:flex-row border-2 rounded-r" key={params.id}>

                {/*<div className='block sm:min-w-[calc(200px)] md:min-w-[calc(400px)]'>*/}
                {/*    <Image alt='some' src={params.preview_image} width={300} height={200} layout="responsive"*/}
                {/*           objectFit="cover" className='dark:grayscale'/>*/}
                {/*</div>*/}

                <div className="flex flex-col justify-between gap-3 p-3 w-full">
                    <div className="">
                        <h4 className="font-bold">{params.title}</h4>
                    </div>
                    <p>{params.news_preview}</p>

                    <div className="flex flex-row items-center justify-between">

                        <div className="flex gap-2">
                            <p className="font-bold">Дата публикации:</p>
                            {unixTimeConverter(params.createdAt)}
                        </div>

                        <Link href={`/news/${params.id}`}>
                            <a className="button dark:bg-gray-500">
                                Читать
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCard