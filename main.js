var id = null;

function linkPress()
{
    var elem = document.getElementById("Mercury");
    var size = elem.getAttribute("width");
    clearInterval(id);
    id = setInterval(frame, 0.05);
    function frame()
    {
        if (size == 1000)
        {
            clearInterval(id);
        }
        else
        {
            size++;
            elem.style.minHeight = size + 'px';
            elem.style.minWidth = size + 'px';
        }
    }
    console.log(size);
}

function open(website)
{
    if (website = 'github')
    {
        website.open("https://github.com/kyenel64", "_blank");
    }
}