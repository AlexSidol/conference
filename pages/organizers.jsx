import Breadcrumbs from "@/components/Breadcrumbs";
import Organizers from "../components/Organizers";
import imgUrl from "../public/assets/img/about-header.jpg";

function organizers() {
  return (
    <>
      <Breadcrumbs imgUrl={imgUrl.src} way="Організатори" />
      <Organizers />
    </>
  );
}

export default organizers;
