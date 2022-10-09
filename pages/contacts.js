import parser from 'html-react-parser'
import Head from 'next/head'
import { PageName } from "../components/PageName/PageName";

export async function getServerSideProps() {
  const res = await fetch(`${process.env.APIpath}/api/contact`)
  const contact = await res.json()

  return {
    props: {
      contact: contact.data,
    }
  }
}

export default function Contacts({ contact }) {
  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>
      <PageName title="Контакты" />

      <div className="xs:w-full md:w-9/12">

        <div className='text-left'>
          {parser(contact.content)}
        </div>
        <div className="flex flex-col gap-5 text-xl font-semibold">
          <p>Администрация сумона Кызыл-Чыраа</p>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A59e444911274c015ceaf889f303b9db71e919e7fbb79ee553b0ffe983d5c09bd&amp;source=constructor"
            width="100%" height="400"></iframe>
        </div>

      </div>
    </>
  )
}