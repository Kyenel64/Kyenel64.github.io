current = "home";

function onPress(button)
{
    document.getElementById(current).style.opacity = 0;
    document.getElementById(current).style.display = "none";
    document.getElementById(button).style.opacity = 100;
    if (button == "about" || button == "projects")
    {
        document.getElementById(button).style.display = "grid";
    }
    else
    {
        document.getElementById(button).style.display = "table";
    }
    
    
    current = button;
}