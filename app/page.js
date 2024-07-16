import TransitionLink from "../components/TransitionLink";

const Home = () => {
  return (
    <main className="bg-neutral-100 text-black w-screen h-screen flex flex-col items-center justify-center gap-[50px]">
      <h1 className="text-5xl">HOME PAGE</h1>
      <TransitionLink href="/about" label="About ->" />
    </main>
  );
}

export default Home;