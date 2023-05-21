import { Client,Databases,ID } from 'appwrite';


const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6469912d7d86760b1907');
const databases = new Databases(client);
const promise = databases.createDocument('646a277f435aa76388a1', '646a278a71b4cce038fb', ID.unique() , {note: "New Note"});

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});