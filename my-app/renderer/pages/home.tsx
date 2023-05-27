import Head from "next/head";
import Link from "next/link";

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="grid grid-col-1 text-2xl w-full text-center">
        <main className="my-5">
          <h2 className="max-w-xl mx-auto">Автоматизоване робоче місце головного спеціаліста управління технічного
            нагляду, охорони праці та пожежної
            безпеки</h2>
          <Link href="/signup">
            <a
              className="flex mt-5 mx-auto max-w-xl w-full justify-center rounded-md bg-indigo-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">Увійти
              у систему</a>
          </Link>
        </main>
      </div>
    </>
  );
}

export default Home;
