const { clear, getAll, addUser, deleteUser, updateUser } = require('./fakeStorage');

describe('Testing the fake storage', () => {
    // Applies only to tests in this describe block
    beforeEach(() => {
        clear();
    });

    test('getAll', () => {
        const userList = getAll();
        expect(userList.length).toBe(0);
    });

    test('add users', () => {
        const user = { id: 1, name: 'user1' };
        addUser(user);

        let userList = getAll();
        expect(userList.length).toBe(1);

        const user2 = { id: 2, name: 'user2' };
        addUser(user2);

        userList = getAll();
        expect(userList.length).toBe(2);
    });

    test('delete users', () => {
        const user = { id: 1, name: 'user1' };
        addUser(user);
        const user2 = { id: 2, name: 'user2' };
        addUser(user2);
        const user3 = { id: 3, name: 'user3' };
        addUser(user3);

        deleteUser(user2);
        let userList = getAll();
        expect(userList.length).toBe(2);

        expect(userList[0] == user).toBeTruthy();
        expect(userList[1] == user3).toBeTruthy();

        deleteUser(user3);
        userList = getAll();
        expect(userList.length).toBe(1);

        // Trying to remove user that don't exists
        deleteUser(user3);
        userList = getAll();
        expect(userList.length).toBe(1);
    });

    test('update users', () => {
        const user = { id: 1, name: 'user1' };
        addUser(user);
        const user2 = { id: 2, name: 'user2' };
        addUser(user2);
        const user3 = { id: 3, name: 'user3' };
        addUser(user3);

        user.name = 'primeiro';
        updateUser(user);
        let userList = getAll();
        expect(userList[0].name).toBe('primeiro');
    });
});