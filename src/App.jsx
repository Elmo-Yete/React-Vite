import viteLogo from "/vite.svg";
import Button from "./components/Buttons";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="textWelcome">
          <div className="pagetitle">
            <h1 className="title">Vite</h1>
            <h2>Next Generation Frontend Tooling</h2>
          </div>
          <div className="firstContent">
            <h4>
              Get ready for a development enviroment that can finally catch upp
              with you
            </h4>
          </div>
        </div>
        <div className="logoContainer">
          <img src={viteLogo}></img>
        </div>
      </div>
      <div className="buttonsContainer">
        <Button content="Get started" />
        <Button content="Why Vite?" />
        <Button content="View on Github" />
      </div>
      <div className="cardsWrapper">
        <Cards
          emoji="💡"
          subtitle="Instant Server Start"
          text="texOn demand file serving over native ESM, no bundling required!"
        />
        <Cards
          emoji="⚡"
          subtitle="Lightning Fast HMR"
          text="Hot Module Replacement (HMR) that stays fast regardless of app size."
        />
        <Cards
          emoji="🛠"
          subtitle="Rich Features"
          text="Out-of-the-box support for TypeScript, JSX, CSS and more."
        />
        <Cards
          emoji="📦"
          subtitle="Optimized Build"
          text="Pre-configured Rollup build with multi-page and library mode support."
        />
        <Cards
          emoji="🔩"
          subtitle="Universal Plugins"
          text="Rollup-superset plugin interface shared between dev and build."
        />
        <Cards
          emoji="🔑"
          subtitle="Fully Typed APIs"
          text="Flexible programmatic APIs with full TypeScript typing."
        />
      </div>
    </>
  );
}

export default App;
