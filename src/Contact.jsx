export default function Contact(props) {
    return (
        <>
        <div className="card">
            <img src={props.img} />
            <h3>{props.name}</h3>
            <p>{props.title}</p>
        </div>
        </>
    )
}