import Intro from "../intro";
import AmiiboIsabelle from "../../images/amiibo-isabelle.webp";

export default function HomePage() {

    return(

        <div>
        <h1>Welcome to the Get Amiibo Page!</h1>
        <Intro></Intro>
        <img src={AmiiboIsabelle}></img>
        </div>
    )
}