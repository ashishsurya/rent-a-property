import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header';

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push("/rent")
  } , [router])
 
  return (
    <Fragment>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
        <title>Rent &middot; a &middot; Property</title>
      </Head>
      <Header />

      
    </Fragment>
  );
}
