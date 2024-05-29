import FeatureCard from "./FeatureCard";
import { LuDownload } from "react-icons/lu";
import { RiBrushLine } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa6";
import { RiRefund2Fill } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { RiRefreshLine } from "react-icons/ri";

const features = [
  {
    icon: LuDownload,
    title: "Infinite Download",
    description:
      "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.",
  },
  {
    icon: RiBrushLine,
    title: "Purely Handcrafted",
    description:
      " No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.",
  },
  {
    icon: FaRegCopyright,
    title: "All Are Under licensed",
    description:
      "The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).",
  },
  {
    icon: RiRefund2Fill,
    title: "Cancel Anytime",
    description:
      "Subscribe at your own pace, and cancel when you feel it's enough.",
  },
  {
    icon: RiTeamLine,
    title: "Empowering For Team",
    description:
      "We support multiple seats at once, requiring only a single payment.",
  },
  {
    icon: RiRefreshLine,
    title: "No Limitations",
    description:
      "Use as many as you want, from Dribbble presentations to PowerPoint presentations.",
  },
];

const FeatureGrid = () => {
  return (
    <div className="grid justify-center grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
      {features.map(({ icon, title, description }) => {
        return (
          <FeatureCard icon={icon} title={title} description={description} />
        );
      })}
    </div>
  );
};
export default FeatureGrid;
