import React from 'react'
import { MainContainer, Form, Input, Button } from './styles'
import useForm from '../../hooks/useForm';

function MainPage() {
  const { form, onChange, cleanFields } = useForm({nome:"", modulos:"", tecnologias:"", responsavel:""})

const cadastrar = (event) => {
  event.preventDefault()
  console.log("Formulário enviado!", form)
  cleanFields()
}

  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={cadastrar}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input 
          id="nome"
          name="nome"
          value={form.nome}
          onChange={onChange}
          required
          placeholder="Digite o nome do curso"
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input 
          id="modulos"
          name="modulos"
          value={form.modulos}
          onChange={onChange}
          type='number'
          min={2}
          title='Mínimo de 2 módulos'
          required
          placeholder="Digite o número de módulos"
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
          name="tecnologias"
          value={form.tecnologias}
          onChange={onChange}
          required
          placeholder="Digite as tecnologias abordadas"
        />
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input 
          id="responsavel"
          name="responsavel"
          value={form.responsavel}
          onChange={onChange}
          pattern='^.{5,}'
          title='Mínimo de 5 caracteres'
          required
          placeholder="Digite o nome do responsável"
        />
      <Button type="submit">Criar curso</Button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
