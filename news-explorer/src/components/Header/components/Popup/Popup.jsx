export default function Popup(props) {
    const {onClose, title, children} = props

    return(
        <>
            <div className="popup">
                <div className="popup__container">
                    <button className="popup__close" onClick={onClose}>X</button>
                    <h3 className="popup__title">{title}</h3>
                    {children}
                </div>
            </div>
        </>
    )

}