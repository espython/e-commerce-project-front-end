import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import Head from 'next/head';
// import { ApolloProvider } from 'react-apollo';

import Layout from '../components/Layout';
import WithData from '../lib/withData';
import '../public/styles/bootstrap.min.css';

class MainApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Layout>
          <Head>
            <meta charSet="utf-8" />
            <title>E-commerce</title>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500,600,600i,700&display=swap"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Satisfy&display=swap"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    );
  }
}

export default WithData(MainApp);
