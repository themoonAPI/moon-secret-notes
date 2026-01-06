function saveNote() {
    let password = document.getElementById('password').value;
    let note = document.getElementById('note').value;
    if (password === '' || note === '') return;

    // Simple XOR encryption (for fun, not secure for real secrets)
    let encrypted = btoa(note.split('').map(c => String.fromCharCode(c.charCodeAt(0) ^ password.charCodeAt(0 % password.length))).join(''));
    localStorage.setItem('secretNote', encrypted);
    alert('Note saved!');
}

function loadNote() {
    let password = document.getElementById('password').value;
    let encrypted = localStorage.getItem('secretNote');
    if (password === '' || !encrypted) return;

    let decrypted = atob(encrypted).split('').map(c => String.fromCharCode(c.charCodeAt(0) ^ password.charCodeAt(0 % password.length))).join('');
    document.getElementById('note').value = decrypted;
}
