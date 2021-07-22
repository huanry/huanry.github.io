function addLink() {
    var body_element = document.getElementsByTagName('body')[0];
    var selection;
    selection = window.getSelection();
    var pagelink = "<br /><br /> The copyright belongs to the author.<br />For commercial reprints, please contact the author for authorization, and for non-commercial reprints, please indicate the source.<br />Source：<a href='"+document.location.href+"'>"+document.location.href+"</a>"; 
    var copy_text = selection + pagelink;
    var new_div = document.createElement('div');
    new_div.style.left='-99999px';
    new_div.style.position='absolute';
    body_element.appendChild(new_div );
    new_div.innerHTML = copy_text ;
    selection.selectAllChildren(new_div );
    window.setTimeout(function() {
        body_element.removeChild(new_div );
    },0);
}
document.oncopy = addLink;