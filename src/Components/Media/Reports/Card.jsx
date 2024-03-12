export default function Card({ data }) {

    const button_array = data.button;

    return (
        <>
            <div className={`card ${data.class}`}>
                <div className="card_header">
                    <h2>{data.title}</h2>
                </div>
                <div className="card_body">
                    <p>{data.summary} </p>
                </div>
                <div className="button_container">
                    {button_array.map((button, index) => (
                        <div key={index} >
                            <a href={button.link} target="_blank" rel="noreferrer" >
                                <button className="button">{button.interval}</button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}