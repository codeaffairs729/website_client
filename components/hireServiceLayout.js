import Header from "../pages/includes/header";
import Footer from "../pages/includes/footer";

const HireServiceLayout = ({
  bannerComponent,
  contentHeader,
  contentHeader1,
  content1,
  content2,
  content3,
  content4,
  content5,
  content6,
  content7,
}) => {
  return (
    <>
      <Header />
      <div className="hire-container">
        {contentHeader && contentHeader()}
        {contentHeader1 && contentHeader1()}
      </div>
      {bannerComponent()}
      <div className="hire-container"></div>
      {content4 && content4()}
      <div className="hire-container"></div>
      {content5 && content5()}
      <div className="hire-container hire-container-body-content">
        <div className="hire-container-body-left-content">
          <div className="hire-team-c1 hire-container-body-left-content1">
            {content1 && content1()}
          </div>
          <div className="hire-team-c1 hire-container-body-left-content2">
            {content2 && content2()}
          </div>
        </div>

        {content3 && content3()}
      </div>
      <div className="hire-container">{content7 && content7()}</div>
      <div>{content6 && content6()}</div>
      <Footer />
    </>
  );
};

export default HireServiceLayout;
