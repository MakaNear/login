import { backend } from "../../helpers/urlConfig.js";

export async function fetchLogin() {
  const getEmail = document.querySelector("input[name='Email']");
  const getPassword = document.querySelector("input[name='Password']");

  document.querySelector(".login-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const datajson = {
      Email: getEmail.value,
      Password: getPassword.value,
    };

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(datajson);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    console.log(raw);

    fetch(backend.login, requestOptions)
      .then(async (response) => {
        const status = response.status;
        const result = await response.json();

        if (status === 200) {
          // Save the token in cookies
          const token = result.token;
          document.cookie = `login=${token}; path=/; secure; HttpOnly;`; // Set cookie for the token

          Swal.fire({
            title: "Login Berhasil",
            text: "Anda berhasil Login.",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/dashboard";
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Gagal Login",
            text: "Email atau Password tidak cocok",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  });
}
