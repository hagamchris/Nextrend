function showTab(tabId) {
    // Hide all tab panes
    var panes = document.getElementsByClassName('tab-pane');
    for (var i = 0; i < panes.length; i++) {
        panes[i].classList.remove('active');
    }

    // Remove active class from all buttons
    var buttons = document.getElementsByClassName('tab-button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    // Show the selected tab pane
    document.getElementById(tabId).classList.add('active');

    // Set the clicked button as active
    event.currentTarget.classList.add('active');
}
