import React from "react";
import "./styles/global.css";
import ThreeStepsToInstall from "./UI/3-organisms/ThreeStepsToInstall";
import { ANTISPYFEATURES } from "./fixtures/AntiSpyFeatures";
import AntiSpyingFeatureBlock from "./UI/3-organisms/AntiSpyingFeatureBlock";
import ProtectAllDevices from "./UI/3-organisms/ProtectAllDevices/infdex";
import Footer from "./UI/3-organisms/Footer";
import Carousel from "./UI/3-organisms/Carousel";
import ProtectMeNow from "./UI/3-organisms/ProtectMeNow";
import { Header, HeadingWithButton } from "./UI/2-molecules/Header";
import VideoBlock from "./UI/2-molecules/VideoBlock";
import Heading from "./UI/1-atoms/Heading";
import PriceBlock from "./UI/3-organisms/PriceBlock";
import ResponseTime from "./UI/3-organisms/ResponseTime";
import MacIosBlock from "./UI/1-atoms/MacIosBlock";

function App() {
  return (
    <div className={"max-w-[320px] mx-auto"}>
      <HeadingWithButton />
      <div className={"relative"}>
        <Header />
        <ProtectMeNow
          text={
            "Try Clario, a smart anti-spy app that effectively protects your privacy. "
          }
          className={"bg-ghostWhite pt-[54px]"}
        />
      </div>
      <MacIosBlock className={"py-[35px] bg-ghostWhite"} />
      <VideoBlock />
      <div>
        <Heading
          level={2}
          className={
            "text-center font-bold text-[26px] leading-[30px] tracking-[-1.44px] text-luckyPoint pt-[20px] pb-[30px] px-[20px]"
          }
        >
          Clario helps you easily avoid spying.
        </Heading>
        {ANTISPYFEATURES.map((el, ix) => {
          return (
            <AntiSpyingFeatureBlock
              key={el.featureList[0].id}
              featureList={el.featureList}
              img={el.img}
              subtitle={el.subtitle}
              title={el.title}
              theme={{ color: el.theme.color, gradient: el.theme.gradient }}
            />
          );
        })}
      </div>
      <ResponseTime />
      <ThreeStepsToInstall />
      <PriceBlock />
      <ProtectAllDevices />
      <Carousel />
      <ProtectMeNow className={"bg-white pt-[70px] pb-[80px]"} />
      <Footer />
    </div>
  );
}

export default App;
