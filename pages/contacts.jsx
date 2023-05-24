import Breadcrumbs from "@/components/Breadcrumbs";
import Contacts from "../components/Contacts";
import imgUrl from "../public/assets/img/contact-header.jpg";

function contacts() {
  return (
    <>
      <Breadcrumbs imgUrl={imgUrl.src} way="Контакти" />
      <Contacts />
    </>
  );
}

export default contacts;
