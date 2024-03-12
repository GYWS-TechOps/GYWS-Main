import Card from './Card';
import './Report.css';
import data from './reportData';
import HCard from '../../HeaderCard/HCard';

export default function ReportContainer() {
    
    return (
        <>
            <div className="report_container">
            <HCard head={"Reports"}></HCard>

                <div className="report_cards_container">
                    {data.map((data, index) => (
                        <Card key={index} data={data} />
                    ))}
                </div>
            </div>
        </>
    )
}