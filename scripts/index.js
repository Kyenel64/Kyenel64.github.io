current = "home";

function onPress(button)
{
    document.getElementById(current).style.opacity = 0;
    document.getElementById(current).style.display = "none";
    current = button;
    document.getElementById(button).style.opacity = 100;
    document.getElementById(button).style.display = "table";
}