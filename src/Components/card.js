import './card.css'

export default function Card(props){
    return(
            <span className='card-main'>
                <div className='program'>{props.program}</div>
                <div className='inner-div'>
                    <div>{props.origin}&rarr;{props.dest}</div>
                    <div>
                        <span>2024-07-09 - 2024-10-07</span>
                    </div>
                </div>
                <div className='inner-div'>
                    <div>
                        <span className='bold'>{props.buis_miles==null?"":props.buis_miles}</span>
                        <span>{props.buis_tax==null?"":"+$"+props.buis_tax}</span>
                    </div>
                    <div>Min Buiseness Miles</div>
                </div>
                <div className='inner-div'>
                    <div >
                        <span className='bold'>{props.eco_miles==null?"N/A":props.eco_miles}</span>
                        <span>{props.eco_tax==null?"":"+$"+props.eco_tax}</span>
                    </div>
                    <div>Min Economy Miles</div>
                </div>
                <div className='inner-div'>
                    <div>
                        <span className='bold'>{props.first_miles==null?"N/A":props.first_miles}</span>
                        <span>{props.first_tax==null?"":"+$"+props.first_tax}</span>
                    </div>
                    <div>Min First Miles</div>
                </div>
            </span>
    )
}