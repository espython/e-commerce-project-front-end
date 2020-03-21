import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
// import { ApolloProvider } from 'react-apollo';

import Layout from '../components/Layout';
import WithData from '../lib/withData';

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
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    );
  }
}

export default WithData(MainApp);
