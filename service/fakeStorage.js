let storage = [];

exports.clear = () => {
    storage = [];
}

exports.getAll = () => {
    return storage;
}

exports.getByID = (userID) => {
    for(let i = 0; i < storage.length; i++) {
        let _user = storage[i];
        if(_user.id == userID) {
            return user;
        }
    }
    return null;
}

exports.addUser = (user) => {
    storage.push(user);
    return user;
}

exports.updateUser = (user) => {
    for(let i = 0; i < storage.length; i++) {
        let _user = storage[i];
        if(_user.id == user.id) {
            storage[i] = user;
            break;
        }
    }
}

exports.deleteUser = (user) => {
    for(let i = 0; i < storage.length; i++) {
        let _user = storage[i];
        if(_user.id == user.id) {
            storage.splice(i,i);
            break;
        }
    }
}