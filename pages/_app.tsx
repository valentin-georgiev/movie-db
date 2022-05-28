import App from 'next/app';
import Head from 'next/head';
import { END } from 'redux-saga';
import { wrapper } from '../project/store/store';

import Layout from '@components/Layout';
import { SagaStore, App as AppProps } from 'project/types';

import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <meta charSet = 'utf-8' />
            <meta
                httpEquiv = 'x-ua-compatible'
                content = 'ie=edge'
            />
            <title>Movie DB</title>
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
)

MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async (appContext) => {
    const { ctx, Component } = appContext;

    // Canceling sagas if Component doesn't have any page functions and its on the server
    // If component is having SSR
    // It will contain END dispatch and will END current actions as well
    // @ts-ignore -> will fix later
    if (ctx.req && !Component.isHavingSSR) {
        store.dispatch(END);

        await (store as SagaStore).sagaTask.toPromise();
    }

    const pageProps = await App.getInitialProps(appContext);

    return { ...pageProps }
})

export default wrapper.withRedux(MyApp)
