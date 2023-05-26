import Breadcrumbs from "@/components/Breadcrumbs";
import Program from "../components/Program";
import imgUrl from "../public/assets/img/portfolio-header.jpg";

function program() {
  return (
    <>
      <Breadcrumbs imgUrl={imgUrl.src} way="Програма" />
      <Program />
    </>
  );
}

export default program;
