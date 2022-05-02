import type { NextPage } from 'next';
import { END } from 'redux-saga';
import { wrapper } from '../store/store';
import { TestActions } from '../store/actions/test';

const HomePage: NextPage = () => {
    return <div>Initial project create</div>;
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    const test = store.dispatch(TestActions.testSaga());

    store.dispatch(END);

    await store.sagaTask.toPromise();

    return { props: {} };
});

export default HomePage;

HomePage.displayName = 'HomePage';
HomePage.isHavingSSR = true;
