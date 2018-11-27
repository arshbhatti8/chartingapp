import React, {Component} from 'react';
import * as d3 from 'd3';

import Slice from './slice';

class LabeledArc extends Component {

    constructor() {
        super();

    }

    renderSlice = (value, i) => {

    };

    render() {
        let {data, innerRadius, outerRadius, cornerRadius, padAngle} = this.props;
        let pie = d3.pie();
        let interpolate = d3.interpolateRgb("#eaaf79","#bc3358");
        return (
            pie(data).map((value, index) => {
                let sliceColor = interpolate(index/ (pie.length));
                return (
                    <Slice
                        key={index}
                        innerRadius={innerRadius}
                        outerRadius={outerRadius}
                        cornerRadius={cornerRadius}
                        padAngle={padAngle}
                        value={value}
                        label={value.data}
                        fill={sliceColor}
                    />
                )
            })


        )
    }


}

export default LabeledArc;
