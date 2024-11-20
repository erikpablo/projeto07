export class  Router {
    routes = {}

    add(routename, page) {
        this.routes[routename] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle()
    }

    handle() {
        const { pathname } = window.location
        let route = this.routes[pathname] || this.routes[404]
        console.log("antes do fetch")
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector("#app").innerHTML = html
        })
    }
}
