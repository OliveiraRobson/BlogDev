// src/utils/shareFunctions.js

export function handleFacebookShare() {
    const urlToShare = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`, 'popup', 'width=600,height=400');
}

export function handleTwitterShare() {
    const textToShare = "Confira este incrível artigo!";
    const urlToShare = window.location.href;
    window.open(`https://twitter.com/share?text=${encodeURIComponent(textToShare)}&url=${encodeURIComponent(urlToShare)}`, 'popup', 'width=600,height=400');
}

export function copyLinkToClipboard() {
    const el = document.createElement('textarea');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Link copiado para a área de transferência! Cole no Instagram ou em outro lugar.');
}
