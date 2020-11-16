const sources = [
    "/js/vendor/modernizr-3.5.0.min.js",
    "/js/vendor/jquery-3.2.1.min.js",
    "/js/popper.min.js",
    "/js/bootstrap.min.js",
    "/js/plugins.js",
    "/js/active.js"
]
const loadScripts = () => {
    // if(document.getElementById("lightbox"))
    //     document.getElementById("lightbox").remove()
    const externalScripts = document.getElementById('external-scripts')
        externalScripts.innerHTML = ''
        Promise.all(sources.map(src => {
            return new Promise((resolve,reject) => {
                try {
                    const chuong = document.createElement('script')
                    chuong.src = src
                    chuong.async = false
                    chuong.defer = true
                    externalScripts.appendChild(chuong)
                    resolve();
                }
                catch (err) {
                    reject(err)
                }
            })
        }))
}
export {loadScripts}