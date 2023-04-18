// Select the color of the Umbrella

const pinkVarient = document.getElementsByClassName("pink")[0];
const blueVarient = document.getElementsByClassName("blue")[0];
const yellowVarient = document.getElementsByClassName("yellow")[0];
const colorPallete = document.getElementsByClassName("color_pallete")[0];

const main = document.getElementsByClassName("main")[0];
const uploadButton = document.getElementsByClassName("upload_button")[0];
const umbrellaImg = document.getElementsByClassName("umbrella_img")[0];

const labelContainer =
  document.getElementsByClassName("label-container")[0].classList;
const loader = document.getElementsByClassName("loader")[0].classList;

colorPallete.addEventListener("click", (event) => {
  const color = event.target.classList;
  labelContainer.add("no-display");
  loader.remove("no-display");

  setTimeout(() => {
    labelContainer.remove("no-display");
    loader.add("no-display");
    for (const classes of colorPallete.children) {
      classes.classList.remove("padding");
    }

    const pink = "#d0006f";
    const yellow = "#fed141";
    const blue = "#00a3e0";

    // if pink is selected
    if (color.contains("pink")) {
      pinkVarient.classList.add("padding");
      main.style.background = `${pink}33`;
      uploadButton.style.background = pink;
      umbrellaImg.src = "./assets/Pink umbrella.png";
    }
    // if yellow is selected
    else if (color.contains("yellow")) {
      yellowVarient.classList.add("padding");
      main.style.background = `${yellow}33`;
      uploadButton.style.background = yellow;
      umbrellaImg.src = "./assets/Yello umbrella.png";
    }
    // if blue is selected
    else {
      blueVarient.classList.add("padding");
      main.style.background = `${blue}33`;
      uploadButton.style.background = blue;
      umbrellaImg.src = "./assets/Blue umbrella.png";
    }
  }, 2000);
});

// Uploading Image on Umbrella

const inputValue = document.getElementById("input");
const buttonText = document.getElementsByClassName("button-text")[0];
inputValue.addEventListener("change", (event) => {
  labelContainer.add("no-display");
  loader.remove("no-display");
  setTimeout(() => {
    labelContainer.remove("no-display");
    loader.add("no-display");
    const input = event.target;
    if ("files" in input && input.files.length > 0) {
      const file = input.files[0];
      if ("FileReader" in window) {
        const reader = new FileReader();
        reader.onload = function () {
          const image = document.getElementById("logo");
          image.src = reader.result;
        };
        reader.readAsDataURL(file);
      }
    }
    const name = input.value.split("\\");
    !!name[name.length - 1] ? buttonText.innerHTML =  name[name.length - 1] : "";
  }, 2000);
});
