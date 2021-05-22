const icon = document.getElementById("social-icon");
const email = document.getElementById("email");
const github = document.getElementById("github");
const insta = document.getElementById("insta");
const twitter = document.getElementById("twitter");
const unsplash = document.getElementById("unsplash");
const codepen = document.getElementById("codepen");

function removeAllClasses()
{
    const classes = icon.className.split(" ");

    for (let i = 0; i < classes.length; ++i)
    {
        icon.classList.remove(classes[i]);
    }
}

email.addEventListener("mouseover", () =>
{
    removeAllClasses();
    icon.classList.add("fas");
    icon.classList.add("fa-envelope");
});

github.addEventListener("mouseover", () =>
{
   removeAllClasses();
   icon.classList.add("fab");
   icon.classList.add("fa-github");
});

insta.addEventListener("mouseover", () =>
{
    removeAllClasses();
    icon.classList.add("fab");
    icon.classList.add("fa-instagram");
});

twitter.addEventListener("mouseover", () =>
{
    removeAllClasses();
    icon.classList.add("fab");
    icon.classList.add("fa-twitter");
});

unsplash.addEventListener("mouseover", () =>
{
    removeAllClasses();
    icon.classList.add("fab");
    icon.classList.add("fa-unsplash");
});

codepen.addEventListener("mouseover", () =>
{
    removeAllClasses();
    icon.classList.add("fab");
    icon.classList.add("fa-codepen");
});