var selectedRow;
var rows = document.querySelectorAll(`tr`);
for (var i = 0; i < rows.length; i++){
    rows[i].setAttribute('draggable', true)
    if (rows[i] > 1 || 6 > rows[i]) {
        rows[i].addEventListener("dragstart", (event) => {
            selectedRow = event.target;
        })
        rows[i].addEventListener("dragover", (event) => {
            var e = event;
            e.preventDefault();

            let children = Array.from(e.target.parentNode.parentNode.children);
            if (children.indexOf(e.target.parentNode) > children.indexOf(selectedRow)){
                e.target.parentNode.after(selectedRow)
            } else {
                e.target.parentNode.before(selectedRow)
            }
        })
    }
}