import EmailModal from "./emailModal/emailModal";

export default function App() {
  return (
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

  );
}

