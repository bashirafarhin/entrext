const AiSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center p-8 space-y-8 md:space-y-0 md:space-x-12">
      <div className="w-full md:w-[40%] text-center md:text-left">
        <h2 className="text-3xl md:text-7xl font-bold mb-6 text-[#FF5513] text-center">
          AI Deliverables
        </h2>
        <ul className="list-none pl-5 space-y-3 text-lg md:text-2xl text-center">
          <li>AI Automation Agents</li>
          <li>AI Voice Agents</li>
          <li>AI Micro SaaS</li>
        </ul>
      </div>
      <div className="w-full md:w-[40%] text-center md:text-left">
        <h2 className="text-3xl md:text-7xl font-bold mb-6 text-[#FF5513] text-center">
          Coming Soon
        </h2>
        <ul className="list-none pl-5 space-y-3 text-lg md:text-2xl text-center">
          <li>AI Marketplaces</li>
          <li>AI SaaS</li>
          <li>AI + Web3 Integration</li>
        </ul>
      </div>
    </section>
  );
};

export default AiSection;
