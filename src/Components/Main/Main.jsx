import "./Main.css"
import ContactDetails from "../ContactDetails/ContactDetalis"
import { useState } from "react"

const Main = () => {
    const [detailsContainerState, setSDetailsContainerState] = useState(false)

    const handleClickDetailsContainer = () => {
        setSDetailsContainerState(!detailsContainerState)
    }

    return(
        <div className="main">
            <ContactDetails handleClickDetailsContainer={handleClickDetailsContainer} detailsContainerState={detailsContainerState} />
            <div className="videoContainer">
                <iframe src="/INSTITUCIONAL 20-5.mp4" className="firstVideo"></iframe>
                <h1>Nosotros</h1>
            </div>
            <img src="/logoIMC.png" alt="" className="imgLogo" onClick={handleClickDetailsContainer}/>
            <div className="videoContainer">
                    <h1>Instructores de TPM</h1>
                <iframe src="VIDEO INSTRUCTORES FINAL.mp4" className="firstVideo"></iframe>
            </div>
            <img src="/logoContactBoy.png" alt="" className="contactLogo" onClick={handleClickDetailsContainer}/>
          
        </div>
    )
}

export default Main