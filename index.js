
const form = document.getElementById("send-data-form").addEventListener("submit", (e) => { sendForm(e) });
const loader = document.getElementById("loader-email");
const P_KEY_EMAILJS = "CVlkRVJt_wWlcbJQQ";

(function () {
    emailjs.init(P_KEY_EMAILJS);
})();

const sendForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const sendData = {
        name: formData.get("Username"),
        email: formData.get("Email"),
        number: formData.get("Phone"),
    }
    loader.innerHTML = `<progress class="progress is-small is-primary" max="100">15%</progress>`;
    try {

        const send = await emailjs.send("service_w8jvlv6", "template_9qiyu4z", sendData, P_KEY_EMAILJS);
        if (send) {
            loader.innerHTML = `<article class="message is-success">
            <div class="message-header">
              <p>El correo ha sido enviado correctamente.</p>
            </div>
          </article>`;
            setTimeout(() => {
                loader.innerHTML = ``;
                event.target.reset();
            }, 9000);
        }
    } catch (error) {
        console.log(error)
        loader.innerHTML = ` `;
    }
}



