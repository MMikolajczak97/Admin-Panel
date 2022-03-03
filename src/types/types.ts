export type nullableNumber = number | null;

export interface user {
    id: nullableNumber,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string,
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string,
    }
}


export interface state {
    users: user[]
    selectedUserDetails: user,
    showDeleteDialog: boolean,
    selectedUser: {
        name: string
    }
}


export interface userDetail {
    header: string;
    value: string | nullableNumber;
}

export interface userDetails {
    id: userDetail;
    name: userDetail;
    username: userDetail;
    email: userDetail;
    address: userDetail;
    phoneNumber: userDetail;
    website: userDetail;
    companyName: userDetail;
    companyCatchphrase: userDetail;
    companyBS: userDetail;
}

export interface userDetailsViewState {
    userDetails: userDetails;
}
