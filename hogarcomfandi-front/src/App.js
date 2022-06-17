import React, { Component } from 'react';
import './App.css';
import { PersonaService } from './service/PersonaService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';

import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      persona: {
        idPersona: null,
        primerNombre: null,
        segundoNombre: null,
        primerApellido: null,
        segundoApellido: null,
        tipoDocumento: null,
        numDocumento: null,
        fechaNacimiento: null,
        cabezaHogar: null
      }
    };
    this.items = [
      {
        label: 'Nuevo',
        icon: 'pi pi-fw pi-plus',
        command: () => { alert('¡Informacion guardada!') }
      }
    ];
    this.onChangeValue = this.onChangeValue.bind(this);
    this.personaService = new PersonaService();
  }

  onChangeValue(event) {
    console.log(event.target.value);
  }

  componentDidMount() {
    this.personaService.getAll().then(data => this.setState({ personas: data }))
  }

  save() {
    this.personaService.save(this.state.persona).then(data => {
      console.log(data)
    })
  }

  render() {
    return (
      <div style={{ width: '80%', margin: '5% auto 0' }}>
        <form id="persona-form">
          <span className="p-float-label">
            <InputText style={{ width: '40%' }} id="primerNombre" value={this.state.value} onChange={(e) => this.setState(
              prevState => {
                let persona = Object.assign({}, prevState.persona)
                persona.idPersona = e.target.value

                return { persona };
              }
            )} />
            <label htmlFor="primerNombre">Primer Nombre</label>
          </span><br />
          <span className="p-float-label">
            <InputText style={{ width: '40%' }} id="segundoNombre" value={this.state.value} onChange={(e) => this.setState(
              prevState => {
                let persona = Object.assign({}, prevState.persona)
                persona.idPersona = e.target.value

                return { persona };
              }
            )} />
            <label htmlFor="segundoNombre">Segundo Nombre</label>
          </span><br />
          <span className="p-float-label">
            <InputText style={{ width: '40%' }} id="primerApellido" value={this.state.value} onChange={(e) => this.setState(
              prevState => {
                let persona = Object.assign({}, prevState.persona)
                persona.idPersona = e.target.value

                return { persona };
              }
            )} />
            <label htmlFor="primerApellido">Primer Apellido</label>
          </span><br />
          <span className="p-float-label">
            <InputText style={{ width: '40%' }} id="segundoApellido" value={this.state.value} onChange={(e) => this.setState(
              prevState => {
                let persona = Object.assign({}, prevState.persona)
                persona.idPersona = e.target.value

                return { persona };
              }
            )} />
            <label htmlFor="segundoApellido">Segundo Apellido</label>
          </span><br />
          <div className="grid p-fluid">
            <label>¿Es cabeza de hogar?</label>
            <div className="card">
              <div className="grid" style={{display:'flex'}}>
                <div className="col-12 md:col-6"  style={{marginRight: '2%'}}>
                  <div className="field-radiobutton">
                    <RadioButton inputId="cabezaHogar" name="option" value='true' checked={this.state.value === 'true'} onChange={(e) => this.setState(
                      prevState => {
                        let persona = Object.assign({}, prevState.persona)
                        persona.idPersona = e.target.value

                        return { persona };
                      }
                    )} />
                    <label htmlFor="cabezaHogar">Si</label>
                  </div><br />
                </div>
                <div className="col-12 md:col-6">
                  <div className="field-radiobutton">
                    <RadioButton inputId="cabezaHogar" name="option" value='false' checked={this.state.value === 'false'} onChange={(e) => this.setState(
                      prevState => {
                        let persona = Object.assign({}, prevState.persona)
                        persona.idPersona = e.target.value

                        return { persona };
                      }
                    )} />
                    <label htmlFor="cabezaHogar">No</label>
                  </div><br/>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Button label="Guardar" icon="pi pi-check" />
          </div>
        </form>
        <br />
        <Panel header='Información Hogar Comfandi' >
          <DataTable value={this.state.personas} responsiveLayout="scroll">
            <Column field='idPersona' header='ID'></Column>
            <Column field='cabezaHogar' header='Cabeza Hogar'></Column>
            <Column field='fechaNacimiento' header='Fecha Nacimiento'></Column>
            <Column field='tipoDocumento' header='Tipo Documento'></Column>
            <Column field='numDocumento' header='Num Documento'></Column>
            <Column field='primerNombre' header='Primer Nombre'></Column>
            <Column field='segundoNombre' header='Segundo Nombre'></Column>
            <Column field='primerApellido' header='Primer Apellido'></Column>
            <Column field='segundoApellido' header='Segundo Apellido'></Column>
          </DataTable>
        </Panel>
      </div>


    );
  }
}
