
export const handleUserRemoval = (e, history) => {
    e.preventDefault();
    localStorage.removeItem('uid')
    history.push('/')
}