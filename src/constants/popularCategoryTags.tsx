import {
  PenTool,
  Layout,
  Layers,
  Mic2,
  Briefcase,
  Camera,
  Boxes,
  DatabaseBackup,
  Lightbulb,
  HeartPulse,
  BadgeDollarSign,
  Radiation,
} from "lucide-react";

type Tag = {
  icon: JSX.Element; // JSX.Element is the type for React elements
  tag: string;
};

const tags: Tag[] = [
  {
    icon: <PenTool />,
    tag: "Design",
  },
  {
    icon: <Layout />,
    tag: "word press",
  },
  {
    icon: <Layers />,
    tag: "Development ",
  },
  {
    icon: <Mic2 />,
    tag: "Marketing ",
  },
  {
    icon: <Briefcase />,
    tag: "Bussiness ",
  },
  {
    icon: <Camera />,
    tag: "Photography ",
  },
  {
    icon: <Boxes />,
    tag: "Ethical Hacking ",
  },
  {
    icon: <DatabaseBackup />,
    tag: "Data Science ",
  },
  {
    icon: <Lightbulb />,
    tag: "Personal Dev ",
  },
  {
    icon: <HeartPulse />,
    tag: "Helth & Fitness ",
  },
  {
    icon: <BadgeDollarSign />,
    tag: "Finance",
  },
  {
    icon: <Radiation />,
    tag: "Microsoft ",
  },
];

export default tags;
