import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/MenuItem';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';


const Directory = ({sections}) => {
        return (
            <div className="directory-menu">
                {
                    sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem
                            key={id}
                            {...otherSectionProps}
                        />
                    ))
                }
            </div>
        )
}

const mapStatetoProps = createStructuredSelector({
    sections: selectDirectorySections,
})

export default connect(mapStatetoProps)(Directory);
