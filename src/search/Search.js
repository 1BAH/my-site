import React from 'react';
import { useLocation } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import notFound from './img/not-found.png';
import { pages } from './utils';
import textStyles from '../css/Text.module.css';
import basicStyles from '../css/Default.module.css';
import Cards from '../cards/Cards';
import Separator from '../elements/Separator';
import title from '../hooks/title';

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

/**
 * Extremely dumb search - optimisation to be done
 */
const Search = () => {
    const query = useQuery();
    const input = query.get('find');

    title('JK Search');

    const found = Object.keys(pages)
        .filter((el) => el.includes(input))
        .map((el) => pages[el].value);

    let out;

    if (input && found.length) {
        out = (
            <>
                <div className={textStyles.description}>
                    По запросу <div className={textStyles.highlight}>{input}</div> было найдено следующее:
                </div>
                <Cards cards={found} />
            </>
        );
    } else {
        out = <NotFound input={input} />;
    }

    return (
        <>
            {out}
            <Separator />
            <div style={{ textAlign: 'center', margin: '0.75rem' }}>
                <div className={textStyles.pictureDescription}>
                    На данный момент поиск работает на ограниченном числе запросов, поэтому может не выдать нужный ответ.
                </div>
            </div>
        </>
    );
};

const NotFound = ({ input }) => (
    <>
        <h1 className={textStyles.header}>
            По запросу <div className={textStyles.highlight}>{input}</div> ничего не найдено :(
        </h1>
        <Row xs={1} md={3} className="g-4 m-0 justify-content-md-center">
            <img src={notFound} alt="docker" className={basicStyles.picture} />
        </Row>
    </>
);

export default Search;
