import React from 'react';

import { Route } from 'react-router';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';

const ShopPage = (props) => {
    return(
        <div className="shop-page">
            <Route exact path={`${props.match.path}`} component={CollectionsOverview} />
            <Route path={`${props.match.path}/:collectionId`} component={CollectionPage} />
        </div>        
    )
}

export default ShopPage;

