interface Link {
    description?: string;
    id?: number;
    url: string;
    [index: string]: string | number | undefined;
}

type Links = Array<Link>;

function filterByTerm(
    input: Links,
    searchTerm: string,
    lookupKey = 'url'
): Links {
    if (!searchTerm) throw Error('searchTerm cannot be empty')
    if (!input.length) throw Error('input cannot be empty')
    const regex = new RegExp(searchTerm, 'i')
    return input.filter(function(arrayElement) {
        return arrayElement[lookupKey]?.toString().match(regex)
    })
}

const obj1: Link = { url: 'string1', description: '' }
const obj2: Link = { url: 'string2', description: '' }
const obj3: Link = { url: 'string3', description: '', name: 'renato' }

const arrOfLinks: Links = [obj1, obj2, obj3]

filterByTerm(arrOfLinks, 'string3', 'name')

export default filterByTerm
