export function contact() {
  const contactWrapper = document.querySelector(".contact-wrapper");

  contactWrapper.innerHTML += `
  <div class="contact-content">
              <h1>Got a problem to solve?</h1>
              <p>
              Feel free to contact me by submitting the form and I will get back to you as soon as possible, or shoot me an email directly on <b>jennygramdal@gmail.com</b>
              </p>
              <img src="../img/contact-me.gif" alt="Contact me GIF" class="">
            </div>

        <div class="contact-form">
              <form id="contactForm" action="https://formsubmit.co/a7e077ca5e168146421a08abfc6b6285" method="POST">
              <input type="text" name="_honey" style="display:none">
              <input type="hidden" name="_captcha" value="false">
              <input type="hidden" name="_next" value="https://comforting-parfait-fe7cbf.netlify.app/success.html">

                <label for="name">
                  Name
                  <input type="text" name="name" id="name" required/>
                </label>

                <label for="email">
                  Email
                  <input type="email"  name="email" id="email" required/>
                </label>

                <label for="subject">
                  Subject
                  <input type="text" name="_subject" id="subject" required/>
                </label>

                <label for="message">
                  Message
                  <textarea name="message" id="message" cols="30" rows="10" required></textarea>
                </label>

                <button type="submit">Submit</button>
              </form>
            
              <span class="form_message--container"></span>
            </div>
            `;
}
