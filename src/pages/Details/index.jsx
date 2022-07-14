import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";



import { Container, Content, Links } from "./styles";
import { Header } from "../../components/Header";

export function Details() {
  return(
    <Container>
      <Header />
      <main>
        <Content>

          <ButtonText title="Excluir Notas" />
          <h1>Explorer- React</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit necessitatibus, nesciunt qui quos accusamus reiciendis deserunt soluta quasi officiis iure eveniet quod, dolores fugiat natus incidunt ea eaque nemo voluptatem?</p>
          <Section title="Links uteis">
            <Links>
              <li><a href="https://www.rocketseat.com.br/" target="_blank">rocketseat</a></li>
              <li><a href="https://www.rocketseat.com.br/" target="_blank">rocketseat</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Node" />
            <Tag title="Express" />
          </Section>
          <Button title="Voltar" />

        </Content>
      </main>
    </Container>
  );
}