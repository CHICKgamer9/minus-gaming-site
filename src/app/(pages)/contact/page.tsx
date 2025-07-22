import ContactFrom from "@/components/shared/cards/ContactForm"
import Link from "next/link"

const ContactPage = () => {
    return (
        <div className="w-full overflow-hidden">
            <h1 className="text-3xl px-2 py-3 font-bold text-center">Get in Touch with Minus Gaming</h1>
            <div className="w-full flex justify-evenly px-8 items-center m-3">
                <ContactFrom />
                <div className="bg-[var(--form-bg)] px-18 py-8 flex flex-col rounded-3xl h-165 justify-center text-center gap-4">
                    <h2 className="text-4xl">Other ways to contact us</h2>
                    <Link 
                        className="text-[var(--purpel-text)] underline text-3xl" 
                        href='mailto:gamingsetupsishere@gmail.com'
                    >
                        Email
                    </Link>
                    <Link 
                        className="text-[var(--purpel-text)] underline text-3xl"
                        href="https://x.com/properMinus"
                    >
                        X
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactPage