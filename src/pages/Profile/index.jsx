import { FiArrowLeft, FiUser,FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, Form , Avatar } from "./styles";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { api } from "../../services/api";


export function Profile() {
  const {user, updateProfile} = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();
  
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
 
  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);


  async function handleUpdate() {
    const userUpdate = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
      avatar: user.avatar
    }

    await updateProfile({ user:userUpdate, avatarFile });
  }

  async function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);

    setAvatar(imagePreview);
  }

  return(
    <Container>
        <header>
          <Link to="/">
            <FiArrowLeft />
          </Link>
        </header>

        <Form>
          <Avatar>
            <img 
              src={avatar} 
              alt="Foto do usuário" 
              />

            <label htmlFor="avatar">
              <FiCamera/>

              <input 
                id="avatar" 
                type="file"
                onChange={handleChangeAvatar}
              />              
            </label>

          </Avatar>
          <Input
            placeholder="Nome"
            type="text"
            value={name}
            icon={FiUser}
            onChange={e => setName(e.target.value)}
          />

          <Input
            placeholder="E-mail"
            type="email"
            value={email}
            icon={FiMail}
            onChange={e => setEmail(e.target.value)}
          />
          
          <Input
            placeholder="Senha atual"
            type="password"
            icon={FiLock}
            onChange={e => setPasswordOld(e.target.value)}
          />

          <Input
            placeholder="Nova senha"
            type="password"
            icon={FiLock}
            onChange={e => setPasswordNew(e.target.value)}
          />

          <Button title="Salvar" onClick={handleUpdate}/>

        </Form>

    </Container>
  );
}