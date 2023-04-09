import { ReactComponent as Alert } from "../UI/1-atoms/Icons/24px_antiSpy/Alert.svg";
import { ReactComponent as Network } from "../UI/1-atoms/Icons/24px_antiSpy/Network.svg";
import { ReactComponent as Scan } from "../UI/1-atoms/Icons/24px_antiSpy/Scan.svg";
import { ReactComponent as Spyware } from "../UI/1-atoms/Icons/24px_antiSpy/Spyware.svg";
import { ReactComponent as Locations } from "../UI/1-atoms/Icons/24px_antiSpy/Locations.svg";
import { ReactComponent as Safari } from "../UI/1-atoms/Icons/24px_antiSpy/Safari.svg";
import { ReactComponent as Instagram } from "../UI/1-atoms/Icons/24px_antiSpy/Instagram.svg";
import { ReactComponent as Antivirus } from "../UI/1-atoms/Icons/24px_antiSpy/Antivirus.svg";
import { ReactComponent as Device } from "../UI/1-atoms/Icons/24px_antiSpy/Device.svg";
import { ReactComponent as Widget } from "../UI/1-atoms/Icons/24px_antiSpy/Widget.svg";
import { ReactComponent as Alert01 } from "../UI/1-atoms/Icons/24px_antiSpy/Alert01.svg";
import { ReactComponent as Record } from "../UI/1-atoms/Icons/24px_antiSpy/Record.svg";
import { ReactComponent as SilentStop } from "../UI/1-atoms/Icons/24px_antiSpy/SilentStop.svg";
import { ReactComponent as Location } from "../img/Location.svg";
import { ReactComponent as Scanning } from "../img/Scanning.svg";
import { ReactComponent as Media } from "../img/Media.svg";
import { ReactComponent as Protect } from "../img/Protect.svg";
import { ReactComponent as Recording } from "../img/Record.svg";

export const ANTISPYFEATURES = [
  {
    title: "Spyware detector",
    img: (
      <Scanning
        className={"left-1/2 -translate-x-1/2 absolute bottom-[1rem]"}
      />
    ),
    subtitle: "Find apps secretly spying on you and your data. ",
    featureList: [
      { icon: <Scan />, text: "Full background anti-spyware scan", id: "1.1" },
      { icon: <Alert />, text: "Instant spyware detection alerts", id: "1.2" },
      { icon: <Network />, text: "Immediate threat quarantining", id: "1.3" },
    ],
    theme: { color: "#EFF1FF", gradient: "light-purple" },
  },
  {
    title: "Tracker detector",
    img: (
      <Location
        className={"left-1/2 -translate-x-1/2 absolute bottom-[1rem]"}
      />
    ),
    subtitle: "Discover who tracks your location to spy on you.",
    featureList: [
      { icon: <Spyware />, text: "Stop being secretly tracked", id: "2.1" },
      { icon: <Locations />, text: "Protect your real location", id: "2.2" },
      { icon: <Safari />, text: "Control who sees your location", id: "2.3" },
    ],
    theme: { color: "#F6EDFA", gradient: "gradient-purple" },
  },
  {
    title: "Social media protection",
    img: (
      <Media className={"left-1/2 -translate-x-1/2 absolute bottom-[1rem]"} />
    ),
    subtitle: "Easily prevent social media account hacks.",
    featureList: [
      { icon: <Instagram />, text: "See who uses your accounts", id: "3.1" },
      { icon: <Antivirus />, text: "Revoke access for other users", id: "3.2" },
      { icon: <Alert />, text: "Get unauthorized login alerts", id: "3.3" },
    ],
    theme: { color: "#E6F2FE", gradient: "light-violet" },
  },
  {
    title: "Call recorder blocker",
    img: (
      <Protect className={"left-1/2 -translate-x-1/2 absolute bottom-[1rem]"} />
    ),
    subtitle: "Discover if someone records your calls and chats. ",
    featureList: [
      {
        icon: <Device />,
        text: "Hide your call history and records",
        id: "4.1",
      },
      { icon: <Widget />, text: "Revoke sharing your contact list", id: "4.2" },
      { icon: <Alert01 />, text: "Help secret texts remain secret", id: "4.3" },
    ],
    theme: { color: "#EAF5E4", gradient: "light-green" },
  },
  {
    title: "Screen recording detector",
    img: (
      <Recording
        className={"left-1/2 -translate-x-1/2 absolute bottom-[1rem]"}
      />
    ),
    subtitle: "Don’t let anyone access your phone screen.",
    featureList: [
      {
        icon: <Record />,
        text: "Find out if your screen is being recorded",
        id: "5.1",
      },
      {
        icon: <SilentStop />,
        text: "Immediately stop silent recordings",
        id: "5.2",
      },
      {
        icon: <Alert />,
        text: "Get alerts if your camera is in use",
        id: "5.3",
      },
    ],
    theme: { color: "#EFF1FF", gradient: "purple" },
  },
];
