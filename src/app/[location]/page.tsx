import HomeButton from '@/components/HomeButton';
import React from 'react';

type Props = {
    params : {
        location : string;
    }
}

export default function Detail({params} : Props) {
    const name = params.location === 'seoul' ? '서울' : '부산';



    return (
        <div>
            <h1>{name}의 3일 예보</h1>
            <HomeButton />
        </div>
    );
}

