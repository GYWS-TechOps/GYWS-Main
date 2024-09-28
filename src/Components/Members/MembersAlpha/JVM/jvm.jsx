import Heads from "./heads/heads.jsx"
import "./jvm.css";

function JVM ({year}) {
  return (
    <>
      <div className="chlna">
        <h1> JAGRITI VIDYA MANDIR</h1>
      </div>
      <br />
      <hr />
      <br />
      <Heads year={year} team = {'coordinators'}  heading ={"Coordinators"}/>
      <br />
      <br />
      <Heads year={year} team = {'src'} position ={'SRC Head'} heading ={"School Review Committee Heads"}/>
      <br />
      <br />
      <Heads year={year} team = {'techops'} position ={'TechOps Head'} heading ={"Technical Operation Heads"}/>
      <br />
      <br />
      <Heads year={year} team = {'sponse'} position ={'Sponsorship Head'} heading ={"Sponsorship Heads"}/>
      <br />
      <br />
      <Heads year={year} team = {'finance'} position ={'Finance Head'} heading ={"Finance Heads"}/>
      <br />
      <br />
      <Heads year={year} team = {'design'} position ={'Design Head'} heading ={"Design Heads"}/>
      <br />
      <br />
      <Heads year={year} team = {'media'} position ={'Media Head'} heading ={"Media & PUBLICITY Heads"}/>
      <br />
      </>
  );
}

export default JVM;


