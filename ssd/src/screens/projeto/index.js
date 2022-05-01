import './styles.css';
import { Component } from 'react';
import MainMenu from '../../components/mainMenu';
import {InputText, Select } from '../../components/input';
import {Button, ButtonInverted} from '../../components/button';
import Footer from '../../components/footer';

class Projeto extends Component{
  render() {
    document.title = "Funcionários | PogJob";
    return  (
    
      <>
        <header>
          <meta charset="UTF-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Funcionários | PogJob</title>
        </header>
        <body >
         
          <MainMenu
            title="Projeto"
          />
        
          <main>
            <header>
              <Button
                title="Cadastrar Projeto"
              />
            </header>
        
            <div className="container">
              <section id="Filters">

                <header className="sectionHeader">
                  <span>Filtros</span>
                </header>
                <div className="content">
                  
                  <InputText 
                    label= "Nome" 
                    id="name"
                  />

                  <InputText 
                    label= "ID do Projeto"
                    id="id"
                  />

                  <Select 
                    label="Status"
                    id="status"
                  >
                    <option value="Aberto">Aberto</option>
                    <option value="Em Andamento">Em Andamento</option>
                    <option value="Concluido">Concluido</option>
                  </Select>
                  
                  <Button
                    title="Filtrar"
                  />
                  
                </div>
              </section>
              
              <section id="Table">
                <table>
                  <thead className="sectionHeader">
                    <tr>
                      <th>Id</th>
                      <th>Nome</th>
                      <th>Responsável</th>
                      <th>Status</th>
                      <th>Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#5046</td>
                      <td>Delivery de remédios</td>
                      <td>David Souza</td>
                      <td>Em andamento</td>
                      <td>
                        <ButtonInverted 
                          title="Detalhes do projeto"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>#9374</td>
                      <td>Confeitaria</td>
                      <td>Felipe Motta</td>
                      <td>Concluído</td>
                        <ButtonInverted 
                          title="Detalhes do projeto"
                        />
                    </tr>
                    <tr>
                      <td>#5046</td>
                      <td>Delivery de remédios</td>
                      <td>David Souza</td>
                      <td>Em andamento</td>
                        <ButtonInverted 
                          title="Detalhes do projeto"
                        />
                    </tr>
                    <tr>
                      <td>#9374</td>
                      <td>Confeitaria</td>
                      <td>Felipe Motta</td>
                      <td>Concluído</td>
                        <ButtonInverted 
                          title="Detalhes do projeto"
                        />
                    </tr>
                    <tr>
                      <td>#5046</td>
                      <td>Delivery de remédios</td>
                      <td>David Souza</td>
                      <td>Em andamento</td>
                        <ButtonInverted 
                          title="Detalhes do projeto"
                        />
                    </tr>
                    <tr>
                      <td>#9374</td>
                      <td>Confeitaria</td>
                      <td>Felipe Motta</td>
                      <td>Concluído</td>
                        <ButtonInverted 
                          title="Detalhes do projeto"
                        />
                    </tr>
                  </tbody>
                </table>
              </section>
            </div>
          </main>
          <Footer/>
        </body>
      </>
    );
  };
};


export default Projeto;