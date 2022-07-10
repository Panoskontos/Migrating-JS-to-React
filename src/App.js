import EmailModal from "./emailModal/emailModal";
import {EMProvider}  from "./emailModal/EMProvider";


export default function App() {
  return (

    <EMProvider>

    <>
<header className="page-header">
      <div className="logo">
        Berry
        <div className="logo__sub">by Jenny</div>
      </div>
</header>
    <main className="content-area">
      <h1>Content Area</h1>
    </main>
    < EmailModal /> 
    <div className="email-modal" />
    </>

    </EMProvider>

  );
}

