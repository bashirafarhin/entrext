import React from "react";
import { FaReact, FaLaravel, FaJava, FaGithub, FaAws } from "react-icons/fa";
import {
  SiShadcnui,
  SiGithubactions,
  SiTensorflow,
  SiPytorch,
  SiPostgresql,
  SiMysql,
  SiAuth0,
  SiDatadog,
  SiSwagger,
  SiOpenai,
  SiGooglecloud,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { VscAzureDevops } from "react-icons/vsc";

type TechItem = {
  icon: React.ElementType;
  name: string;
  color: string;
};

const TechStack: React.FC = () => {
  return (
    <div className="h-auto min-h-screen w-full flex justify-center items-center gap-12 flex-col mb-50">
      <h2 className="text-2xl md:text-6xl font-bold">Our Tech Stack</h2>
      <Box1 />
      <div className="w-[80%] md:w-[70%]  grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-8 md:gap-20 ">
        <Box2 />
        <Box3 />
      </div>
      <Box4 />
      <div className="w-[80%] md:w-[70%] grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-8 md:gap-20 ">
        <Box5 />
        <Box7 />
      </div>
      <Box6 />
    </div>
  );
};

const TechBox: React.FC<{ title: string; items: TechItem[] }> = ({
  title,
  items,
}) => (
  <div className="bg-[#131313] w-[100%] md:w-[100%] rounded-2xl border-[#1b1b1b] border mx-auto">
    <span className="w-full text-center md:text-2xl flex justify-center items-center p-4 border-b border-[#1b1b1b]">
      {title}
    </span>
    <div className={`grid grid-rows-1 grid-cols-${items.length} px-8 py-12`}>
      {items.map(({ icon: Icon, name, color }, idx) => (
        <div key={idx} className="flex justify-center items-center flex-col">
          <Icon className="text-5xl md:text-[120px]" color={color} />
          <p className="text-lg md:text-2xl mt-4">{name}</p>
        </div>
      ))}
    </div>
  </div>
);

const Box2 = () => (
  <TechBox
    title="Backend Development"
    items={[
      { icon: FaLaravel, name: "Laravel", color: "red" },
      { icon: FaJava, name: "Java", color: "#5283A2" },
    ]}
  />
);

const Box3 = () => (
  <TechBox
    title="Version Control & CI/CD"
    items={[
      { icon: FaGithub, name: "GitHub", color: "white" },
      { icon: SiGithubactions, name: "GitHub Actions", color: "white" },
    ]}
  />
);

const Box5 = () => (
  <TechBox
    title="Databases"
    items={[
      { icon: SiPostgresql, name: "PostgreSQL", color: "#31648C" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
    ]}
  />
);

const Box7 = () => (
  <TechBox
    title="Monitoring & Security"
    items={[
      { icon: SiDatadog, name: "Datadog", color: "#632CA6" },
      { icon: SiSwagger, name: "Swagger", color: "#85EA2D" },
      { icon: SiAuth0, name: "Auth0", color: "#EB5424" },
    ]}
  />
);

const Box1 = () => {
  return (
    <div className="bg-[#131313] w-[80%] md:w-[50%] rounded-2xl border-[#1b1b1b] border">
      {/* top */}
      <span className="w-full text-center md:text-2xl flex justify-center items-center p-4 border-b border-[#1b1b1b]">
        Frontend Development
      </span>
      <div className="grid grid-rows-1 grid-cols-3 px-8 py-12">
        <div className="flex justify-center items-center flex-col">
          <FaReact className="text-5xl md:text-[120px]" color="#00FFFF" />
          <p className="text-lg md:text-2xl mt-4">React.js</p>
        </div>

        <div className="flex justify-center items-center flex-col">
          <SiShadcnui className="text-5xl md:text-[120px]" color="white" />
          <p className="text-lg md:text-2xl mt-4">Shadcn</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <RiNextjsFill className="text-5xl md:text-[120px]" color="white" />
          <p className="text-lg md:text-2xl mt-4">Nextjs</p>
        </div>
      </div>
    </div>
  );
};

const Box4 = () => {
  return (
    <div className="bg-[#131313] w-[80%] md:w-[50%] rounded-2xl border-[#1b1b1b] border">
      {/* top */}
      <span className="w-full text-center md:text-2xl flex justify-center items-center p-4 border-b border-[#1b1b1b]">
        Cloud & Hosting
      </span>
      <div className="grid grid-rows-1 grid-cols-3 px-8 py-12">
        <div className="flex justify-center items-center flex-col">
          <FaAws className="text-5xl md:text-[120px]" color="#FF6F00" />
          <p className="text-lg md:text-2xl mt-4">AWS</p>
        </div>

        <div className="flex justify-center items-center flex-col">
          <SiGooglecloud className="text-5xl md:text-[120px]" color="#4285F4" />
          <p className="text-lg md:text-2xl mt-4">Google Cloud</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <VscAzureDevops
            className="text-5xl md:text-[120px]"
            color="#0078D7"
          />
          <p className="text-lg md:text-2xl mt-4">Azure AI</p>
        </div>
      </div>
    </div>
  );
};

const Box6 = () => {
  return (
    <div className="bg-[#131313] w-[80%] md:w-[50%] rounded-2xl border-[#1b1b1b] border">
      {/* top */}
      <span className="w-full text-center md:text-2xl flex justify-center items-center p-4 border-b border-[#1b1b1b]">
        AI & Machine Learning
      </span>
      <div className="grid grid-rows-1 grid-cols-3 px-8 py-12">
        <div className="flex justify-center items-center flex-col">
          <SiTensorflow className="text-5xl md:text-[120px]" color="#FF9900" />
          <p className="text-lg md:text-2xl mt-4">TensorFlow</p>
        </div>

        <div className="flex justify-center items-center flex-col">
          <SiPytorch className="text-5xl md:text-[120px]" color="#EE4C2C" />
          <p className="text-lg md:text-2xl mt-4">PyTorch</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <SiOpenai className="text-5xl md:text-[120px]" color="white" />
          <p className="text-lg md:text-2xl mt-4">OpenAI</p>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
