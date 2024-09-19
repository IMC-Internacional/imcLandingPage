
import "./ContactDetails.css"

const ContactDetails = ({handleClickDetailsContainer, detailsContainerState}) => {

    return(
            <div className={!detailsContainerState ? "contactDetailsContainerInactive" : "contactDetailsContainer"}>
                <div className="XContainer" onClick={handleClickDetailsContainer}>
                    <h1 className="XButton">X</h1>
                </div>
                <div className="contacDetailsInternalContainer">
                    <div className="textContainer">
                            <p>IMC USA</p>
                            <p>800 Brickel Avenue, Suite 800</p>
                            <p>Miami, FL 33131</p>
                            <p>+1 (305) 371.2580</p>
                            <p>gimai@imcicorp.com</p>
                            <p>CEO</p>
                    </div>

                    <div className="textContainer">
                            <p>IMC BRASIL</p>
                            <p>Rua Humberto I, 236 - 6° andar</p>
                            <p>Säo Paulo, SP</p>
                            <p>+55 (11) 5549.8066</p>
                            <p>eduardo@imcicorp.com</p>
                            <p>Consultor Senior</p>
                    </div>
                </div>

            </div>

    )
}

export default ContactDetails