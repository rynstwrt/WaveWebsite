const skip = true;
const loadingPanel = document.getElementById("loading-panel");
const hiddens = document.getElementsByClassName("loading-hidden");

if (skip)
{
    loadingPanel.style.display = "none";
    showAllSections();
}
else
{
    setTimeout(() =>
    {
        showAllSections();
        loadingPanel.style.opacity = "0";
    }, 100000);
}

function showAllSections()
{
    for (let i = hiddens.length - 1; i >= 0; --i)
    {
        hiddens[i].classList.remove("loading-hidden");
    }
}