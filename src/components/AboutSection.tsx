const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl leading-relaxed font-bold">
              About me:
            </h2>
          </div>

<div className="space-y-6 text-white leading-relaxed font-standard">
  <ul className="space-y-4 text-lg">
    <li className="flex items-start gap-4">
      <span className="text-primary text-xl leading-none mt-1">•</span>
      <span>I'm a Computer Engineer and applied AI / machine learning engineer.</span>
    </li>
    <li className="flex items-start gap-4">
      <span className="text-primary text-xl leading-none mt-1">•</span>
      <span>I develop models, software, and applications for real-world problems.</span>
    </li>
    <li className="flex items-start gap-4">
      <span className="text-primary text-xl leading-none mt-1">•</span>
      <span>I work across full-stack development, systems optimization, and forward-deployed engineering.</span>
    </li>
    <li className="flex items-start gap-4">
      <span className="text-primary text-xl leading-none mt-1">•</span>
      <span>I bring a unique skillset shaped by DSP, music technology, and signal processing.</span>
    </li>
  </ul>
</div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
