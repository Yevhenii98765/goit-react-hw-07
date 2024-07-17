import ContactList from "./components/ContactList/ContactList";
import ContactsForm from "./components/ContactsForm/ContactsForm";
import Container from "./components/Container/Container";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  return (
    <>
      <Container>
        <SearchBox />
        <ContactsForm />
        <ContactList />
      </Container>
    </>
  );
};

export default App;
