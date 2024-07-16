import TransitionLink from "../../components/TransitionLink";

const About = () => {
  return (
    <main className="bg-neutral-100 text-black w-screen h-screen flex flex-col items-center justify-center gap-[50px]">
      <h1 className="text-5xl">ABOUT PAGE</h1>
      <TransitionLink href="/" label="Home ->" />
    </main>
  );
}

export default About;