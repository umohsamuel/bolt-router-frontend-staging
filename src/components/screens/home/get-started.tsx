import { BaseButton } from "@/components/button";
import { cn } from "@/utils";

export default function GetStarted() {
  return (
    <div className="max-w-screen-large-max large-max:px-0 mx-auto flex w-full flex-col items-center px-[5%] text-[#CDCDCD]">
      <h1 className="text-center text-3xl font-semibold text-[#CDCDCD] lg:text-5xl">
        Get started now
      </h1>
      <p className="mt-5 text-center text-base font-normal lg:text-lg">
        Find the resources you need to create integrations with Bolt router.
      </p>

      <div className="mt-8 flex flex-col items-center justify-between gap-9 lg:mt-12 lg:flex-row">
        {resources.map((resources, index) => (
          <StartedItem
            key={index}
            title={resources.title}
            description={resources.description}
            link={resources.link}
            linkLabel={resources.linkLabel}
            className="w-full lg:w-[33%]"
          />
        ))}
      </div>
    </div>
  );
}

interface StartedItemProps {
  title: Readonly<string>;
  description: Readonly<string>;
  link: Readonly<string>;
  linkLabel: Readonly<string>;
  className?: Readonly<string>;
}

const StartedItem = ({
  title,
  description,
  link,
  linkLabel,
  className,
}: StartedItemProps) => {
  return (
    <div className={cn(`rounded-xl bg-[#131A2A] px-6 py-[30px]`, className)}>
      <h3 className="text-2xl font-medium leading-tight text-[#DCDCE4] lg:text-[34px]">
        {title}
      </h3>
      <p className="mt-3 text-base font-normal text-[#CDCDCD]">{description}</p>

      <BaseButton
        text={linkLabel}
        link={link}
        isGradient={false}
        className="mt-5 w-fit rounded-lg bg-[#192134] px-7 py-2 text-lg font-medium text-[#CDCDCD] shadow-lg lg:px-7 lg:py-2 lg:text-lg"
      />
    </div>
  );
};

const resources = [
  {
    title: "References",
    description:
      "Find the resources you need to create integrations with Bolt Router.",
    link: "/references",
    linkLabel: "See References",
  },
  {
    title: "Documentation",
    description: "Read a detailed breakdown of our APIs and smart contracts.",
    link: "/documentation",
    linkLabel: "Read The Doc",
  },
  {
    title: "Tutorials",
    description: "Watch interactive tutorials to learn how Bolt Router works.",
    link: "/tutorials",
    linkLabel: "Go to Tutorials",
  },
];
