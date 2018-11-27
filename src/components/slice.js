import React , {Component} from 'react';
import * as d3 from 'd3';
class Slice extends Component {
    constructor(){
        super();
        this.state={isHovered:false};
    }

    onMouseOver = ()=>{
        this.setState({isHovered:true});
    };

    onMouseOut = ()=>{
        this.setState({isHovered:false});
    };
render(){
    let {innerRadius=0,
        outerRadius,
        cornerRadius,
        padAngle,
        value,
        label,
        fill,
        ...props} = this.props;

    !this.state.isHovered  ? outerRadius=outerRadius: outerRadius*= 1.2;
    console.log(outerRadius);

    let arc=d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .cornerRadius(cornerRadius)
        .padAngle(padAngle);



    return(
        <g
            onMouseOver={this.onMouseOver}
            onMouseOut={this.onMouseOut}
            {...props}>
            <path d={arc(value)} fill={fill}/>
            <text
                transform={`translate(${arc.centroid(value)})`}
                dy=".35em"
                className='label'>
                {label}
            </text>
        </g>

        );
    }
}

export default Slice