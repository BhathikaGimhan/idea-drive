const ParticleContainer = ({ style }) => (
  <samp className=" flex gap-28" style={style}>
    {[...Array(12)].map((_, index) => (
      <samp
        key={index}
        className="particle w-1 h-1 bg-[rgba(34,197,129,0.27)] opacity-100 shadow-[0_0_20px_green]  rounded-full"
      ></samp>
    ))}
  </samp>
);

export default function Background() {
  return (
    <samp className="w-full particle-container h-screen fixed m-auto flex gap-32 flex-col justify-center items-center -z-[999999]">
      {[...Array(18)].map((_, index) => (
        <ParticleContainer
          key={index}
          style={{ animationDelay: `${(index % 9) * -6.67}s` }}
        />
      ))}
    </samp>
  );
}
