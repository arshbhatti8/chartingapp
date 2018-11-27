import React , {Component} from 'react';
import LabeledArc from './labeledArc';

class PieChart extends Component {

    constructor(){
        super();
        this.height= 600;
        this.width= 600;
        this.state={
            dealStage1:"",
            dealStage2:"",
            dealStage1Number:"",
            dealStage2Number:""
        }

    }
    async componentWillMount(){
        const res = await fetch('http://www.mocky.io/v2/5bfdb8e23100007d002cfacd');
        const jsonData = await res.json();
        const dealStage1 = jsonData.filter(deal=>deal.deal_stage===1);
        const dealStage2 = jsonData.filter(deal=>deal.deal_stage===2);
        const dealStage1Number = dealStage1.length;
        const dealStage2Number = dealStage2.length;
        this.setState({
            dealStage1,
            dealStage2,
            dealStage1Number,
            dealStage2Number
        });
    }

    render(){
        let minViewportSize = Math.min(this.width, this.height);
        let radius = (minViewportSize * .6) / 2;
        let data=[this.state.dealStage1Number,this.state.dealStage2Number];
        const totalNumber = data.reduce((a,b)=>a+b,0);
        const percentages = [`Deal Stage 1: ${Math.floor(this.state.dealStage1Number*100/totalNumber)}%`,
            `Deal Stage 2: ${Math.floor(this.state.dealStage2Number*100/totalNumber)}%`];

        return(
            <svg height={this.height} width={this.height}>
                <g transform={`translate(${this.width/2},${this.height/2})`}>
                    <LabeledArc
                        innerRadius={radius * .35}
                        outerRadius={radius}
                        cornerRadius={7}
                        padAngle={.02}
                        data={data}
                        totalNumber={totalNumber}
                        percentages={percentages}/>
                </g>
            </svg>

        );
    }
}

export default PieChart