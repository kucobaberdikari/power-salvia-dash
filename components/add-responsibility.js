$(document).ready(function () {
  $("#addRsp").click(function (e) {
      var target = e.currentTarget.previousElementSibling
      var dataValue = target.value

      var newElement =
          `<li class='inline-flex items-center w-full gap-5'><input type='text' id='idRes' name='responsibility' class='w-full input-field' disabled value='${dataValue}'><a href='#' role='button' id='rmRsp'><img src='../assets/svgs/ric-close-red.svg' alt='PowerHuman'></a></li>`

      target.value = ''
      $("#listResp").prepend(newElement)
  })
})

document.addEventListener('mousemove', function () {
  $("#rmRsp").click(function (e) {
      e.currentTarget.parentElement.remove()
  })
})

