document.getElementById("submitform").addEventListener("submit", function (event) {
  event.preventDefault();
  addinfo();
});
let allPasswords = [];
function addinfo() {
  const inputweb = document.getElementById("inputweb").value;
  const Usernameinput = document.getElementById("Usernameinput").value;
  const passwordinput = document.getElementById("passwordinput").value;
  const entry = {
    website: inputweb,
    username: Usernameinput,
    password: passwordinput
  };

  allPasswords.push(entry); 
  displayPasswords(allPasswords); 
  document.querySelector('.no-password-img').style.display = "none"; 
  document.getElementById("submitform").reset(); 
}
function displayPasswords(passwordList) {
  let count = 0;
  const displaydetail = document.querySelector(".displaydetail");
  displaydetail.innerHTML = ""; 
  if (passwordList.length === 0) {
    displaydetail.style.display = "none";
    document.querySelector('.no-password-img').style.display = "block";
    return;
  }
  displaydetail.style.display = "block";
  passwordList.forEach(entry => {
    const detailshow = document.createElement('div');
    detailshow.classList.add('detailshow');
    const hiddenPassword = "●".repeat(entry.password.length);
    const passwordToShow = checkbox.checked ? entry.password : hiddenPassword;
    detailshow.innerHTML = `
    <div class="detail-nav">
      <p class="firstletter">${entry.website[0]?.toUpperCase()}</p>
        <button class="deletebtn"><i class="fa-regular fa-trash-can"></i></button>
        </div>
      <p><strong>Website:</strong> ${entry.website}</p>
      <p><strong>Username:</strong> ${entry.username}</p>
      <p><strong>Password:</strong> <span class="password-text" data-password="${entry.password}">${passwordToShow}</span></p>
      `;
    displaydetail.appendChild(detailshow);
    document.querySelector('.password-number')
 const deleteButtons = document.querySelectorAll(".deletebtn");
    deleteButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        console.log('hh')
        const card = this.closest(".detailshow");
        card.remove();
          document.querySelector('.pwrd-num').innerHTML = `${count--}`
        if(detailshow === ""){
           document.querySelector('.no-password-img').style.display = "block"; 
        }
      });
    });
     count++;
      document.querySelector('.pwrd-num').innerHTML = `${count}`
  });
}
   
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
  displayPasswords(allPasswords);
});
const search = document.getElementById('search');
search.addEventListener('input', () => {
  const searchValue = search.value.toLowerCase();
    document.querySelector('.no-password-img').style.display = "none";
  const filteredPasswords = allPasswords.filter(entry =>
    entry.website.toLowerCase().includes(searchValue)
  );
  displayPasswords(filteredPasswords);
});

