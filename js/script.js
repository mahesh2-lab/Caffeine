window.onload = function () {
    if (isMobileDevice()) {
        createMobilePopup();
    }
};

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

function createMobilePopup() {
    // Create the popup div
    let popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '0';
    popup.style.left = '0';
    popup.style.width = '100%';
    popup.style.height = '100%';
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    popup.style.display = 'flex';
    popup.style.justifyContent = 'center';
    popup.style.alignItems = 'center';

    // Create the content div inside the popup
    let content = document.createElement('div');
    content.style.backgroundColor = 'white';
    content.style.padding = '20px';
    content.style.borderRadius = '10px';
    content.style.textAlign = 'center';
    content.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

    // Add the message inside the content div
    let title = document.createElement('h2');
    title.innerText = 'Welcome Mobile User!';
    let message = document.createElement('p');
    message.innerText = 'This is a special message for mobile users.';

    // Append title and message to the content div
    content.appendChild(title);
    content.appendChild(message);

    // Append the content div to the popup
    popup.appendChild(content);

    // Append the popup to the body
    document.body.appendChild(popup);
}
