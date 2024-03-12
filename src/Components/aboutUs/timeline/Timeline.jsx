import './Timeline.css';
import HCard from '../../HeaderCard/HCard';
import TimelineData from './timelineData';


const TimelineCard = (content) => {
    return (
        <>
            <div className="timeline ">
                <div className="timeline-content">
                    <h3 className="title" style={{ backgroundColor: content.backgroundColor }}> {content.established} </h3>
                    <p className="description">
                        {content.establishedDescription}
                    </p>
                    <div className="timeline-year">{content.establishedYear}</div>
                </div>
            </div>
        </>
    )
}

export default function Timeline() {
    return (
        <>
            <div className="timeline-container">
                <div className='timeline-heading'>
                    <HCard head={"OUR STORY"}></HCard> <br />
                </div>
                <div className=" p-0 my-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-timeline">
                                {TimelineData.map((data, key) => {
                                    return <TimelineCard {...data} key={key} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}; 