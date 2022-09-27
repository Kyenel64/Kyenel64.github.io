function openSite(site)
{
    if (site == 'github')
    {
        window.open("https://www.github.com/kyenel64", "_blank").focus();
    }
    if (site == 'linkedin')
    {
        window.open("https://www.linkedin.com/in/kye-nelson/", "_blank").focus();
    }
    if (site == 'home')
    {
        location.reload();
    }
}

function expand(name)
{
    var y = document.querySelector('#' + name).getBoundingClientRect().top;
    var x = document.querySelector('#' + name).getBoundingClientRect().left;
    console.log(y);
    var page = document.getElementById(name + 'Page');
    page.style.top = y + 'px';
    page.style.left = x + 'px';
    if (name == "Mars")
    {
        page.style.animation = "expand 1s ease-out forwards";
    }
    else if (name == "Uranus" || name == "Neptune")
    {
        page.style.animation = "expand 3s ease-out forwards";
    }
    else
    {
        page.style.animation = "expand 7s ease-out forwards";
    }
    
}