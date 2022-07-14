import { Container, Brand, Menu, Search, Content, NewNotes } from "./styles"; 
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { FiPlus, FiSearch } from 'react-icons/fi';
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

export function Home() {
  return(
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header/>
      <Menu>
        <li><ButtonText title="Todos" isActive/></li>
        <li><ButtonText title="Nodejs"/></li>
        <li><ButtonText title="React"/></li>

      </Menu>
      <Search>
        <Input placeholder="pesquisar" icon={FiSearch}/>
      </Search>
      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title:'React', 
            tags:[
              {id: 1, name: 'react'},
              {id: 2, name: 'nodejs'}
            ]
          }}
          />
          
        </Section>
      </Content>
      <NewNotes to="/new">
        <FiPlus/>
        Criar notas
      </NewNotes>
    </Container>
  );
}