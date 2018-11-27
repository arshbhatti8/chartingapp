import React from 'react';
import * as d3 from 'd3';

import Slice from './slice';

const LabeledArc = (props) => {
    let {data, innerRadius, outerRadius, cornerRadius, padAngle, percentages} = props;
    let pie = d3.pie();
    let interpolate = d3.interpolateRgb("#6242f4", "#bc3358");


    return (
        pie(data).map((value, index) => {
            console.log(value);
            let sliceColor = interpolate(index / (pie.length));
            return (
                <Slice
                    key={index}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    cornerRadius={cornerRadius}
                    padAngle={padAngle}
                    value={value}
                    label={percentages[index]}
                    fill={sliceColor}
                />
            )
        })


    )


};

export default LabeledArc;
