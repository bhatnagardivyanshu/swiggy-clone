import React from 'react';
import Card from 'antd/es/card';

const ShowMore = ({count, onClick}) => {
    return (
        <Card bordered={false} onClick={onClick} width="100%" className="restaurant-card-show-more">
            + {count} MORE
        </Card>
    )
}

export default ShowMore;