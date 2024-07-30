import Email from "@/public/email_logo";
import Instagram from "@/public/instagram_logo";

const ContactsPage = () => {
  return (
    <main className="flex flex-col justify-start mt-7 align-middle min-h-[80dvh]">
      <section>
        {/* <h1 className="text-4xl font-bold text-center mb-8">Contact</h1> */}
        <div className="text-lg text-center mb-4 flex-col m-auto w-fit">
          If you want to get in touch, you can reach me here:
          <br />
          <a
            href="mailto:benita.vaskelaite@gmail.com"
            target="_blank"
            className="flex flex-row gap-1 h-[28px] items-center mx-auto mt-4 text-lg text-center mb-4 text-balance"
          >
            <Email />
            benita.vaskelaite@gmail.com
          </a>
          <a
            href="https://www.instagram.com/benita_vaskelaite?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            // target="_blank"
            className="flex flex-row gap-1 h-[28px] items-center mx-auto mt-4 text-lg text-center mb-4 text-balance"
          >
            <Instagram />
            benita_vaskelaite
          </a>
        </div>
      </section>
    </main>
  );
};

export default ContactsPage;
