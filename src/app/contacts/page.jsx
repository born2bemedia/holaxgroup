import "@/styles/base.scss";
import "@/styles/contacts.scss";
import ContactsHero from "./_components/ContactsHero";
import ContactsMain from "./_components/ContactsMain";


export const metadata = {
    title: "",
    description:
        "",
    openGraph: {
        title: "",
        description:
            ".",
        images: "",
    },
};

export default function Contacts() {
    return (
        <div className="contacts">
            <ContactsHero />
            <ContactsMain />
        </div>
    );
}
