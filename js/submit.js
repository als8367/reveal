const sendbtn = document.querySelector('.send-btn button');


sendbtn.onclick = (e) => {
  e.preventDefault();

  if(!document.form_data.name.value){
    alert("이름을 입력해 주세요.");
    document.form_data.name.focus();
    return;
  } 

  if(!document.form_data.email.value){
    alert("이메일을 입력해 주세요.");
    document.form_data.email.focus();
    return;
}


if(!document.form_data.subject.value){
  alert("제목을 입력해 주세요.");
  document.form_data.email.focus();
  return;
}

if(!document.form_data.message.value){
  alert("메시지를 입력해 주세요.");
  document.form_data.email.focus();
  return;
}

}

// sendbtn.onclick(function(e){

// })