const checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]');

let lastChecked;
function handlecheck(e) {
  //  here we want cheack if they click shift key down
  // check whether they are checking are not
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // loop over all the checkbox
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Starting to check them in between!");
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handlecheck)
);
