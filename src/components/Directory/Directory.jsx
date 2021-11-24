import React from "react";
import MenuItem from "../Menu-item/Menu-item";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import './directory.scss';

const Directory = ({ sections }) => (  
  <div className='directory-menu'>
    {sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))
    }
  </div>
);

const mapDispatchToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapDispatchToProps)(Directory);
