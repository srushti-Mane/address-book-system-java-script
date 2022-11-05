console.log(" Srushti Ravindra Mane-Deshmukh");
console.log(" Address Book System using Node JS.");   

/**
 * UC 1: Create an address book contact with first name,last name,address, city,state,zip , phone number and email id 
 *  A map containing contact details
 * first_name,last name,address, city,state,zip , phone num and emailId
 */
 function createContact(first_name, last_name,address, city,state,zip , phone_no, email_id){
    /**
     * Creates a  new empty map
     */
    const contact = new Map();

    /**
     * Put the details into the map
     */
    contact.set("first_name", first_name);
    contact.set("last_name", last_name);
    contact.set("address", address);
    contact.set("city", city);
    contact.set("state", state);
    contact.set("zip", zip);
    contact.set("phone_no", phone_no);
    contact.set("email_id", email_id);

    /**
     * Returns a map containing details
     */
    return contact;
}
