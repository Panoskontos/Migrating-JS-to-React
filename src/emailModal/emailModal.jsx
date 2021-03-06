import { useStateContext } from "./EMProvider";
import { useEffect } from "react";
import Cookies from "js-cookie";

const EmailModal = () => {

    const newState = useStateContext();
    
    // run once when mouse leaves
    useEffect(()=>{
      document.body.addEventListener('mouseleave', ()=>{

        // check if cookie was opened
        if(!Cookies.get('my_modal_was_opened')){
          newState.state.openModalAction()
        }
      })
    },[])

    console.log(newState)

    return (

    <section className={newState.state.openModal?"email-modal email-modal--visible":"email-modal"}>
      <div className="email-modal__close-btn"
      // Close btn action
      onClick={newState.state.closeModalAction}>
        <i className="gg-close" />
      </div>
      <div className="email-modal__container">
        <div className="email-modal__info">
          <div className="logo">
            Berry
            <div className="logo__sub">by Jenny</div>
          </div>
          <h2>Don't miss this chance!</h2>
          <p className="email-modal__message">
            Join our amazing community of more than{" "}
            <span className="email-modal__highlight-text">300,000 woman</span> who
            love fashion and receive{" "}
            <span className="email-modal__highlight-text">
              notifications, discounts, and our award winning newsletter.
            </span>
          </p>
          <div 
          // close btn action
          className={newState.emailError?"email-modal__error-message--active":"email-modal__error-message"} >
            Sorry this is not a valid email
          </div>
          <div className="email-modal__form-group">
            <input
              type="email"
              className="email-modal__input"
              placeholder="youremail@mail.com"
              // get and change email
              onChange={newState.getEmail}
              value={newState.email}
              // check email validity
              onBlur={newState.checkEmail}
              onFocus={newState.removeError}

            />
            <button className="email-modal__button" 
            
            // Submit action
            onClick={newState.form_submitted}>Send</button>
          </div>


          <div className="email-modal__decline-offer"
          // Close modal action 
          onClick={newState.state.closeModalAction}>
            Sorry, I'm not interested
          </div>
        </div>
        <div className="email-modal__side-img">
          <img src="img/pexels-photo-4462782.jpeg" />
        </div>

        
        <div 
        // thank you action
        className={newState.formSent?"email-thank email-thank--success":"email-thank"}>
          <div className="email-thank__title">Thank You</div>
          <p className="email-thank__message">
            check your email we sent you some instructions... by the way welcome
            to the community!
          </p>
        </div>
      </div>
    </section>
  
  
  
    );
  }
  
  export default EmailModal