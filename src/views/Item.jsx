import React from "react";
import { connect } from 'react-redux'
import ActionsGenericStore from 'store/generic/actions.generic.store'

const usersActions = new ActionsGenericStore('users');

function Item({ usersList, addUser, getAllUser, clearUsers }) {
    return (
        <>
            <div>
                <div>Count : {usersList && usersList.length}</div>
                <button onClick={() => addUser({firstName: 'Jean', lastName: 'Miche'})}>Add user in store</button>
                <button onClick={() => getAllUser()}>Get all in users</button>
                <button onClick={() => clearUsers()}>Clear in users</button>
            </div>
            <div>
                {usersList && usersList.length > 0 && usersList.map((user, key) => <code key={key}>{JSON.stringify(user)}</code>)}
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    usersList: state.users.list
});

const mapDispatchToProps = dispatch => ({
    addUser: payload => dispatch(usersActions.ADD(payload)),
    getAllUser: payload => dispatch(usersActions.GET_ALL(payload)),
    clearUsers: payload => dispatch(usersActions.CLEAR(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item)
