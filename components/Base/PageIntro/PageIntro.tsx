import { useState } from "react";
import Input from "../Input";
import Link from "../Link";

import styles from './PageIntro.module.scss';

export const PageIntro: React.FC<{}> = () => {
    const [search, setSearch] = useState<string>('');

    return (
        <div
            className = {styles.intro}
            data-testid = 'Wrapper__Intro'
        >
            <div className = {styles['intro__container']}>
                <h1 data-testid = 'Text__IntroTitle'>
                    welcome
                </h1>
                <p data-testid = 'Text__IntroSubTitle'>
                    Choose from millions of movies, TV shows and people.
                </p>
                <div className = {styles['intro__search']}>
                    <Input
                        className = {styles['intro__search-input']}
                        type = 'text'
                        placeholder = 'Search for a movie, tv show, person...'
                        value = {search}
                        purpose = 'search'
                        onChange = {
                            (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)
                        }
                    />
                    <Link
                        href = {`/search?q=${search}`}
                        className = {styles['intro__search-button']}
                        text = 'search'
                        purpose = 'search'
                    />
                </div>
            </div>
        </div>
    )
}