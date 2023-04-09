import React from "react";
import { ReactComponent as AppStore } from "../../1-atoms/Icons/AppStore.svg";
import { ReactComponent as GooglePlay } from "../../1-atoms/Icons/GooglePlay.svg";
import { ReactComponent as TrustPilot } from "../../1-atoms/Icons/TrustPilot.svg";
import classnames from "classnames";

interface ClientsTestimonialsProps {
  id: string;
  comment: string;
  name: string;
  icon: JSX.Element;
  iconText: string;
}

const ClientsTestimonials: React.FC<
  ClientsTestimonialsProps & React.AllHTMLAttributes<HTMLDivElement>
> = ({ id, comment, name, icon, iconText, ...props }) => {
  return (
    <div
      className={classnames(
        "flex h-[339px] w-[272px] flex-col py-[40px] px-[24px] rounded-xl",
        props.className
      )}
      key={id}
    >
      <span>{icon}</span>
      <span className={"sr-only"}>{iconText}</span>
      <p
        className={
          "mt-[30px] grow font-bold text-base leading-[23px] tracking-[-0.248889px]"
        }
      >
        {comment}
      </p>
      <p className="mt-auto  normal text-base leading-[23px] tracking-[-0.248889px]">
        {name}
      </p>
    </div>
  );
};

export const testimonials = {
  title: "Let’s hear what real Clario users say.",
  id: "what-our-clients-are-saying",
  items: [
    <ClientsTestimonials
      id={"1.1"}
      name={"Manweet"}
      comment={"It is a great application to protect yourself from hackers."}
      icon={<TrustPilot />}
      iconText="Trustpilot"
      className={"bg-ghostWhite text-violet"}
    />,
    <ClientsTestimonials
      id={"1.2"}
      name={"Megan_N"}
      comment={
        "Great service! They were an amazing help with making sure my device is secure."
      }
      icon={<TrustPilot />}
      iconText="Trustpilot"
      className={"bg-ghostWhite text-violet"}
    />,
    <ClientsTestimonials
      id={"1.3"}
      name={"Shahu Sardar"}
      comment={
        "The best app you could find! I had a problem of malware which added unknown accounts to my device. The 'Talk to experts' feature saved the day! I was helped in all possible ways."
      }
      icon={<GooglePlay />}
      iconText="Google Play"
      className={"bg-panache text-green"}
    />,
    <ClientsTestimonials
      id={"1.4"}
      name={"Zagkri"}
      comment={
        "Great app! Cool thing with the data breaches - checked mine and my boyfriends emails and found 10! passwords we need to change"
      }
      icon={<AppStore />}
      iconText="App Store"
      className={"bg-blue text-darkBlue"}
    />,
  ],
};
