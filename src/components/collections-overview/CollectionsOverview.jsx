import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collections-overview.styles.scss';

import CollectionPreview from '../collection-preview/CollectionPreview';
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
            {
                collections.map(({ id, ...otherCollectionsProps }) => (
                    <CollectionPreview key={id} {...otherCollectionsProps} />
                ))
            }
        </div>
    )
};

const mapStatetoProps = createStructuredSelector({
    collections: selectCollectionForPreview,
})

export default connect(mapStatetoProps)(CollectionsOverview);