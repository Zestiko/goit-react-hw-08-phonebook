import { Contacts } from "components/Contacts/Contacts";
import { Filter } from "components/Filter/Filter";
import { Form } from "components/Form/Form";


 const PhoneBook = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </>
  );

};

export default PhoneBook;