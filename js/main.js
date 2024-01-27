const dialog = document.querySelector("[data-dialog]")
const openDialog = document.querySelector("[data-open-dialog]")

openDialog.addEventListener("click", (e) => dialog.showDialog())