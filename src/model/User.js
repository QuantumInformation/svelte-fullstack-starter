// todo temping to switch to TS, iwll prob need need some logic at some point

export function userFromFireBase(serverUser) {
    return getUser(serverUser)
}

function getUser(user) {
    return { email: user.email}
}
