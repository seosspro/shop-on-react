import ContentLoader from 'react-content-loader';

import React from 'react';

function LoadingBlock() {
    return (
        <ContentLoader
            className='guitar-block'
            speed={2}
            width={280}
            height={460}
            viewBox='0 0 280 460'
            backgroundColor='#f3f3f3'
            foregroundColor='#ecebeb'
        >
            <rect x='609' y='60' rx='3' ry='3' width='88' height='6' />
            <rect x='718' y='115' rx='3' ry='3' width='52' height='6' />
            <rect x='724' y='109' rx='3' ry='3' width='410' height='6' />
            <rect x='749' y='119' rx='3' ry='3' width='380' height='6' />
            <rect x='915' y='133' rx='3' ry='3' width='178' height='6' />
            <circle cx='546' cy='250' r='64' />
            <circle cx='631' cy='398' r='140' />
            <circle cx='653' cy='269' r='25' />
            <circle cx='695' cy='280' r='58' />
            <circle cx='763' cy='342' r='45' />
            <rect x='30' y='43' rx='0' ry='0' width='222' height='230' />
            <rect x='166' y='158' rx='0' ry='0' width='15' height='10' />
            <rect x='656' y='73' rx='0' ry='0' width='8' height='34' />
            <rect x='664' y='44' rx='0' ry='0' width='112' height='306' />
            <rect x='626' y='126' rx='0' ry='0' width='231' height='35' />
            <rect x='661' y='327' rx='0' ry='0' width='674' height='70' />
            <rect x='752' y='341' rx='0' ry='0' width='269' height='10' />
            <rect x='170' y='315' rx='0' ry='0' width='2' height='12' />
            <rect x='159' y='311' rx='0' ry='0' width='1' height='27' />
            <rect x='60' y='340' rx='0' ry='0' width='45' height='0' />
            <rect x='2' y='343' rx='0' ry='0' width='16' height='1' />
            <rect x='6' y='319' rx='16' ry='16' width='270' height='42' />
            <circle cx='42' cy='412' r='32' />
            <rect x='100' y='386' rx='0' ry='0' width='170' height='50' />
            <rect x='9' y='288' rx='16' ry='16' width='257' height='21' />
        </ContentLoader>
    );
}

export default LoadingBlock;
