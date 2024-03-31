import Head from 'next/head';

function PageTitle({ title }: { title: string }) {
  return (
    <Head>
      <title>{title ? `${title} | ` : ''}Linkbrary</title>
    </Head>
  );
}

export default PageTitle;
