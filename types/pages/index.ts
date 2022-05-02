import { NextPage } from 'next';
import { AppProps } from 'next/app';

export type Page<P = unknown>= NextPage<P> & {
    isHavingSSR: boolean;
};

export type App = AppProps & Page;