import { END } from 'redux-saga';
import { wrapper } from 'project/store/store';
import { SagaStore, Page } from 'project/types';
import { TestActions } from '@store/actions/test';

import PageIntro from '@components/Base/PageIntro';

const HomePage: Page = () => {
    return <PageIntro />
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    store.dispatch(TestActions.testSaga());

    store.dispatch(END);

    await (store as SagaStore).sagaTask.toPromise();

    return { props: {} };
});

export default HomePage;

HomePage.displayName = 'HomePage';
HomePage.isHavingSSR = true;
