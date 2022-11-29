import React from 'react';

const Contact = () => {
  return (
    <>
        <div className="Contact" id='Contact'>
                <div className="heading">
                    <h2>Contact</h2>
                    <p>What's your query ?</p>
                </div>
                <div className="main">
                    <div className="img">
                        <img src="./images/contact-main-removebg-preview.png" alt="./images/contact-removebg-preview.png" />
                    </div>
                    <form action="mailto:abhishek01web@gmail.com">
                        <input type="text" name="name" id="name" placeholder="What's your name ?" required />
                        <input type="email" name="email" id="email" placeholder="What's your mail ?" required />
                        <input type="number" name="num" id="num" placeholder="What's your number ?" required />
                        <textarea name="msg" id="msg" cols="30" placeholder="What's your message ?" />
                        <button type='submit'>Send</button>

                    </form>
                </div>
        </div>        
    </>
  )
}

export default Contact;