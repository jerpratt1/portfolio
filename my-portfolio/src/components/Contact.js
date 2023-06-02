import EmailForm from "./EmailForm";


export default function Contact() {
    return (
        <section id="contact">
            <h1>Contact</h1>
            <br/>
            <span>Please feel free to reach out to me on <a href="https://www.linkedin.com/in/jeremy-pratt/" target="_blank" rel="noreferrer">LinkedIn</a>.</span>
            <p>You can also reach me via email by the form below:</p>
            < EmailForm/>
        </section>
        
    )
}