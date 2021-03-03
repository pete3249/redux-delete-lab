import React from 'react';
import Band from './Band';

const Bands = (props) => {
    const bandz = props.bands.map(band => <Band key={band.id} name={band.name} id={band.id} deleteBand={props.deleteBand}/>)
    return (
        <div>
          {bandz}
        </div>
      )
}

export default Bands;
