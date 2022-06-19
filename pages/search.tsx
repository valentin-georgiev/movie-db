import { wrapper, SagaStore } from "@project/store";
import { END } from "redux-saga";

const Search = () => {
    return (
        <div>search page</div>
    )
}

export default Search;

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
    store.dispatch(END);

    await (store as SagaStore).sagaTask.toPromise();

    return { props: {} };
})