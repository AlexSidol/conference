import Breadcrumbs from "@/components/Breadcrumbs";
import Archive from "../components/Archive";
import imgUrl from "../public/assets/img/blog-header.jpg";

function archive() {
  return (
    <>
      <Breadcrumbs imgUrl={imgUrl.src} way="Архів" />
      <Archive />
    </>
  );
}

export default archive;
