import styled from "styled-components";

const Contact = () => {
  

  return <Wrapper>
    <h2 className="common-heading">CONTACT US</h2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10515.882113139118!2d9.0161122!3d48.7824529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799d8c4af08fcd7%3A0x96482de98f611506!2sTraumpalast%20Leonberg!5e0!3m2!1sen!2sin!4v1707382822986!5m2!1sen!2sin" 
    width="100%" 
    height="550" 
    style={{border:"0"}}
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"></iframe>


    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xyyrevgd" method="post" className="contact-inputs">
          <input type="text"
          placeholder="username"
          name="username"
          required
          autoComplete="off"
           />

          <input type="email"
          placeholder="email"
          name="email"
          required
          autoComplete="off"
          />

          <textarea name="message" id="" cols="30" rows="10" required autocomplete="off" placeholder="Enter your message"></textarea>

          <input type="submit" value="Send"/>
        </form>
      </div>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Contact;
