import React , {Component} from 'react';
import * as d3 from 'd3';
import LabeledArc from './labeledArc';
import localData from '../assets/MOCK_DATA.json';

class PieChart extends Component {

    constructor(){
        super();
        this.data = [1,2];
        this.height= 400;
        this.width= 400;

    }
    async componentWillMount(){
        const res = await fetch('http://www.mocky.io/v2/5bfdb8e23100007d002cfacd')
        const jsonData = await res.json();
        this.setState({
            jsonData
        })
    }

    render(){
        let minViewportSize = Math.min(this.width, this.height);
        let radius = (minViewportSize * .6) / 2;
        return(
            <svg height={this.height} width={this.height}>
                <g transform={`translate(${this.width/2},${this.height/2})`}>
                    <LabeledArc
                        innerRadius={radius * .35}
                        outerRadius={radius}
                        cornerRadius={7}
                        padAngle={.02}
                        data={this.data}/>
                </g>
            </svg>

        );
    }
}

export default PieChart