import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { CodePage } from "../components/CodePage/CodePage";
import NotFound from "./NotFound";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../utils/hooks/useRedux";
import { AppStatus } from "../utils/types/types";
import { LoaderCom } from "../components/CompMini/Loader/LoaderCom";
import { useGetStatus } from "../utils/hooks/useGetStatus";

const CodePageContent = () => {
  const { status, loader } = useAppSelector((store) => store.cardSlice);
  const { applicationId } = useParams();
  const offers = JSON.parse(localStorage.getItem("offers")!);
  const sign = JSON.parse(localStorage.getItem("postSign")!);
  const id = offers ? offers[0].applicationId : null;
  useGetStatus();
  if (loader) {
    return <LoaderCom />;
  }
  // if (
  //     (id && id !== Number(applicationId)) ||
  //     !id ||
  //     (status !== AppStatus.DOCUMENT_CREATED &&
  //         status !== AppStatus.CREDIT_ISSUED) ||
  //     !sign
  // ) {
  //     return <NotFound />;
  // }
  return (
    <>
      <div>
        <Header />
        <CodePage />
        <Footer />
      </div>
    </>
  );
};
export default CodePageContent;
