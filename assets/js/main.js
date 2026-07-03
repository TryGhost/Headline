(function () {
    pagination(true);
})();

/* Project links sidebar (custom-project template).
 * Metadata comes from per-post code injection (post header), either as
 * `window.projectMetadata = {...}` or a JSON payload:
 * <script type="application/json" data-project-metadata>{...}</script>
 * Supported keys: repository, issues, documentation, download.
 * `issues` defaults to `<repository>/issues` for GitHub repositories. */
(function () {
    const nav = document.querySelector('[data-project-links]');
    if (!nav) return;

    let meta = window.projectMetadata;
    if (!meta) {
        const data = document.querySelector('script[type="application/json"][data-project-metadata]');
        if (data) {
            try {
                meta = JSON.parse(data.textContent);
            } catch (err) {
                console.warn('Ignoring invalid project metadata:', err); // eslint-disable-line no-console
            }
        }
    }
    if (!meta) return;

    if (!meta.issues && meta.repository && /^https:\/\/github\.com\//.test(meta.repository)) {
        meta.issues = meta.repository.replace(/\/+$/, '') + '/issues';
    }

    nav.querySelectorAll('[data-project-link]').forEach(function (link) {
        const url = meta[link.getAttribute('data-project-link')];
        if (!url) return;
        link.href = url;
        link.removeAttribute('hidden');
    });
})();

(function () {
    if (!document.body.classList.contains('post-template')) return;

    const cover = document.querySelector('.gh-cover');
    if (!cover) return;

    const image = cover.querySelector('.gh-cover-image');

    window.addEventListener('load', function () {
        cover.style.setProperty('--cover-height', image.clientWidth * image.naturalHeight / image.naturalWidth + 'px');
        cover.classList.remove('loading');
    });
})();
