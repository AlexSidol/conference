import Breadcrumbs from "@/components/Breadcrumbs";
import Participation from "../components/Participation";
import imgUrl from "../public/assets/img/about-header.jpg";

function participationTerms() {
  return (
    <>
      <Breadcrumbs imgUrl={imgUrl.src} way="Умови участі" />
      <Participation />
    </>
  );
}

export default participationTerms;
