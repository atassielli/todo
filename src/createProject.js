export let projectLibrary = []

export function checkProjectList(value, index, self) {
    return self.indexOf(value) === index
}

export function filteredProjectList() {
    let filterList = projectLibrary.filter(checkProjectList)
    return filterList
}


